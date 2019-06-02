const parseType = (key, json) => {
    const output = {};
    
    output.value = json[key];
    output.name = key;

    if(isInteger(output.value)) {
        output.type = "Integer";
    } else if(isFloat(output.value)) {
        output.type = "Float";
    } else if(isObject(output.value)) {
        output.type = "Object";
        output.children = jsonParser(output.value);
        output.value = null;
    } else if(isArray(output.value)) {
        if(output.value.length > 0) {
            // @TODO(sjv): Create a real random name generator
            output.type = "Array";
            const generateRandomKey = () => `GENKEY_${Math.round(Math.random() * 10000)}`;
            const genKey = generateRandomKey();
            output.children = [parseType(genKey, { [genKey]: output.value[0]})];
            output.value = null;
        }
    } else {
        output.type = "String";
    }

    return output;
};

const jsonParser = (json) => {
    const result = [];
    for(const key in json) {
        const output = parseType(key, json);
        result.push(output);
    }

    return result;
};

const isNumber = val => val != "" && isNaN(val) == false;
const isInteger = val => isNumber(val) && Math.round(val) == val;
const isFloat = val => isNumber(val) && Math.round(val) != val; 
const isObject = val => !!val && val.constructor === Object;
const isArray = val => !!val && val.constructor === Array;
const setOutput = (key, val, type) => { return { key, value: val, type}; }


export default jsonParser;