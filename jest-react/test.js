// var result1 = add(3, 4);

// if (result1 !== 7) {
//   new Error(`3 + 4 计算错误`);
// }

// var result2 = reduce(3, 4);

// if (result2 !== 0) {
//   new Error(`3 - 3 计算错误`);
// }

function expect(result) {
  console.log('wukai----', result);
  return {
    toBe: function(acture) {
      if (acture !== result) {
        throw new Error(`计算结果不对 期望结果 ${acture} 真实结果 ${result}`);
      }
    }
  }
}


// expect(add(3, 4)).toBe(10);

function test(desc, fn) {
  try {
    fn();
    console.log(`${desc} 通过`);
  } catch (error) {
    console.log(`${desc} 不通过 ${error}`);
  }
};



test('3 + 4 测试结果', () => {
  expect(add(3, 4)).toBe(7);
})

