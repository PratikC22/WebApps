//Closure 
function OuterFunction() {
    var outerVariable = 100;

    function InnerFunction() {
        var innerVariable = 200;
        console.log("Outer Variable " + outerVariable);
        console.log("Inner Variable " + innerVariable);
    }
    
    return InnerFunction;
}

var innerFunc = OuterFunction();

innerFunc();
