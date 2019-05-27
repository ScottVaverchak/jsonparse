const jsonParser = (json) => {
    console.log('Beginning JSON parsing');
    const output = {};

    for(const prop in json) {
        const value = json[prop];
        const key = prop;

        if(isInteger(value)) {
            console.log(`${key} is an Integer`);
        } else if(isFloat(value)) {
            console.log(`${key} is an Float`);
        } else if(isObject(value)) {
            console.log(`${key} is an Object`);
            jsonParser(value);
        } else if(isArray(value)) {
            console.log(`${key} is an Array`);
            if(value.length <= 0) 
                continue;

            jsonParser(value[0]);
        } else {
            console.log(`${key} is probably a String`);
        }
    }

    return output;
};

const isNumber = val => val != "" && isNaN(val) == false;
const isInteger = val => isNumber(val) && Math.round(val) == val;
const isFloat = val => isNumber(val) && Math.round(val) != val; 
const isObject = val => !!val && val.constructor === Object;
const isArray = val => !!val && val.constructor === Array;

export default jsonParser;