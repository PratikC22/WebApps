//Handling callback hell using promise 
var p = new Promise(function (resolve, reject) {
    resolve(2);
});

p.then(addition).then(subtract).then(multiplication).then((msg) => {
    console.log('output: ' + msg);
}).catch((err) => {
    console.log(err);
});

function addition(val) {
    return (val + 5);
}

function subtract(val) {
    return (val - 3);
}

function multiplication(val) {
    return (val * 5);
}
