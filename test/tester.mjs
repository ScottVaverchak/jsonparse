
const test = (name, fn) => {
    try {
        fn();
        pass(name);
    } catch(ex) {
        fail(name, ex)
    }
}

const pass = name => console.log('\x1b[42m', 'PASS!', '\x1b[0m', name);
const fail = (name, error) => console.log('\x1b[41m', 'FAIL:', '\x1b[0m' , name, '\n', '\x1b[41m', 'FAIL:', '\x1b[0m', error);

export default test;