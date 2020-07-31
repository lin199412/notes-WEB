## typescript 理论基础



## 引用数据类型 - 对象 接口 interface
1. interface 定义对象的基本规则
2. type 定义对象
3. interface 和 type 的异同点

### interface 定义对象的基本规则
1. 规定属性所对应的属性值为某个类型
2. 一般不允许多属性或者少属性, 可设置可选属性
3. 允许设置任意属性, 
一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集.
任意属性可填可不填.
4. 只读属性不允许修改

```js
// 规定属性所对应的属性值为某个类型
interface Person {
    name: string;
    age: number;
}
let tom: Person = {
    name: 'Tom',
    age: 25
};


// 设置可选属性
interface Person {
    name: string;
    age?: number;
}
let tom: Person = {
    name: 'Tom'
};


// 设置任意属性
interface Person {
    name: string;
    age?: number;
    [propName: string]: any;
}
let tom: Person = {
    name: 'Tom',
    gender: 'male'
};


// 设置只读属性
interface Person {
    readonly id: number;
    name: string;
}
let tom: Person = {
    id: 89757,
    name: 'Tom',
};
tom.id = 9527; // -> 编译报错, 只读属性不允许修改
tom.name = 'Jack';



```


