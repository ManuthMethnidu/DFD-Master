import fs from 'fs';

const domains = ['Healthcare', 'Education', 'Banking', 'E-commerce', 'Library', 'Transport', 'Entertainment', 'Manufacturing', 'Hospitality', 'Real Estate'];
const entities = {
  Healthcare: ['Patient', 'Doctor', 'Nurse', 'Pharmacy', 'Insurance', 'Lab'],
  Education: ['Student', 'Teacher', 'Admin', 'Ministry', 'Library', 'Parents'],
  Banking: ['Customer', 'Teller', 'Manager', 'Central Bank', 'ATM', 'Credit Agency'],
  'E-commerce': ['Customer', 'Supplier', 'Warehouse', 'Payment Gateway', 'Shipping Co', 'Admin'],
  Library: ['Member', 'Librarian', 'Supplier', 'System', 'Audit', 'Public'],
  Transport: ['Passenger', 'Driver', 'Dispatch', 'Maintenance', 'Payment Gateway', 'Agency'],
  Entertainment: ['User', 'Creator', 'Advertiser', 'Billing System', 'Admin', 'Studio'],
  Manufacturing: ['Worker', 'Supplier', 'Quality Control', 'Management', 'Retailer', 'Distributor'],
  Hospitality: ['Guest', 'Receptionist', 'Housekeeping', 'Restaurant', 'Booking Agency', 'Manager'],
  'Real Estate': ['Buyer', 'Seller', 'Agent', 'Bank', 'Contractor', 'Inspector']
};

const processes_verbs = ['Handle', 'Process', 'Manage', 'Verify', 'Route', 'Validate', 'Calculate', 'Generate', 'Review', 'Authorize', 'Update', 'Store', 'Fetch', 'Cancel', 'Schedule'];
const data_nouns = ['Details', 'Request', 'Response', 'Data', 'Metrics', 'Info', 'Status', 'Alert', 'Report', 'Receipt', 'Invoice', 'Confirmation'];

function r(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

let idCounter = 14;
const scenarios = [];

const levels = ['Context Diagram', 'Level 1 DFD', 'Level 2 DFD'];

// 33 of each level
for (let lvl = 0; lvl < 3; lvl++) {
  for (let i = 0; i < 33; i++) {
    const level = levels[lvl];
    const domain = r(domains);
    
    const diff_idx = Math.floor(Math.random() * 4);
    const difficulties = ['Easy', 'Medium', 'Hard', 'Expert'];
    const difficulty = difficulties[diff_idx];
    
    let numEntities = 1;
    let numProcesses = 1;
    let numStores = 0;
    
    if (level === 'Context Diagram') {
       numEntities = diff_idx + 2; // 2 to 5
       numProcesses = 1;
       numStores = 0;
    } else {
       numEntities = diff_idx + 1; // 1 to 4
       numProcesses = diff_idx + 2; // 2 to 5
       numStores = diff_idx + 1; // 1 to 4
    }
    
    const domainEntities = entities[domain];
    const nodes = [];
    
    // Entities
    for(let e=0; e<numEntities; e++) {
       const ent = r(domainEntities) + (e > 0 ? " " + (e+1) : "");
       nodes.push({ id: `e${e}`, type: 'entity', label: ent });
    }
    
    // Processes
    for(let p=0; p<numProcesses; p++) {
       let pLabel = "";
       if (level === 'Context Diagram') {
          pLabel = `${domain} System`;
       } else {
          pLabel = `${p+1}.0 ${r(processes_verbs)} ${r(domainEntities)}`;
       }
       nodes.push({ id: `p${p}`, type: 'process', label: pLabel });
    }
    
    // Data Stores
    for(let s=0; s<numStores; s++) {
       const sLabel = `D${s+1} ${r(domainEntities)} DB`;
       nodes.push({ id: `s${s}`, type: 'dataStore', label: sLabel });
    }
    
    const edges = [];
    const descSentences = [];
    const numFlows = diff_idx * 2 + (level === 'Context Diagram' ? 3 : 5);
    
    for(let f=0; f<numFlows; f++) {
       let sourceNode = r(nodes);
       let targetNode = r(nodes);
       
       while (sourceNode.id === targetNode.id) {
           targetNode = r(nodes);
       }
       
       let isValid = false;
       if (sourceNode.type === 'process' || targetNode.type === 'process') {
           isValid = true;
       }
       
       if (!isValid) {
           targetNode = r(nodes.filter(n => n.type === 'process'));
           if (!targetNode) continue;
       }
       
       const label = `${r(domainEntities)} ${r(data_nouns)}`;
       edges.push({ source: sourceNode.label, target: targetNode.label, label });
       descSentences.push(`The '${sourceNode.label}' sends '${label}' to '${targetNode.label}'.`);
    }
    
    scenarios.push({
       id: idCounter++,
       title: `${domain} Flow (Q${idCounter-1})`,
       category: domain,
       level: level,
       difficulty: difficulty,
       description: descSentences.join(' '),
       ideal: { nodes, edges }
    });
  }
}

fs.writeFileSync('src/generatedScenarios.ts', `import { Scenario } from './scenarios';\nexport const GENERATED_SCENARIOS: Scenario[] = ${JSON.stringify(scenarios, null, 2)};\n`);
console.log("Successfully generated 99 scenarios!");
