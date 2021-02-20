jest.mock('./util');


// mock 方法二
// jest.mock('./util', () => {
//   const Util = jest.fn();
//   Util.prototype.a = jest.fn();
//   Util.prototype.b = jest.fn();
//   return Util;
// });

import Util from './util';

import demoFunction from './demo';


test('测试 demoFunction', () => {
  demoFunction();
  expect(Util).toHaveBeenCalled();
  expect(Util.mock.instances[0].a).toHaveBeenCalled();
  expect(Util.mock.instances[0].b).toHaveBeenCalled();
  console.log(Util.mock);
})
