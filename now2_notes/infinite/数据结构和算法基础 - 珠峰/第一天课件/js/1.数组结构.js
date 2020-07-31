/*
 * JS中的数组结构是浏览器进一步封装好的
 *   1. 存储任意数据类型
 *   2. 容量自动缩放（自动扩容）
 *   3. Array.prototype原型上提供很多供数组实例操作的方法
 */
// arr.splice(1, 0, 100);
// arr.shift()
// 1. 后面每一项的索引都会改变（消耗性能的）
// 2. 数组塌陷问题

// 删除指定某一项的优化
// arr.splice(1, 1);
// 优化方式：在不考虑顺序的情况下，我们让最后一项替换当前项，在删除最后一项
// arr[1] = arr[arr.length - 1];
// arr.length--;
// console.log(arr);

/* let arr = [10, 20, 30, 40, 50];
for (let i = 0; i < arr.length; i++) {
	console.log(arr[i]);
	if (i === 1) {
		arr.splice(i, 1); //=>[10, 30, 40, 50]  索引变了，但是步长还是在累加
		i--;
	}
} */