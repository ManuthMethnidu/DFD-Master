const fs = require('fs');

const adjectives = ["Digital", "Smart", "Global", "Local", "Enterprise", "Quick", "Pro", "Secure", "Cloud", "Auto"];
const nouns = ["Banking", "Library", "Hospital", "School", "Retail", "Logistics", "Airline", "Hotel", "Cinema", "Pharmacy"];
const actors = ["User", "Customer", "Admin", "Manager", "Staff", "Student", "Patient", "Driver", "Guest", "Client"];
const processVerbs = ["Manage", "Process", "Handle", "Update", "Register", "Verify", "Calculate", "Generate", "Analyze", "Approve"];
const itemNouns = ["Records", "Orders", "Invoices", "Profiles", "Tickets", "Payments", "Reports", "Requests", "Appointments", "Claims"];

function randomChoice(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

const scenarios = [];
let currentId = 200;

for (let i = 0; i < 485; i++) {
    const adj = randomChoice(adjectives);
    const noun = randomChoice(nouns);
    const systemName = `${adj} ${noun} System`;
    const category = `Generated ${noun}`;
    const actor = randomChoice(actors);
    const verb = randomChoice(processVerbs);
    const item = randomChoice(itemNouns);
    
    const typeRoll = Math.random();
    
    if (typeRoll < 0.33) {
        // Context Diagram
        scenarios.push({
            id: currentId++,
            title: `${systemName} (Context Diagram)`,
            category,
            level: 'Context Diagram',
            description: `A '${actor}' sends a '${item} Request' to the '${systemName}' (Process). The system processes the request and sends a '${item} Response' back to the '${actor}'.`,
            ideal: {
                nodes: [
                    { id: 'n1', type: 'entity', label: actor },
                    { id: 'n2', type: 'process', label: systemName }
                ],
                edges: [
                    { source: actor, target: systemName, label: `${item} Request` },
                    { source: systemName, target: actor, label: `${item} Response` }
                ]
            }
        });
    } else if (typeRoll < 0.66) {
        // Level 1 DFD
        const dataStore = `${item} DB`;
        scenarios.push({
            id: currentId++,
            title: `${systemName} (Level 1 DFD)`,
            category,
            level: 'Level 1 DFD',
            description: `A '${actor}' submits a '${item} Request' to '${verb} ${item}' (Process). The process checks the '${dataStore}' (Data Store) for '${item} Data', updates the '${dataStore}' with 'New ${item} Data', and sends a '${item} Status' to the '${actor}'.`,
            ideal: {
                nodes: [
                    { id: 'n1', type: 'entity', label: actor },
                    { id: 'n2', type: 'process', label: `${verb} ${item}` },
                    { id: 'n3', type: 'dataStore', label: dataStore }
                ],
                edges: [
                    { source: actor, target: `${verb} ${item}`, label: `${item} Request` },
                    { source: dataStore, target: `${verb} ${item}`, label: `${item} Data` },
                    { source: `${verb} ${item}`, target: dataStore, label: `New ${item} Data` },
                    { source: `${verb} ${item}`, target: actor, label: `${item} Status` }
                ]
            }
        });
    } else {
        // Level 2 DFD
        const subProc1 = `Validate ${item}`;
        const subProc2 = `Update ${item}`;
        const dataStore1 = `${item} Config`;
        const dataStore2 = `${item} Records`;
        
        scenarios.push({
            id: currentId++,
            title: `${systemName} (Level 2 DFD)`,
            category,
            level: 'Level 2 DFD',
            description: `A '${actor}' sends a '${item} Form' to '${subProc1}' (Process). '${subProc1}' fetches 'Config Data' from '${dataStore1}' (Data Store) and passes 'Validated ${item}' to '${subProc2}' (Process). '${subProc2}' saves 'Saved ${item}' to '${dataStore2}' (Data Store) and issues a 'Confirmation' to the '${actor}'.`,
            ideal: {
                nodes: [
                    { id: 'n1', type: 'entity', label: actor },
                    { id: 'n2', type: 'process', label: subProc1 },
                    { id: 'n3', type: 'process', label: subProc2 },
                    { id: 'n4', type: 'dataStore', label: dataStore1 },
                    { id: 'n5', type: 'dataStore', label: dataStore2 }
                ],
                edges: [
                    { source: actor, target: subProc1, label: `${item} Form` },
                    { source: dataStore1, target: subProc1, label: `Config Data` },
                    { source: subProc1, target: subProc2, label: `Validated ${item}` },
                    { source: subProc2, target: dataStore2, label: `Saved ${item}` },
                    { source: subProc2, target: actor, label: `Confirmation` }
                ]
            }
        });
    }
}

const fileContent = `
import { Scenario } from './scenarios';

export const GENERATED_SCENARIOS: Scenario[] = ${JSON.stringify(scenarios, null, 2)};
`;

fs.writeFileSync('src/generatedScenarios.ts', fileContent.trim() + '\n');
console.log('Generated ' + scenarios.length + ' scenarios.');
