// 实现数组去重函数
// 输入：[1,2,2,'3','3',{a:1},{a:1}, [1,2], [1,2]]
// 输出： [1,2,'3',{a:1},[1,2]]


function fn(arr) {
  const obj = {};

  arr.forEach(ele => {
    obj[ele] = ele;
  });

  return Object.values(obj);

}