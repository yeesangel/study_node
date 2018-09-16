var p1 = new Promise((resolve, reject) => {
	setTimeout(() => {
		reject('失败了1')
	}, 3000)
})

var p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
		resolve('成功了')
	}, 500)
	setTimeout(() => {
		resolve(p1)
	}, 1003)
})



p2.then((result) => {
	console.log(result, 1111)
}).catch(err => {
	console.log(err)
})