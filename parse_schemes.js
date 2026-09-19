const fs = require('fs');

async function run() {
  const res = await fetch('https://saarthibiz.com/assets/index-COLw-SaL.js');
  const text = await res.text();
  
  // Try to find the schemes array: Gc=[{slug:"pmegp"...}]
  // Since it's minified, let's just find the text around pmegp and regex match the array.
  // There are two arrays: Gc (detailed pages) and WL (cards maybe?)
  
  const match = text.match(/Gc=(\[\{slug:"pmegp",.*?\}\])/);
  if (match) {
    const rawArray = match[1];
    // Since it's not valid JSON (keys are unquoted), we can parse it using a Function.
    // Replace all variable references inside with strings or null to prevent ReferenceErrors, 
    // but the easiest is just a Function returning it.
    // Actually, icon variables might cause ReferenceError.
    // Let's strip icons before eval.
    let cleaned = rawArray.replace(/icon:[a-zA-Z0-9_$]+/g, 'icon:""');
    
    try {
      const func = new Function('return ' + cleaned + ';');
      const data = func();
      fs.writeFileSync('schemes_data.json', JSON.stringify(data, null, 2));
      console.log('Successfully saved ' + data.length + ' schemes to schemes_data.json');
    } catch (e) {
      console.log('Eval error', e.message);
    }
  } else {
    console.log('No match found for Gc array');
  }
}

run();
