## 初衷
### 使代码简洁大方, 可读性强

类型签名: 
用一行注释声明函数中数据类型的变化
可以揭露函数的行为和目的, 提高代码的可读性, 方便维护
追踪数据类型变化, 养成严谨的编程习惯

悟: 
不仅仅使用现有的标记规则, 可以按照自己的想法设计新的标记规则
设计思想: 简洁易懂, 不容易引发歧义, 结合js进行实践和调整

实践:
取一个实例, 详写和略写两种形式都写, 注意不要断章取义
略写: 关注每一次类型类型的变化
详写: 详细描述数据的变化过程

## 样本 - 普通函数
```js
//  capitalize :: String -> String
var capitalize = function(s){
  return toUpperCase(head(s)) + toLowerCase(tail(s));
}

//  strLength :: String -> Number
var strLength = function(s){
  return s.length;
}

//  id :: a -> a
var id = function(x){ return x; }

//  head :: [a] -> a
var head = function(xs){ return xs[0]; }


```


## 样本 - 柯里化 curry 完整的实例分析, 不要断章取义
```js

//  join :: String -> [String] -> String 柯里化返回的是一个函数, 记录这个过程或许更好
/// join :: ( [a], String ) -> Fn: ( String, -[a]-) -> String 
/// 描述整个函数的变化过程, 有点累赘?
var join = curry(function(what, xs){
  return xs.join(what);
});

//  match :: Regex -> String -> [String]
//  match :: Regex -> (String -> [String])
/// match :: ( String, RegExp ) -> Fn: ( RegExp, -String- ) -> [String]
var match = curry(function(reg, s){
  return s.match(reg);
});
//  onHoliday :: String -> [String]
/// ???
var onHoliday = match(/holiday/ig);

//  replace :: Regex -> String -> String -> String
//  replace :: Regex -> (String -> (String -> String))
/// replace :: ( String, RegExp, String ) -> Fn: ( RegExp, String, -String- ) -> String
var replace = curry(function(reg, sub, s){
  return s.replace(reg, sub);
});




//  map :: (a -> b) -> [a] -> [b]
/// map :: ( [a], Fn ) -> Fn: ( Fn, -[a]- ) -> [b]
var map = curry(function(f, xs){
  return xs.map(f);
});


//  filter :: (a -> Bool) -> [a] -> [a]
/// 
var filter = curry(function(f, xs){
  return xs.filter(f);
});

//  reduce :: (b -> a -> b) -> b -> [a] -> b
var reduce = curry(function(f, x, xs){
  return xs.reduce(f, x);
});

```

## 样本 - 组合 compose
```js

```

## 样本 - 待解析
```js

```
