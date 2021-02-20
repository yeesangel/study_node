

// const math = require('./math');
import { add, minus, multi } from './math';


// function expect(result) {
//   return {
//     toBe: function(expect) {
//       if (result !== expect) {
//         throw new Error(`期望结果不符合预期`);
//       }
//     }
//   }
// }

// function test(desc, fn) {
//   try {
//     fn()
//   } catch (error) {
//     console.log(`${desc}:${error}`);
//   }
// }

// test('测试减法 5 - 3', () => {
//   expect(minus(5, 3)).toBe(2);
// });

// test('测试乘发 5 * 3', () => {
//   expect(multi(3, 3)).toBe(9);
// });

// 运行 npm run jest
// jest (babel-jest)
// 去 .babelrc 配置
// 在运行代码之前，结合babel，先把你的代码做一次华
// 运行转化后的代码



// test('测试加法 10 与 10 相等', () => {
//   // toBe 匹配器 “===”
//   expect(10).toBe(10);
// });


// test('测试对象内容相当', () => {
//   // toEqual 匹配器
//   const a = { 'noe': 1 }
//   expect(a).toEqual({ 'noe': 1 });
// });


// test('测试 toBeBull', () => {
//   // toBeBull 匹配器
//   const a = undefined;
//   expect(a).toBeNull();
// })


// 测试真假相关的 匹配起
// test('测试 toBeUndefined', () => {
//   // toBeBull 匹配器
//   const a = undefined;
//   expect(a).toBeUndefined();
// })

// test('测试 toBeDefined', () => {
//   // 测试是否定义的变量
//   const a = null;
//   expect(a).toBeDefined();
// })


// test('测试 toBeTruthy', () => {
//   // 测试是否为真
//   const a = 1;
//   expect(a).toBeTruthy();
// })

// test('测试 toBeFalsy', () => {
//   // 测试是否为假
//   const a = 0;
//   expect(a).toBeFalsy();
// })

// test('测试 not', () => {
//   // 测试是否为假
//   const a = 1;
//   expect(a).not.toBeFalsy();
// })

// 数字相关匹配器
// test('测试 toBeGreaterThan', () => {
//   const a = 10;
//   // 测试 10 大于 9
//   expect(a).toBeGreaterThan(9);
// })

// test('测试 toBeLessThan', () => {
//   const a = 10;
//   // 测试 10 小于 9
//   expect(a).toBeLessThan(11);
// })

// test('测试 toBeLessThanOrEqual', () => {
//   const a = 10;
//   // 测试 10 小于 9
//   expect(a).toBeLessThanOrEqual(10);
// })

// test('测试 toBeCloseTo', () => {
//   const a = 0.1;
//   const b = 0.2
//   expect(a + b).toBeCloseTo(0.3);
// })


// String 相关 匹配器
// test('测试 toMatch', () => {
//   const str = 'http://www.baidu.com'
//   expect(str).toMatch('baidu');
// })



// Array Set
test('测试 toContain', () => {
  const arr = ['dell', 'hell', 'zhnasan'];
  expect(arr).toContain('hell');
})

test('测试 toContain', () => {
  const arr = ['dell', 'hell', 'zhnasan'];
  const data = new Set(arr);
  expect(data).toContain('hell');
})

// 异常
const throwFn = () => {
  throw new Error('this is a throw');
}

test('测试 toThrow', () => {
  // expect(throwFn).toThrow();
  expect(throwFn).toThrow('this is a throw');
  // expect(throwFn).toThrow(/this is a throw/);
  // expect(throwFn).not.toThrow('this is an not throw');
})


// "scripts": {
//   "test": "jest --watch" // 只测试更改过的测试用例文件
//   "test": "jest --watchAll" // 测试所有的测试用例文件
// },