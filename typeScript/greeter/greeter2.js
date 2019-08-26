var Person = /** @class */ (function () {
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = firstName + ' ' + lastName;
    }
    return Person;
}());
function greeter(person) {
    return "hello " + person.firstName + "  " + person.lastName;
}
var user = new Person('wu', 'kai');
console.log(greeter(user));
