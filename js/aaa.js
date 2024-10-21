const url = https://www.xiwang.com?a=1#path1?b=2&c=4&a=5;
// (2) ['a=1#path1', 'b=2&c=4&a=5']
function getUrlParams(key) {
  const { hash, search } = new URL(url);

  const keys1 = hash.split('?')[1].split('&');
  const hashObj = {};
  const keys2 = search.split('?')[1].split('&');
  const searchObj = {};
  keys1.forEach(ele => {
    const [key, value] = ele.split('=');
    hashObj[key] = value;
  });

  keys2.forEach(ele => {
    const [key, value] = ele.split('=');
    hashObj[key] = value;
  });

  // if (hashObj[key]) {
  //   return hashObj[key]
  // }

  return hashObj[key] || searchObj[key]
}
