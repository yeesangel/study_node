let passcode = 'secret passcode'

class Employee {
  private _fullName: string

  get fullName(): string{
    return this._fullName;
  }

  set fullName(newName: string) {
    if (passcode && passcode === 'secret passcode') {
      this._fullName = newName;
    } else {
      console.log('update of employee error')
    }
  }
}


let employee = new Employee()

employee.fullName = 'Tome'

if (employee.fullName) {
  console.log(employee.fullName);
}