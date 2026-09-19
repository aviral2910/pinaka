const fs = require('fs');
let data = fs.readFileSync('src/components/GovImpact.tsx', 'utf8');

// Replace style={{ default: ... }} with style={({ default: ... } as any)}
data = data.replace(/style=\{\{\s*default:(.*?)\}\}/s, (match, p1) => {
  return `style={({ default: ${p1} } as any)}`;
});

fs.writeFileSync('src/components/GovImpact.tsx', data);
