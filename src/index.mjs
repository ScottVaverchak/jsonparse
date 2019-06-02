import jsonParser from './jsonParser.mjs';
import jsonGenerator from './jsonGenerator';
import fs from 'fs';
import util from 'util';



const contents = fs.readFileSync('test.json', 'utf8');
const json = JSON.parse(contents);

console.log('JSON:');
console.log(util.inspect(json, false, null, true));

const output = jsonParser(json);
console.log(util.inspect(output, false, null, true));


const generatedData = jsonGenerator(output);
// console.log(util.inspect(generatedData, false, null, true));

console.log("////\n////\n////\n////\nOUTPUT STARTS HERE");
const output2 = jsonParser(generatedData);
console.log(util.inspect(output2, false, null, true));