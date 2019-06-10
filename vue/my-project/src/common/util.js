function foo() {
  console.log('我是 foo 函数')
}

console.log('打印一个日志')

function handler() {
  console.log('我是 handler 函数')
}


export default{
  foo,
  handler
}