
import axios from 'axios';
import { expect, jest } from '@jest/globals';
import { runCallback, getData } from './mock.js';

jest.mock('axios'); // 模拟接口数据请求

test('测试 runCallback', () => {
  // const func = jest.fn() // mock 函数 1. 捕获函数的调用和返回结果，以及this和

  // const func = jest.fn(() => {
  //   return '1234'
  // }) // mock 函数 捕获函数的调用

  // const func = jest.fn() // mock 函数 捕获函数的调用
  // func.mockReturnValueOnce('Dell')
  // func.mockReturnValueOnce('li')
  // func.mockReturnValueOnce('mock')

  // func.mockImplementation(() => { // 与 mockReturnValueOnce 类似
  //   return 'dell'
  // })

  const func = jest.fn() // mock 函数 捕获函数的调用
  func.mockReturnValue('Dell') // 2. 它可以自由的设置返回结果
  runCallback(func)
  runCallback(func)
  runCallback(func)

  // expect(func).toBeCalled(); // toBeCalled 测试函数被调用
  // expect(func.mock.calls.length).toBe(2)

  expect(func.mock.calls[0]).toEqual(['abc']);
  console.log(func.mock);
})

test('测试 getData', async () => {
  // 3. 第三个用处是改变函数的内部实现
  // axios.get.mockResolvedValue({ data: 'hello' });
  axios.get.mockResolvedValueOnce({ data: 'hello' }); // 模拟第一次
  axios.get.mockResolvedValueOnce({ data: 'word' }); // 模拟第二次

  const data1 = await getData();
  expect(data1).toBe('hello');

  const data2 = await getData();
  expect(data2).toBe('word');
})
