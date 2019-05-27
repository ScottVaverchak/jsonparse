import jsonParser from './jsonParser.mjs';
import fs from 'fs';

const contents = fs.readFileSync('test.json', 'utf8');
const json = JSON.parse(contents);

console.log('JSON:');
console.log(json);

jsonParser(json, 0);
