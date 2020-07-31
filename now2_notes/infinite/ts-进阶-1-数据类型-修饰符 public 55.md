## typescript 理论基础



## 修饰符 private、public、protected 
在 TypeScript 中，定义变量的时候, 可以加修饰符表示变量是否私有, 以此来限定变量的使用范围
1. 默认为public
2. 当成员被标记为private时，它就不能在声明它的类的外部访问
3. protected和private类似，但是，protected成员在派生类中可以访问
4. 构造函数也可以被标记为protected。这意味着这个类不能在包含它的类外被实例化，但是能被继承，也就是可以在派生类中被super执行

### public
```js

public book: string = '与神对话';
public testNum:number = 0;

```

### private 不能在声明它的类的外部访问
```js

class Animal {
　　private name: string;

　　constructor(theName: string) {
　　　　this.name = theName;
　　}
}

let a = new Animal('Cat').name; // 编译错误，name是私有的

```


### protected 在派生类中可以访问, 其他情况不允许访问
```js

class Animal {
　　protected name: string;

　　constructor(theName: string) {
　　　　this.name = theName;
　　}
}

class Rhino extends Animal {
     constructor() {
          super('Rhino');
    }         
    getName() {
        console.log(this.name) //此处的name就是Animal类中的name
    }
}

```

### protected 构造函数也可以被标记为protected。这意味着这个类不能在包含它的类外被实例化，但是能被继承，也就是可以在派生类中被super执行
```js

class Animal {
    protected name: string;
    protected constructor(theName: string) {
       this.name = theName;
    }         
}

//Rhino能够继承Animal
class Rhino extends Person {
    private food: string;
    constructor(name: string, food: string) {
       super(name);
       this.food = food;    

    }    
     getFood() {
        return `${this.name} love this ${this.food}`
     }
}

let rhino = new Rhino('zhao', 'banana');

```
