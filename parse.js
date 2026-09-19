const fs = require('fs');
const text = fs.readFileSync('bundle.js', 'utf8');
const index = text.indexOf('slug:"pmegp"');
if (index !== -1) {
    console.log(text.substring(index - 50, index + 2500));
}
