import jsonParser from '../src/jsonParser.mjs';
import jsonGenerator from '../src/jsonGenerator.mjs';
import fs from 'fs';
import tester from './tester.mjs';
import assert from 'assert';

const contents = fs.readFileSync('test.json', 'utf8');
const json = JSON.parse(contents);

console.log("Starting tests....");
console.log();

tester("Testing Equality in Type Data between Parses", () => {
    const type_data = jsonParser(json);
    const json1 = jsonGenerator(type_data);
    const type_data1 = jsonParser(json1);


    assert(type_data.length === type_data1.length, `Expected length is ${type_data.length}, acutal: ${type_data1.length}`);

    const checkEqualityTypeData = (existing_type_data, new_type_data) => {
        for(const new_type of new_type_data) {
            let brother = existing_type_data.find(x => x.name === new_type.name);

            if(new_type.name.startsWith('GENKEY')) 
                brother = existing_type_data[0];

            assert(brother, `FAIL! Unable to find a matching record for ${new_type}`);
            assert(new_type.type === brother.type, `FAIL! Tyep mismatch: ${new_type.type} !=  ${brother.type}`);
            
            if(new_type.children) {
                checkEqualityTypeData(new_type.children, brother.children);
            }
        }


    };

    checkEqualityTypeData(type_data, type_data1);
});


