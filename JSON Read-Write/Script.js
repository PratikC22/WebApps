const fs = require('fs');

fs.readFile('data.json', (err, data) => {
    if (err) throw err;
    let student = JSON.parse(data);
    console.log(student);
});

let student = {
    name: 'Pratik',
    age: 28,
    language: ["Java", "JavaScript", "HTML", "CSS"],
    company: 'Happiest Minds'
};

let data = JSON.stringify(student, null, 2);

fs.writeFile('new-data.json', data, (err) => {
    if (err) throw err;
    console.log('Data written to new file');
});

