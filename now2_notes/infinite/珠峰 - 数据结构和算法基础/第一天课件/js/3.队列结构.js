/*
 * 先进先出 FIFO （First In First Out）
 *   进入队列：添加到后面
 *   移除队列：移除最开始的这个
 * 
 * =>优先级队列 
 */
class Queue {
	container = [];
	enter(element) {
		this.container.push(element);
	}
	leave() {
		return this.container.shift();
	}
	size() {
		return this.container.length;
	}
	value() {
		return this.container;
	}
}

// n：多少人来玩
// m：数到m的人移除掉
function game(n, m) {
	let qe = new Queue;
	// 把人放到队列中    1 2 3 4 5 
	for (let i = 0; i < n; i++) {
		qe.enter(i + 1);
	}

	// 直到队列中只有项，就是剩下的这个人
	while (qe.size() > 1) {
		// 前两个都是移除队列并放到队列的末尾
		for (let i = 0; i < m - 1; i++) {
			qe.enter(qe.leave());
		}
		// 第三个移除去
		qe.leave();
	}

	return qe.value().toString();
}
console.log(game(5, 3));