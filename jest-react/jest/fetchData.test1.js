import { expect } from '@jest/globals';
import { fetchData } from './fetchData';

// test('测试异步方法 fetchData 返回结果 { success: true }', async (done) => {
//   const res = await fetchData();
//   expect(res.data).toEqual({ success: true });
//   done();
// });

// test('测试异步方法 fetchData 返回结果 { success: true }', () => {
//   return expect(fetchData()).resolves.toMatchObject({
//     data: { success: true },
//   });
// });

// test('测试异步方法 fetchData 返回结果 404', () => {
//   return expect(fetchData()).rejects.toThrow();
// });


test('测试异步方法 fetchData 返回结果 404', async () => {
  expect.assertions(1);
  try {
    const res = await fetchData();
  } catch (e) {
    expect(e.toString()).toEqual('Error: Request failed with status code 404');
  }
});