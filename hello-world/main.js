function doSomething() {
    for (var i = 0; i < 5; i++) { // let
        console.log(" value :: " + i);
    }
    console.log(" outside index value :: " + i);
}
function test() {
    let str = "abc";
    let res = str.endsWith("c");
    console.log(" result :: " + res);
}
test();
//doSomething();
