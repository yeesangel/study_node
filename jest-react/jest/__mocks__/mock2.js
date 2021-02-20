export const fetchData = () => {
  return new Promise((resolve, reject) => {
    resolve("(function () { return 'hello' })()");
  })
}