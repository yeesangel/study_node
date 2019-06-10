var arr = [1,2,[12,[3,5,6,7,[12],10]],20,19]

function sum(arr) {
  let count = 0
  for(var i=0, len = arr.length; i<len; i++) {
    count += arr[i].constructor === Array ? sum(arr[i]) : arr[i]
  }

  return count
}

console.log(sum(arr))