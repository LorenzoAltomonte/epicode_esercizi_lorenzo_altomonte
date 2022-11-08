class Person {
    constructor(_name, _age) {
        this.name = _name;
        this.age = _age;
    }
    checkAge(x) {
        if (this.age > x.age) {
            console.log(this.name + " è più vecchio di " + x.name);
        } else {
            console.log(x.name + " è più vecchio di " + this.name);
        }
    }
}
var p1 = new Person("mario", 21);
var p2 = new Person("simone", 18);
var p3 = new Person("giulia", 30);
 p1.checkAge(p2);
 p1.checkAge(p3);
 p2.checkAge(p3);