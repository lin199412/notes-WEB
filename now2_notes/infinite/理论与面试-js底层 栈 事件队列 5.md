## js底层 
1. 内存
2. 事件队列
3. promise封装
4. 递归和内存管理


### 内存

```bash
# 堆内存，栈内存
堆内存：存储引用类型值的空间
栈内存：存储基本类型值和指定代码的环境
栈内存有顺序，堆内存没有顺序
```


### 浏览器原理 - 事件队列

```bash
# 主栈任务->微任务->宏任务
宏任务： 定时器，事件绑定，ajax
微任务：promise， async await,
# 拓展: 事件队列在实际开发中的应用?
```

### JS 递归
```js
## js 递归多了, 会发生什么? 如何解决?

## 解析: 
1. 递归过多会导致大量变量占用内存而不销毁, 导致递归栈溢出
2. 为什么定时器可以解决栈溢出 ?

## 方案: 
function sum0(total, i, callback) {
    if(i === 0) {
        callback(total);
        return;
    }
    sum0(total+1, i-1, callback)
}
sum0(0, 100, value=>{
    console.log(value);
})
sum0(0, 100000, value=>{
    console.log(value);
}) //-> 栈溢出 Uncaught RangeError: Maximum call stack size exceeded

## 改进方案1 - 使用定时器
function sum1(total, i, callback) {
    if(i === 0) {
        callback(total);
        return;
    }
    setTimeout(sum1, 0, total+i, i-1, callback);
}
sum1(0, 100000, value=>{
    console.log(value);
}) //-> 不会栈溢出, 但是需要等待很久才有结果

## 改进方案2
function sum2(total, i, callback) {
    if(i === 0) {
        callback(total);
        return;
    }
    let part = 1000;
    if (i%part === 0) {
        setTimeout(sum2, 0, total+i, i-1, callback);
    } else {
        sum0(total+1, i-1, callback)
    }
}
sum2(0, 100000, value=>{
    console.log(value);
}) //-> 目前最佳


```
