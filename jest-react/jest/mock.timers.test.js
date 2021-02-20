import timer from './mock.timers'

// 通常做法
// test('测试 timer', (done) => {
//   timer(() => {
//     expect(1).toBe(1);
//     done();
//   })
// })


// jest.useFakeTimers(); // jest.useFakeTimers(); 与 jest.runAllTimers(); 配对使用

// test('timer 测试', () => {
//   const fn = jest.fn();
//   timer(fn);
//   // jest.runAllTimers(); // 让所有的队列执行
//   // jest.runOnlyPendingTimers(); // 只让在调用栈的timer 执行
//   jest.advanceTimersByTime(3000); // 将时间快进
//   expect(fn).toHaveBeenCalledTimes(1); // 测试用例被调用了几次
// })

beforeEach(() => {
  jest.useFakeTimers();
})

test('timer 测试', () => {
  const fn = jest.fn();
  timer(fn);
  jest.advanceTimersByTime(3000); // 将时间快进
  expect(fn).toHaveBeenCalledTimes(1); // 测试用例被调用了几次
  jest.advanceTimersByTime(3000); // 将时间快进
  expect(fn).toHaveBeenCalledTimes(2); // 测试用例被调用了几次
})

test('timer 测试', () => {
  const fn = jest.fn();
  timer(fn);
  jest.advanceTimersByTime(3000); // 将时间快进
  expect(fn).toHaveBeenCalledTimes(1); // 测试用例被调用了几次
  jest.advanceTimersByTime(3000); // 将时间快进
  expect(fn).toHaveBeenCalledTimes(2); // 测试用例被调用了几次
})