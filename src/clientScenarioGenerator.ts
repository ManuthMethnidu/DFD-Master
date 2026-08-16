import { Scenario } from './scenarios';

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

function r(arr: any[]) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function generateScenarios(totalCount: number, startId: number): Scenario[] {
  const scenarios: Scenario[] = [];
  let idCounter = startId;
  const levels = ['Context Diagram', 'Level 1 DFD', 'Level 2 DFD'];

  for (let i = 0; i < totalCount; i++) {
      const level = levels[i % 3];
      const domain = r(domains);
      
      const diff_idx = Math.floor(Math.random() * 4);
      const difficulties = ['Easy', 'Medium', 'Hard', 'Expert'];
      const difficulty = difficulties[diff_idx];
      
      let numEntities = 1;
      let numProcesses = 1;
      let numStores = 0;
      
      if (level === 'Context Diagram') {
         numEntities = diff_idx + 2;
         numProcesses = 1;
         numStores = 0;
      } else {
         numEntities = diff_idx + 1;
         numProcesses = diff_idx + 2;
         numStores = diff_idx + 1;
      }
      
      const domainEntities = entities[domain as keyof typeof entities];
      const nodes: any[] = [];
      
      for(let e=0; e<numEntities; e++) {
         const ent = r(domainEntities) + (e > 0 ? " " + (e+1) : "");
         nodes.push({ id: `e${e}`, type: 'entity', label: ent });
      }
      
      for(let p=0; p<numProcesses; p++) {
         let pLabel = "";
         if (level === 'Context Diagram') {
            pLabel = `${domain} System`;
         } else {
            pLabel = `${p+1}.0 ${r(processes_verbs)} ${r(domainEntities)}`;
         }
         nodes.push({ id: `p${p}`, type: 'process', label: pLabel });
      }
      
      for(let s=0; s<numStores; s++) {
         const sLabel = `D${s+1} ${r(domainEntities)} DB`;
         nodes.push({ id: `s${s}`, type: 'dataStore', label: sLabel });
      }
      
      const edges: any[] = [];
      const descSentences: string[] = [];
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
             const processNodes = nodes.filter(n => n.type === 'process');
             targetNode = processNodes.length > 0 ? r(processNodes) : targetNode;
             if (targetNode.type !== 'process' && sourceNode.type !== 'process') {
                 continue; // Skip if we couldn't ensure at least one process
             }
         }
         
         const label = `${r(domainEntities)} ${r(data_nouns)}`;
         edges.push({ id: `edge-${f}`, source: sourceNode.id, target: targetNode.id, label, sourceLabel: sourceNode.label, targetLabel: targetNode.label });
         descSentences.push(`The '${sourceNode.label}' sends '${label}' to '${targetNode.label}'.`);
      }
      
      scenarios.push({
         id: idCounter++,
         title: `${domain} Flow (Q${idCounter-1})`,
         category: domain,
         level: level,
         difficulty: difficulty as 'Easy' | 'Medium' | 'Hard' | 'Expert',
         description: descSentences.join(' '),
         ideal: { nodes, edges: edges.map(e => ({ source: e.sourceLabel, target: e.targetLabel, label: e.label })) }
      });
  }
  return scenarios;
}
