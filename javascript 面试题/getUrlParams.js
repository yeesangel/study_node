var url = "https://www.xiwang.com?a=1#path1?b=2&c=4&a=5";
// (2) ['a=1#path1', 'b=2&c=4&a=5']
function getUrlParams(uri, name) {
  const { hash, search } = new URL(uri);
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
    searchObj[key] = value;
  });

  return hashObj[name] || searchObj[name];
}

getUrlParams(url, 'a');
