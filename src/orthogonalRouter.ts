import { createContext, useContext } from 'react';
import { Position } from 'reactflow';

export interface BoundingBox {
  id: string;
  label?: string;
  left: number;
  top: number;
  right: number;
  bottom: number;
  width: number;
  height: number;
  centerX: number;
  centerY: number;
}

export interface RoutingResult {
  hasConflict: boolean;
  conflictingObstacles: BoundingBox[];
  path: string;
  suggestedPath: string;
  labelX: number;
  labelY: number;
  isDetour: boolean;
  score: number;
}

export interface RoutingContextType {
  autoRouteEnabled: boolean;
  setAutoRouteEnabled: (enabled: boolean | ((prev: boolean) => boolean)) => void;
  showSuggestions: boolean;
  setShowSuggestions: (show: boolean | ((prev: boolean) => boolean)) => void;
}

export const RoutingContext = createContext<RoutingContextType>({
  autoRouteEnabled: true,
  setAutoRouteEnabled: () => {},
  showSuggestions: true,
  setShowSuggestions: () => {},
});

export const useRoutingContext = () => useContext(RoutingContext);

const CLEARANCE_MARGIN = 24;

/**
 * Derives accurate bounding dimensions for any node in the DFD canvas.
 */
export function getNodeBoundingBox(node: any, margin: number = 0): BoundingBox {
  let w = 140;
  let h = 90;

  if (typeof node.width === 'number' && typeof node.height === 'number') {
    w = node.width;
    h = node.height;
  } else if (node.style?.width && node.style?.height) {
    const sw = typeof node.style.width === 'number' ? node.style.width : parseFloat(node.style.width);
    const sh = typeof node.style.height === 'number' ? node.style.height : parseFloat(node.style.height);
    if (!isNaN(sw) && !isNaN(sh)) {
      w = sw;
      h = sh;
    }
  } else {
    switch (node.type) {
      case 'entity':
        w = 128;
        h = 96;
        break;
      case 'process':
        w = node.data?.isContext ? 128 : 192;
        h = node.data?.isContext ? 96 : 128;
        break;
      case 'dataStore':
        w = 176;
        h = 64;
        break;
      case 'note':
        w = 160;
        h = 160;
        break;
      default:
        w = 140;
        h = 90;
    }
  }

  const x = node.position?.x ?? 0;
  const y = node.position?.y ?? 0;

  return {
    id: node.id,
    label: node.data?.label || node.id,
    left: x - margin,
    top: y - margin,
    right: x + w + margin,
    bottom: y + h + margin,
    width: w + margin * 2,
    height: h + margin * 2,
    centerX: x + w / 2,
    centerY: y + h / 2,
  };
}

/**
 * Checks if an orthogonal line segment intersects a bounding box.
 */
export function segmentIntersectsBox(
  p1: { x: number; y: number },
  p2: { x: number; y: number },
  box: BoundingBox,
  clearance: number = CLEARANCE_MARGIN
): boolean {
  const bLeft = box.left - clearance;
  const bRight = box.right + clearance;
  const bTop = box.top - clearance;
  const bBottom = box.bottom + clearance;

  if (Math.abs(p1.y - p2.y) < 0.5) {
    // Horizontal segment
    const y = p1.y;
    const minX = Math.min(p1.x, p2.x);
    const maxX = Math.max(p1.x, p2.x);
    return y >= bTop && y <= bBottom && maxX >= bLeft && minX <= bRight;
  } else if (Math.abs(p1.x - p2.x) < 0.5) {
    // Vertical segment
    const x = p1.x;
    const minY = Math.min(p1.y, p2.y);
    const maxY = Math.max(p1.y, p2.y);
    return x >= bLeft && x <= bRight && maxY >= bTop && minY <= bBottom;
  }
  return false;
}

/**
 * Parses an SVG path (like M ... L ...) into a list of points.
 */
export function parseSvgPathToPoints(d: string): { x: number; y: number }[] {
  const points: { x: number; y: number }[] = [];
  const commands = d.match(/[ML][^ML]*/g) || [];
  for (const cmd of commands) {
    const coords = cmd.slice(1).trim().split(/[,\s]+/).map(Number);
    if (coords.length >= 2 && !isNaN(coords[0]) && !isNaN(coords[1])) {
      points.push({ x: coords[0], y: coords[1] });
    }
  }
  return points;
}

/**
 * Collapses redundant collinear points to clean up right-angled orthogonal paths.
 */
export function simplifyOrthogonalPoints(points: { x: number; y: number }[]): { x: number; y: number }[] {
  if (points.length <= 2) return points;
  const res: { x: number; y: number }[] = [points[0]];

  for (let i = 1; i < points.length - 1; i++) {
    const prev = res[res.length - 1];
    const curr = points[i];
    const next = points[i + 1];

    const isCollinearX = Math.abs(prev.x - curr.x) < 0.5 && Math.abs(curr.x - next.x) < 0.5;
    const isCollinearY = Math.abs(prev.y - curr.y) < 0.5 && Math.abs(curr.y - next.y) < 0.5;

    if (!isCollinearX && !isCollinearY) {
      if (Math.hypot(curr.x - prev.x, curr.y - prev.y) > 0.5) {
        res.push(curr);
      }
    }
  }

  res.push(points[points.length - 1]);
  return res;
}

/**
 * Converts points to an SVG path string.
 */
export function pointsToSvgPath(points: { x: number; y: number }[]): string {
  if (points.length === 0) return '';
  return points
    .map((p, idx) => `${idx === 0 ? 'M' : 'L'}${Math.round(p.x)},${Math.round(p.y)}`)
    .join(' ');
}

/**
 * Determines the optimal label placement along the longest segment of the orthogonal path.
 */
export function getLongestSegmentMidpoint(points: { x: number; y: number }[]): { x: number; y: number } {
  if (points.length < 2) return { x: 0, y: 0 };
  let maxLen = -1;
  let best = { x: (points[0].x + points[points.length - 1].x) / 2, y: (points[0].y + points[points.length - 1].y) / 2 };

  for (let i = 0; i < points.length - 1; i++) {
    const p1 = points[i];
    const p2 = points[i + 1];
    const len = Math.hypot(p2.x - p1.x, p2.y - p1.y);
    if (len > maxLen) {
      maxLen = len;
      best = { x: (p1.x + p2.x) / 2, y: (p1.y + p2.y) / 2 };
    }
  }

  return best;
}

/**
 * Finds all obstacle boxes that intersect any segment of the given points.
 */
export function findCollidingObstacles(
  points: { x: number; y: number }[],
  obstacles: BoundingBox[],
  clearance: number = CLEARANCE_MARGIN
): BoundingBox[] {
  const colliders: BoundingBox[] = [];
  for (let i = 0; i < points.length - 1; i++) {
    const p1 = points[i];
    const p2 = points[i + 1];
    for (const obs of obstacles) {
      if (segmentIntersectsBox(p1, p2, obs, clearance)) {
        if (!colliders.some((c) => c.id === obs.id)) {
          colliders.push(obs);
        }
      }
    }
  }
  return colliders;
}

/**
 * Orthogonal Edge Routing Helper:
 * Checks if the edge collides with or passes near any obstacle nodes.
 * If so, generates a clean, orthogonal detour path that avoids all obstacles
 * and suggests/routes it to preserve layout clarity.
 */
export function computeOrthogonalDetourPath(params: {
  sourceX: number;
  sourceY: number;
  sourcePosition: Position | string;
  targetX: number;
  targetY: number;
  targetPosition: Position | string;
  defaultPath: string;
  defaultLabelX: number;
  defaultLabelY: number;
  obstacles: BoundingBox[];
}): RoutingResult {
  const {
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
    defaultPath,
    defaultLabelX,
    defaultLabelY,
    obstacles,
  } = params;

  if (obstacles.length === 0) {
    return {
      hasConflict: false,
      conflictingObstacles: [],
      path: defaultPath,
      suggestedPath: defaultPath,
      labelX: defaultLabelX,
      labelY: defaultLabelY,
      isDetour: false,
      score: 0,
    };
  }

  // Parse default path to points
  const defaultPoints = parseSvgPathToPoints(defaultPath);
  const colliders = findCollidingObstacles(defaultPoints, obstacles, CLEARANCE_MARGIN);

  if (colliders.length === 0) {
    return {
      hasConflict: false,
      conflictingObstacles: [],
      path: defaultPath,
      suggestedPath: defaultPath,
      labelX: defaultLabelX,
      labelY: defaultLabelY,
      isDetour: false,
      score: 0,
    };
  }

  // Determine handle exit/entry vectors
  const exitOffset = 25;
  const entryOffset = 25;

  const sExit = { x: sourceX, y: sourceY };
  if (sourcePosition === Position.Right || sourcePosition === 'right') sExit.x += exitOffset;
  else if (sourcePosition === Position.Left || sourcePosition === 'left') sExit.x -= exitOffset;
  else if (sourcePosition === Position.Bottom || sourcePosition === 'bottom') sExit.y += exitOffset;
  else if (sourcePosition === Position.Top || sourcePosition === 'top') sExit.y -= exitOffset;

  const tEntry = { x: targetX, y: targetY };
  if (targetPosition === Position.Right || targetPosition === 'right') tEntry.x += entryOffset;
  else if (targetPosition === Position.Left || targetPosition === 'left') tEntry.x -= entryOffset;
  else if (targetPosition === Position.Bottom || targetPosition === 'bottom') tEntry.y += entryOffset;
  else if (targetPosition === Position.Top || targetPosition === 'top') tEntry.y -= entryOffset;

  // Compute bounding envelope around conflicting obstacles
  const minObsX = Math.min(...colliders.map((b) => b.left));
  const maxObsX = Math.max(...colliders.map((b) => b.right));
  const minObsY = Math.min(...colliders.map((b) => b.top));
  const maxObsY = Math.max(...colliders.map((b) => b.bottom));

  const candidateSets: { x: number; y: number }[][] = [];

  // Candidate 1: Route North (Above obstacles)
  const yNorth = Math.min(minObsY - CLEARANCE_MARGIN - 15, Math.min(sExit.y, tEntry.y) - 20);
  candidateSets.push([
    { x: sourceX, y: sourceY },
    sExit,
    { x: sExit.x, y: yNorth },
    { x: tEntry.x, y: yNorth },
    tEntry,
    { x: targetX, y: targetY },
  ]);

  // Candidate 2: Route South (Below obstacles)
  const ySouth = Math.max(maxObsY + CLEARANCE_MARGIN + 15, Math.max(sExit.y, tEntry.y) + 20);
  candidateSets.push([
    { x: sourceX, y: sourceY },
    sExit,
    { x: sExit.x, y: ySouth },
    { x: tEntry.x, y: ySouth },
    tEntry,
    { x: targetX, y: targetY },
  ]);

  // Candidate 3: Route West (Left of obstacles)
  const xWest = Math.min(minObsX - CLEARANCE_MARGIN - 15, Math.min(sExit.x, tEntry.x) - 20);
  candidateSets.push([
    { x: sourceX, y: sourceY },
    sExit,
    { x: xWest, y: sExit.y },
    { x: xWest, y: tEntry.y },
    tEntry,
    { x: targetX, y: targetY },
  ]);

  // Candidate 4: Route East (Right of obstacles)
  const xEast = Math.max(maxObsX + CLEARANCE_MARGIN + 15, Math.max(sExit.x, tEntry.x) + 20);
  candidateSets.push([
    { x: sourceX, y: sourceY },
    sExit,
    { x: xEast, y: sExit.y },
    { x: xEast, y: tEntry.y },
    tEntry,
    { x: targetX, y: targetY },
  ]);

  // Candidate 5: Midpoint X Step
  const midX = (sExit.x + tEntry.x) / 2;
  candidateSets.push([
    { x: sourceX, y: sourceY },
    sExit,
    { x: midX, y: sExit.y },
    { x: midX, y: tEntry.y },
    tEntry,
    { x: targetX, y: targetY },
  ]);

  // Candidate 6: Midpoint Y Step
  const midY = (sExit.y + tEntry.y) / 2;
  candidateSets.push([
    { x: sourceX, y: sourceY },
    sExit,
    { x: sExit.x, y: midY },
    { x: tEntry.x, y: midY },
    tEntry,
    { x: targetX, y: targetY },
  ]);

  let bestPoints: { x: number; y: number }[] = defaultPoints;
  let lowestScore = Infinity;

  for (const rawPoints of candidateSets) {
    const simplified = simplifyOrthogonalPoints(rawPoints);
    const hits = findCollidingObstacles(simplified, obstacles, CLEARANCE_MARGIN / 2);

    let totalLength = 0;
    for (let i = 0; i < simplified.length - 1; i++) {
      totalLength += Math.hypot(simplified[i + 1].x - simplified[i].x, simplified[i + 1].y - simplified[i].y);
    }

    const bends = Math.max(0, simplified.length - 2);
    // Heavy penalty for collisions, moderate penalty for length and bends
    const score = hits.length * 100000 + totalLength + bends * 25;

    if (score < lowestScore) {
      lowestScore = score;
      bestPoints = simplified;
    }
  }

  const suggestedPathSvg = pointsToSvgPath(bestPoints);
  const bestLabel = getLongestSegmentMidpoint(bestPoints);

  return {
    hasConflict: true,
    conflictingObstacles: colliders,
    path: suggestedPathSvg,
    suggestedPath: suggestedPathSvg,
    labelX: bestLabel.x,
    labelY: bestLabel.y,
    isDetour: true,
    score: lowestScore,
  };
}
