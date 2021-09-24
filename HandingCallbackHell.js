//Handling callback hell using promise 
var promise = new Promise(function (resolve, reject) {
    resolve(2);
});

promise.then(addition).then(Subtract).then(multiplication).then((msg) => {
    console.log('output: ' + msg);
}).catch((err) => {
    console.log(err);
});

function addition(val) {
    return (val + 5);
}

function Subtract(val) {
    return (val - 3);
}

function multiplication(val) {
    return (val * 5);
}
