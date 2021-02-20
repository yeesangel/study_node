const math = require('./math');
const { add, minus, multi } = math;


test('测试加法 2+3', () => {
  expect(add(2, 3)).toBe(5);
});

test('测试加法 5+3', () => {
  expect(minus(5, 3)).toBe(2);
});

test('测试加法 5*3', () => {
  expect(multi(5, 3)).toBe(151);
});