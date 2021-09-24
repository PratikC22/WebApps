class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    static countUsers() {
        console.log('There are 20 users');
    }

    register() {
        console.log(this.username + ' is now registered.');
    }
}

let pratik = new User('Pratik', 'pratikc1020@gmail.com', '12345');
pratik.register();

User.countUsers();

class Member extends User {
    constructor(username, email, password, memberPackage) {
        super(username, email, password);
        this.memberPackage = memberPackage;
    }

    getPackage() {
        console.log(this.username + ' is subscribed to ' + this.memberPackage + ' package');
    }
}

let user1 = new Member('Pratik', 'pratikc1020@gmail.com', '12345', 'Standard');
user1.getPackage();