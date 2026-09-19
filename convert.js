const fs = require('fs');
const topojson = require('topojson-server');
const simplify = require('topojson-simplify');

const geojson = JSON.parse(fs.readFileSync('src/data/india-geojson.json', 'utf8'));

// Convert to TopoJSON
let topology = topojson.topology({ states: geojson });

// Presimplify
topology = simplify.presimplify(topology);

// Simplify (adjust threshold as needed, 0.01 is usually a good starting point for lat/long)
topology = simplify.simplify(topology, 0.005);

fs.writeFileSync('src/data/india-states-small.json', JSON.stringify(topology));
console.log('Done!');
