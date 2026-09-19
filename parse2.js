const fs = require('fs');
const text = fs.readFileSync('bundle.js', 'utf8');

// Find the start of the d_ array
const match = text.match(/d_=(\[\{name:.*?\}\])/);
if (match) {
    let raw = match[1];
    console.log(raw.substring(0, 1000));
} else {
    console.log("no match");
}
