import jsonParser from './jsonParser.mjs';
import fs from 'fs';
import util from 'util';



const contents = fs.readFileSync('test.json', 'utf8');
const json = JSON.parse(contents);

console.log('JSON:');
console.log(util.inspect(json, false, null, true))

const output = jsonParser(json);
console.log(util.inspect(output, false, null, true))
