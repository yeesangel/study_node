
class Foo {
  name = 'foo'
  a() {
    console.log(this.name)
  }
  b = function () {
    console.log(this.name)
  }
  c = () => {
    console.log(this.name)
  }
}

var b = new Foo()

let a = {
  name: 'bar',
  a: b.a,
  b: b.b,
  c: b.c,
}

console.log(a.a) // bar
console.log(a.b) // bar
console.log(a.c) // foo