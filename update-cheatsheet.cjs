const fs = require('fs');

let code = fs.readFileSync('src/App.tsx', 'utf-8');

const oldCheatSheet = `<ul className="space-y-4 text-sm font-mono text-gray-800">
                   <li className="flex gap-3">
                     <span className="font-bold">01.</span>
                     <span><strong>External Entities</strong> are sources or destinations of data. They cannot communicate directly with each other (Entity → Entity is invalid).</span>
                   </li>
                   <li className="flex gap-3">
                     <span className="font-bold">02.</span>
                     <span><strong>Data Stores</strong> hold data at rest. Data cannot move directly from one store to another (Data Store → Data Store is invalid).</span>
                   </li>
                   <li className="flex gap-3">
                     <span className="font-bold">03.</span>
                     <span>An External Entity cannot directly read/write to a Data Store. It must go through a Process (Entity → Data Store is invalid).</span>
                   </li>
                   <li className="flex gap-3">
                     <span className="font-bold">04.</span>
                     <span>A <strong>Process</strong> transforms data. It must have at least one input data flow and at least one output data flow (no miracles or black holes).</span>
                   </li>
                   <li className="flex gap-3">
                     <span className="font-bold">05.</span>
                     <span><strong>Context Diagrams</strong> (Level 0) must NOT contain Data Stores. They provide a high-level view showing only the main system Process and External Entities.</span>
                   </li>
                   <li className="flex gap-3">
                     <span className="font-bold">06.</span>
                     <span>All data flows must be labeled accurately.</span>
                   </li>
                </ul>`;

const newCheatSheet = `<ul className="space-y-4 text-sm font-mono text-gray-800">
                   <li className="flex gap-3">
                     <span className="font-bold">01.</span>
                     <span><strong>Data Flow Routing:</strong> Flow lines cannot intersect. Use jump notation for crossings. Text labels must reside entirely above the directional arrow.</span>
                   </li>
                   <li className="flex gap-3">
                     <span className="font-bold">02.</span>
                     <span><strong>Entity Connections:</strong> Entity → Entity is valid but requires a dashed arrow. Entity → Data Store is structurally invalid.</span>
                   </li>
                   <li className="flex gap-3">
                     <span className="font-bold">03.</span>
                     <span><strong>Data Store Connections:</strong> Data Store → Data Store is invalid. Data Store → Entity is invalid. Intermediary processes are always required.</span>
                   </li>
                   <li className="flex gap-3">
                     <span className="font-bold">04.</span>
                     <span><strong>Duplicate Entities:</strong> Marked by a diagonal strike-through in the top-left quadrant. If used, all identical entities in the system must be marked as duplicates.</span>
                   </li>
                   <li className="flex gap-3">
                     <span className="font-bold">05.</span>
                     <span><strong>Process Geometries:</strong> Context Diagrams use unpartitioned processes. Level 1/2 DFDs use partitioned processes (ID, Noun Name, Verb Description).</span>
                   </li>
                </ul>`;

code = code.replace(oldCheatSheet, newCheatSheet);
fs.writeFileSync('src/App.tsx', code);
