## typescript 理论基础



## type
使用type前缀可以定义一些复合的数据类型, 也可以给类型取另一个名字
1. 联合类型
2. 类型别名



### 联合类型
```js
type numStr = string | number;
let num:numStr = 1;
let str:numStr = '我';

```

### 类型别名
```js

type Name = string;
type NameResolver = () => string;
type NameOrResolver = Name | NameResolver;
function getName(n: NameOrResolver): Name {
    if (typeof n === 'string') {
        return n;
    } else {
        return n();
    }
}

```

### 定义函数类型
```js

type fn = (para: number) => number;
var add = function(x:number):fn {
  return function(y:number):number {
    return x + y;
  };
};
let res = add(1)(6); // -> 7

```
