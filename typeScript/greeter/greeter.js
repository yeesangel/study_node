function greeter(person) {
    return "hello " + person.firstName + "  " + person.lastName;
}
var user = {
    firstName: 'kai',
    lastName: 'wu'
};
console.log(greeter(user));
