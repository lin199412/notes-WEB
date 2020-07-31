## typescript 理论基础



## 引用数据类型 - 数组
在 TypeScript 中，数组类型有多种定义方式
1. 「类型 + 方括号」表示法
2. 数组泛型（Array Generic）
3. 用接口表示数组

### 定义数组类型的多种方法
```js

// 「类型 + 方括号」表示法
let fibonacci: number[] = [1, 1, 2, 3, 5]; // 规定数组中的项必须为number类型
fibonacci.push(8);
fibonacci.push('8'); // -> 编译报错, push加入的项不是number类型

let list: any[] = ['xcatliu', 25, { website: 'something' }]; // 规定数组中的项可以是任意类型


// 数组泛型（Array Generic）
let fibonacci2: Array<number> = [1, 1, 2, 3, 5]; // 规定数组中的项必须为number类型
fibonacci2.push(8);
fibonacci2.push('8'); // -> 编译报错, push加入的项不是number类型
let fibonacci3: Array<number | String> = [1, 1, 2, 3, 'wqe']; // 规定数组中的项必须为number或者String类型
fibonacci3.push('8');


// 用接口表示数组
interface NumberArray {
    [index: number]: number; // 规定数组中的项必须为number类型
}
let fibonacci4: NumberArray = [1, 1, 2, 3, 5];
fibonacci4.push(8); // -> 编译报错, 用interface定义的数组不含有push方法 ??

interface NumStrArray {
    [index: number]: number | String; // 规定数组中的项必须为number或者String类型
}
let fibonacci5: NumberArray = [1, 1, 2, 3, '5'];


```

### 定义对象数组
```js
//



```

