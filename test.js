const HashMap = require('./HashMap');

function main(){
    const test=new HashMap();
    test.set(1,4);
    test.set(2,8);
    test.set(5,4);
    test.set(7,8);
    test.set(8,4);
    test.set(9,8);
    test.set(10,4);
    test.set(15,8);
    test.set(3,8);
    console.log(test);
}
main();