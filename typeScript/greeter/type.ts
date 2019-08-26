// 字符串类型
// let name: string
// let age: number

// name = 'wukai'
// age = 30


// function greeter(name1: string, age1: number) {
//   return `my name is ${name1}, year old ${age1}`
// }

// console.log('wukai---', greeter(name, age))

// // 数组类型

// let list: number[] = [1, 2, 3]

// let list1: Array<number> = [1, 2, 3, 4]

// console.log('wukai', list, list1);

// let x: [string, number]
// x = ['hello', 30]

// // x[3] = 'world'

// enum Color {
//   red,
//   green,
//   bule,
// }

// let colorName: string = Color[2]

// console.log(colorName);

// let num: number = 1

// num = null


// function error(message: string): never {
//   throw new Error(message);
// }
// // error('wukai')
// function inifintrLoop(): never {
//   while (true) {

//   }
// }
// inifintrLoop()

// object
// declare function create(o: object | null): void;
// create(o: {prop: 12})

// any

let someValue: any = 'this is a string'

// let strLenght: number = (<string>someValue).length
let strLenght: number = (someValue as string).length

console.log(strLenght)