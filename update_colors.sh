#!/bin/bash

# Define replacements
declare -A replacements=(
  ["bg-\\[#FAF9F6\\]"]="bg-canvas"
  ["bg-white"]="bg-surface"
  ["text-black"]="text-ink"
  ["text-\\[#1A1A1A\\]"]="text-ink"
  ["border-black"]="border-line"
  ["bg-black"]="bg-accent"
  ["text-white"]="text-on-accent"
  ["rgba(0,0,0,1)"]="rgba(var(--shadow-rgb),1)"
  ["text-gray-500"]="text-muted"
  ["border-gray-900"]="border-line"
  ["border-gray-200"]="border-line"
)

for file in src/App.tsx src/RouterApp.tsx src/CustomNodes.tsx; do
  for search in "${!replacements[@]}"; do
    replace="${replacements[$search]}"
    # Escape brackets for sed if any
    sed_search=$(echo "$search" | sed 's/\[/\\[/g; s/\]/\\]/g; s/(/\\(/g; s/)/\\)/g')
    sed -i "s/$sed_search/$replace/g" "$file"
  done
done
