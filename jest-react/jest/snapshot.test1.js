import { generateConfig, generateOtherConfig } from "./snapshot";

// 安装 prettier@1.18.2 实现 行内快照 (toMatchInlineSnapshot)

// test('测试 配置文件 generateConfig 快照', () => {
//   // 手动两边加太麻烦了
//   // expect(generateConfig()).toEqual({
//   //   host: 'http://localhost',
//   //   port: 8080,
//   //   domain: 'localhost',
//   // });

//   // 通过 snapshot 来实现
//   expect(generateConfig()).toMatchSnapshot({
//     time: expect.any(Date),
//   });
// })

// test('测试配置文件 generateOtherConfig', () => {
//   expect(generateOtherConfig()).toMatchSnapshot({
//     time: expect.any(Date),
//   });
// })

test("测试配置文件 generateOtherConfig", () => {
  expect(generateOtherConfig()).toMatchInlineSnapshot(
    {
      time: expect.any(Date)
    },
    `
    Object {
      "domain": "localhostq",
      "host": "http://localhost:8080",
      "port": 8080,
      "time": Any<Date>,
    }
  `
  );
});
