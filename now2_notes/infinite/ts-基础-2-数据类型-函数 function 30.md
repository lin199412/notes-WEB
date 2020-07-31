## typescript 理论基础


## 引用数据类型 - 函数


### 函数 - 定义函数的基本方式
1. 如果一个函数有输入和输出, 需要定义输入和输出的类型
2. 不允许输入多于或者少于要求的参数
3. 在 TypeScript 的类型定义中，=> 可以用来表示函数的定义，左边是输入类型，需要用括号括起来，右边是输出类型。
在 ES6 中，=> 叫做箭头函数, ts也支持箭头函数

```js

// 函数声明 Function Declaration
function sum(x: number, y: number): number {
    return x + y;
}

sum(1); // -> 编译报错, 输入少于要求的参数
sum(1, 2);
sum(1, 2, 3); // -> 编译报错, 输入多于要求的参数


// 函数表达式 Function Expression
let mySum = function (x: number, y: number): number {
    return x + y;
};
let mySum: (x: number, y: number) => number = function (x: number, y: number): number {
    return x + y;
};

// 如果函数无输出, 输出类型定义为void, any 或者不写
function test1(x: number): void {
    console.log(x);
}
function test2(x: number): any {
    console.log(x);
}
function test3(x: number) {
    console.log(x);
}
function getName(): void {
    return 'tom';
}
getName(); // -> 编译报错, return的数据类型为string, 不是void

// 定义函数


```


### 函数 - 参数拓展
1. 可选参数: 用?表示可选参数, 可选参数必须写在必选参数后面
2. 参数默认值: 参数可以设置默认值, 调用函数时如果不传此参数则使用默认值
3. 剩余参数: 在不确定参数个数的情况下, 可以设置接收不限个数的参数
4. 重载: 在不确定参数类型的情况下, 输入和输出可以设置不同的数据类型

```js

// 可选参数
function buildName(firstName: string, lastName?: string) {
    if (lastName) {
        return firstName + ' ' + lastName;
    } else {
        return firstName;
    }
}

let tomcat = buildName('Tom', 'Cat');
let tom = buildName('Tom');


// 参数默认值
function buildName(firstName: string, lastName: string = 'Cat') {
    return firstName + ' ' + lastName;
}
let tomcat = buildName('Tom', 'Cat'); // -> 'Tom Cat'
let tom = buildName('Tom'); // -> 'Tom Cat

// 剩余参数
function push(array: any[], ...items: any[]) {
    items.forEach(function(item) {
        array.push(item);
    });
}
let a = [0];
push(a, 1, 2, 3);
console.log(a); // -> [0, 1, 2, 3]

// 重载
function reverse(x: number | string): number | string {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}
reverse(123); // -> 321
reverse('456'); // -> '654'


```