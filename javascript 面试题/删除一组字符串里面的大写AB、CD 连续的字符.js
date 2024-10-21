// 示例1：
// 输入：s="()"
// 输出：true
// 示例2：
// 输入：s="(*)"
// 输出：true
// 示例3：
// 输入：s="(*))"
// 输出：true

// const str = '((*)';

// var  aa = "(()*"

// function test(str) {
//   const left = '(*';
//   const right = '*)';
//   const middle = '*'
//   if (str.match(left)) {
//   }
// }



var str = 'AAABCDBE';

function test(_str) {
  const temp = _str.replace(/AB/g, '').replace(/CD/g, '');

  if (temp.match('AB') || temp.match('CD'))) {
    return test(temp);
  }

  return temp;

}