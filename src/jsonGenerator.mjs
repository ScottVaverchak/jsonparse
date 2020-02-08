
/*
    This is what we expect for json (? means it nullable): 

    { 
        value: object?,
        name: string,
        type: <Integer, Float, String, Object, Array, DateTime> // Most likely core types
        children: object? // Array or Object
    }

*/
const jsonGenerator = type_array => {
    const result = {};

    for(const type of type_array) {
        result[type.name] = generateData(type);
    }

    return result;
};


const generateData = type => {
    if(type.type === 'Integer') {
        return Math.round(generateData({type: 'Float'}));
    } else if(type.type === 'Float') {
        return Math.random() * 10;
    } else if(type.type === 'String') {
        return Math.random().toString(36).substring(7);;
    } else if(type.type === 'DateTime') {
        const dt = new Date();
        dt.setMinutes(dt.getMinutes() + generateData({type: 'Integer'}));
    } else if(type.type === 'Object' && type.children) {
        return jsonGenerator(type.children);
    } else if(type.type === 'Array' && type.children) {
        const result = [];
        const arrayCount = generateData({type: 'Integer'});
        for(let i = 0; i < arrayCount; i++) {
            result.push(generateData(type.children[0]));
        }

        return result;
    }
};


export default jsonGenerator;
