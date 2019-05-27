const jsonParser = (json, level) => {
    const output = {};
    const printLevel = (val) => console.log(val.padStart(val.length + level + 1, ' '));
    for(const prop in json) {
        const value = json[prop];
        const key = prop;

        if(isInteger(value)) {
            printLevel(`${key} is an Integer`);
        } else if(isFloat(value)) {
            printLevel(`${key} is an Float`);
        } else if(isObject(value)) {
            printLevel(`${key} is an Object`);
            jsonParser(value, level + 1);
        } else if(isArray(value)) {
            printLevel(`${key} is an Array`);
            if(value.length <= 0) 
                continue;

            jsonParser(value[0], level + 1);
        } else {
            printLevel(`${key} is probably a String`);
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