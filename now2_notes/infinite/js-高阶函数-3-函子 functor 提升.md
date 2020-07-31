
## 函子 functor


### 函子的概念(2)
1. 函子的标志就是容器具有map方法。该方法将容器里面的每一个值，映射到另一个容器
2. 在函数式编程里，通过函子完成的运算，运算过程中不直接针对值，而是针对这个值的容器----函子。函子本身具有对外接口（map方法），各种函数就是运算符，通过接口接入容器，引发容器里面的值的变化。
3. 由于可以把运算方法封装在函子里面，所以又衍生出各种不同类型的函子，有多少种运算，就有多少种函子。函数式编程就变成了运用不同的函子，解决实际问题。
4. 函子的目的是清晰地展现和控制数据的变化流程, 方便维护。

### 常用函子
1. Maybe functor
2. Either functor
3. Applicative functor
4. Monad functor 函子的嵌套写法
5. IO 操作 input/output



### Maybe functor: 空值检查
```js
// Maybe函子的map方法里面设置了空值检查, 类似typescript的类型检查, 防止调用的时候因为类型错误而报错
class Functor{
    constructor (value) {
        this.value = value;
    }      
    map (fn) {
        return Functor.of(fn(this.value))
    }
}
Functor.of = function (val) {
    return new Functor(val);
}

// 报错示例
Functor.of(null).map(function (s) {
    return s.toUpperCase();
}); //-> TypeError null不支持toUpperCase

// 解决方案
class Maybe extends Functor {
    map(f) {
        return this.val ? Maybe.of(f(this.val)) : Maybe.of(null);
    }
}
Maybe.of(null).map(function (s) {
    return s.toUpperCase();
});
//-> Maybe(null)
```

### Either functor
```js

```

### Applicative functor
```js

```


