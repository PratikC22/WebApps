class Employee {
    constructor(name, position, division) {
        this.name = name;
        this.position = position;
        this.division = division;
    }

    branch() {
        console.log('scranton branch');
    }
}

let michael = new Employee('Michael Scott', 'Regional Manager', 'Corporate');
const dwight = new Employee('Dwight Schrute', 'Assistant to the Manager','Sales');
var jim = new Employee('Jim Halpert', 'Junior Sales Associate', 'Sales');
creed = new Employee('Creed Bratton', 'QA Officer', 'Quality Assurance' );

console.log(michael);
console.log(dwight);
console.log(jim);
console.log(creed);

console.log(michael.branch());



