const fs = require('fs');
let data = fs.readFileSync('src/components/GovImpact.tsx', 'utf8');

// Add import
data = data.replace('import { ComposableMap, Geographies, Geography } from "react-simple-maps";', 'import { ComposableMap, Geographies, Geography } from "react-simple-maps";\nimport indiaTopoJson from "../../public/india-states.json";');

// Replace geography="/india-states.json" with geography={indiaTopoJson}
data = data.replace('geography="/india-states.json"', 'geography={indiaTopoJson}');

fs.writeFileSync('src/components/GovImpact.tsx', data);
