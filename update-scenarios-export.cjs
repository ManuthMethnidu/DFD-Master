const fs = require('fs');
let code = fs.readFileSync('src/scenarios.ts', 'utf-8');
code = code.replace(
  'export const SCENARIOS: Scenario[] = generateFullScenariosList();',
  'export const SCENARIOS: Scenario[] = [...generateFullScenariosList(), ...GENERATED_SCENARIOS];'
);
fs.writeFileSync('src/scenarios.ts', code);
