#!/usr/bin/env node
const fs = require('fs').promises;
const { program } = require('commander');

function commaSeparatedList(value, dummyPrevious) {
  return value.split(',');
}

async function start() {
  const {NBars} = await import("nbars");
  program.option('-t, --template', 'Readme.nbs file (defaults to current dir, then to no template)')
  .option('-o, --out <type>', 'Where to output Readme.md file (defaults to current dir/README.md)', 'README.md')
  .requiredOption('-i, --input <items>', 'comma separated list of md file paths to be merged in order', commaSeparatedList);

  program.parse(process.argv);

  // if(!program.input) {
  //   console.log('Must include comma separated list of md file paths to be merged in order via the "-i" option')
  // }
  var template = null;
  if(!program.template) {
    try {
      program.template = await fs.readFile('Readme.nbs', {encoding: 'ascii'});
      template = NBars.compile(program.template);
    } catch (e) {
      console.log('No template found in current dir. Using default');
      var dtemp = "";
      for (var i = 0; i < program.input.length; i++) {
        dtemp += `{{doc${i+1}}} \n\n`
      }
      template = NBars.compile(dtemp);
    }
  } else {
    try {
      program.template = await fs.readFile('Readme.nbs', {encoding: 'ascii'});
      template = NBars.compile(program.template);
    } catch (e) {
      console.log('Error reading file '+program.template);
      process.exit();
    }
  }


  var mdFiles = {};
  for (var i = 0; i < program.input.length; i++) {
    mdFiles[`doc${i+1}`] = await fs.readFile(program.input[i], {encoding: 'ascii'});
  }
  var merged = template(mdFiles);
  await fs.writeFile(program.out,merged, {encoding: 'ascii'});

  console.log('Done');

}
start();
