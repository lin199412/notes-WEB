/*
 * 特点：后进先出  LIFO (last in first out) 
 *   进栈也是放到栈的顶部
 *   出栈只能把栈顶部的内容先出栈
 *   => 进栈内容不能放到中间，也不能把中间某个东西出栈
 */
class Stack {
	container = []; //=>this.container=[];
	// Stack.prototype
	enter(element) {
		// 进栈
		this.container.unshift(element);
	}
	leave() {
		// 出栈
		return this.container.shift();
	}
	size() {
		// 长度
		return this.container.length;
	}
	value() {
		// 内容
		return this.container;
	}
}

/* 把十进制数字转换为二进制 */
let num = 100;
console.log(num.toString(2)); //=>"111010"
Number.prototype.decimal2binary = function decimal2binary() {
	let sk = new Stack;
	let decimalNum = this.valueOf();
	if (decimalNum === 0) return '0';
	while (decimalNum > 0) {
		sk.enter(decimalNum % 2);
		decimalNum = Math.floor(decimalNum / 2);
	}
	return sk.value().join('');
};
console.log(num.decimal2binary());