
// 第一种模拟请求数据的方法

// import axios from 'axios';
// import { fetchData } from './mock2';

// jest.mock('axios');

// test('测试模拟数据 fetchData', async () => {
//   axios.get.mockResolvedValue({
//     data: "(function () { return 'hello' })()"
//   })
//   const data = await fetchData();
//   expect(eval(data)).toBe('hello');
// })


// 第二种模拟请求数据的方法

jest.mock('./mock2'); // 真实模拟的是 是 __mocks__/mock2.js 里面的文件 等同于 jest.config.js 文件里面的 automock: true,

import { fetchData } from './mock2';

const { getNumber } = jest.requireActual('./mock2');

test('测试模拟数据 fetchData', async () => {
  const data = await fetchData();
  expect(eval(data)).toBe('hello');
})


test('测试 getNumber 方法', () => {
  expect(getNumber()).toBe('123');
})
