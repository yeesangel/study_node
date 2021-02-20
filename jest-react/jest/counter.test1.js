import { afterAll, afterEach, beforeAll, beforeEach, expect } from '@jest/globals';
import { Counter } from './counter';

let counter = null;

describe('所有测试内容', () => {
  beforeAll(() => {
    console.log('beforeAll')
  });

  beforeEach(() => {
    counter = new Counter()
    console.log('brforeEach');
  })

  afterEach(() => {
    console.log('afterEach');
  })

  afterAll(() => {
    console.log('afterAll');
  });


  describe('增加相关的代码', () => {
    // only 只执行 一个 测试用例
    // test.only('测试 onAdd 方法', () => {
    //   console.log('onAdd')
    //   counter.onAdd();
    //   expect(counter.count).toBe(1);
    // });

    test('测试 onAdd 方法', () => {
      console.log('onAdd')
      counter.onAdd();
      expect(counter.count).toBe(1);
    });

    test('测试 onAddTwo 方法', () => {
      console.log('onAddTwo')
      counter.onAddTwo();
      expect(counter.count).toBe(2);
    });
  })

  describe('减少相关的代码', () => {
    test('测试 onMinus 方法', () => {
      console.log('onMinus')
      counter.onMinus();
      expect(counter.count).toBe(-1);
    });

    test('测试 onMinusTwo 方法', () => {
      console.log('onMinusTwo')
      counter.onMinusTwo();
      expect(counter.count).toBe(-2);
    });
  })
})

