class Person {
    firstName: string
    lastName: string
    fullName: string

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName
        this.lastName = lastName
        this.fullName = firstName + ' ' + lastName
    }
}


function greeter(person: Person) {
    return `hello ${person.firstName}  ${person.lastName}`;
}

let user = new Person('wu', 'kai');

console.log(greeter(user));