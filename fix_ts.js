const fs = require('fs');
let data = fs.readFileSync('src/components/GovImpact.tsx', 'utf8');

// Replace the style={{...}} block with style={({...}) as any}
data = data.replace(/style=\{\{([\s\S]*?pressed:[\s\S]*?\}\s*)\}\}/, 'style={({$1}) as any}');

fs.writeFileSync('src/components/GovImpact.tsx', data);
