## typescript 理论基础



## 特殊数据类型
在 TypeScript 中，可以定义某些特殊的数据类型, 还不确定这些类型在实际开发中的作用
1. 元组 Tuple
2. 枚举 Enum



### 元组 Tuple
```js
// 元组 Tuple: 元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。

let tom: [string, number] = ['Tom', 25];


let tom: [string, number];
tom[0] = 'Tom';
tom[1] = 25;
tom[0].slice(1);
tom[1].toFixed(2);


let tom: [string, number];
tom = ['Tom', 25];
tom = [25, 'Tom']; // -> 编译报错, 元素类型顺序有误

```

### 枚举 Enum
```js
// 枚举（Enum）类型是对JavaScript数据类型的补充
// 用于取值被限定在一定范围内的场景，比如一周只能有七天，颜色限定为红绿蓝等
// 枚举成员会被赋值为从 0 开始递增的数字，同时也会对枚举值到枚举名进行反向映射

enum Days {Sun, Mon, Tue, Wed, Thu, Fri, Sat};

console.log(Days["Sun"] === 0); // true
console.log(Days["Mon"] === 1); // true

console.log(Days[0] === "Sun"); // true
console.log(Days[1] === "Mon"); // true


```


### 类 class
```js



```