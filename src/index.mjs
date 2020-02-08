import jsonParser from './jsonParser.mjs';
import jsonGenerator from './jsonGenerator.mjs';
import fs from 'fs';
import util from 'util';


const label = text => {
    // @NOTE(sjv): Long strings need not apply - we don't handle them
    const len = label.length + 4;
    const padLeft = ((80 - len) / 2);
    const padRight  = 80 - padLeft + (len / 2);

    console.log();console.log();console.log();
    console.log("".padStart(80, '#'));
    console.log(text.padEnd(padRight, '#').padStart(80, '#'));
    console.log("".padStart(80, '#'));
}


const contents = fs.readFileSync('test.json', 'utf8');
const json = JSON.parse(contents);

label("ORIGINAL JSON");
console.log(util.inspect(json, false, null, true));

label("TYPE DATA ARRAY");
const output = jsonParser(json);
console.log(util.inspect(output, false, null, true));

label("GENERATED JSON DATA");
const generatedData = jsonGenerator(output);
console.log(util.inspect(generatedData, false, null, true));
