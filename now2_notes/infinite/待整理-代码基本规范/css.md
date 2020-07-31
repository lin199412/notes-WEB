title: SASS规范
---

## 语法选用

SASS有两种语法格式，一种是 SCSS (Sassy CSS)，另一种是缩进格式（Indented Syntax），有时称之为 Sass。

### SCSS

SCSS语法基于 CSS 语法扩展，每一个有效的 CSS 文件都是一个有效的具有相同含义的 SCSS 文件，换种说法就是 SCSS 能识别大多数的 CSS hacks 写法和浏览器前缀写法以及早期的 IE 滤镜写法，这种格式以 .scss 作为扩展名。


### 团队约定

考虑到 SCSS 语法对 CSS 语法友好的兼容性和扩展性，我们在使用 SASS 编写样式的时候，统一使用 SCSS 语法

## 编码格式

>当在 Ruby1.9或更新的版本运行的时候，SASS 能识辨文档的字符编码。SASS 遵循 CSS 规范去确定样式文件的编码，进而转回 Ruby 字符串编码。这意味着SASS编译的时候会首先检测 BOM，然后到 @charset 声明，再到 Ruby 字符串编码，如果以上都没有设置，SASS 会认为文档的编码为 UTF-8

### 团队约定

严格遵守上面 “CSS规范” 中的 [“编码规范”](code.html)

更多关于 SASS 编码：[SASS Encodings](http://sass-lang.com/documentation/file.SASS-REFERENCE.html)


### 团队约定

SCSS 文件内

* 全部遵循 CSS 注释规范
* 不使用 `/*! */` 注释方式
* 注释内不放 SASS 变量

标准的注释规范如下：

```css
@charset "UTF-8";

/**
 * @desc File Info
 * @author liqinuo
 * @date 2015-10-10
 */

/* Module A
----------------------------------------------------------------*/
.mod-a {}

/* module A logo */
.mod-a-logo {}

/* module A nav */
.mod-a-nav {}


/* Module B
----------------------------------------------------------------*/
.mod-b {}

/* module B logo */
.mod-b-logo {}

/* module B nav */
.mod-b-nav {}
```

## 嵌套规范

### 选择器嵌套

```scss
/* CSS */
.jdc {}
body .jdc {}

/* SCSS */
.jdc {
    body & {}
}
```

```scss
/* CSS */
.jdc {}
.jdc-cover {}
.jdc-info {}
.jdc-info-name {}

/* SCSS */
.jdc {
    &-cover {}
    &-info {
        &-name {}
    }
}
```

### 属性嵌套

```scss
/* CSS */
.jdc {
    background-color: red;
    background-repeat: no-repeat;
    background-image: url(/img/icon.png);
    background-position: 0 0;
}

/* SCSS */
.jdc {
    background: {
        color: red;
        repeat: no-repeat;
        image: url(/img/icon.png);
        position: 0 0;
    }
}
```

## 变量

可复用属性尽量抽离为页面变量，易于统一维护

```scss
// CSS
.jdc {
    color: red;
    border-color: red;
}

// SCSS
$color: red;
.jdc {
    color: $color;
    border-color: $color;
}
```

## 混合(mixin)

根据功能定义模块，然后在需要使用的地方通过 `@include` 调用，避免编码时重复输入代码段

```scss
// CSS
.jdc-1 {
    -webkit-border-radius: 5px;
    border-radius: 5px;
}
.jdc-2 {
    -webkit-border-radius: 10px;
    border-radius: 10px;
}

// SCSS
@mixin radius($radius:5px) {
    -webkit-border-radius: $radius;
    border-radius: $radius;
}
.jdc-1 {
    @include radius; //参数使用默认值
}
.jdc-2 {
    @include radius(10px);
}



// CSS
.jdc-1 {
    background: url(/img/icon.png) no-repeat -10px 0;
}
.jdc-2 {
    background: url(/img/icon.png) no-repeat -20px 0;
}

// SCSS
@mixin icon($x:0, $y:0) {
    background: url(/img/icon.png) no-repeat $x, $y;
}
.jdc-1 {
    @include icon(-10px, 0);
}
.jdc-2 {
    @include icon(-20px, 0);
}
```


## 占位选择器 %

如果不调用则不会有任何多余的 css 文件，占位选择器以 `%` 标识定义，通过 `@extend` 调用

```scss
//scss
%borderbox {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
.jdc {
    @extend %borderbox;
}
```

## extend 继承

```scss
// CSS
.jdc-1 {
    font-size: 12px;
    color: red;
}
.jdc-2 {
    font-size: 12px;
    color: red;
    font-weight: bold;
}

// SCSS
.jdc-1 {
    font-size: 12px;
    color: red;
}
.jdc-2 {
    @extend .jdc-1;
    font-weight: bold;
}

// 或者
%font-red {
    font-size: 12px;
    color: red;
}
.jdc-1 {
    @extend %font-red;
}
.jdc-2 {
    @extend %font-red;
    font-weight: bold;
}
```


## for 循环

```scss
// CSS
.jdc-1 {background-position: 0 -20px;}
.jdc-2 {background-position: 0 -40px;}
.jdc-3 {background-position: 0 -60px;}

// SCSS
@for $i from 1 through 3 {
    .jdc-#{$i} {
        background-position: 0 (-20px) * $i;
    }
}
```

注意：`#{}` 是连接符，变量连接使用时需要依赖

## each 循环

```scss
// CSS
.jdc-list {
    background-image: url(/img/jdc-list.png);
}
.jdc-detail {
    background-image: url(/img/jdc-detail.png);
}

// SCSS
@each $name in list, detail {
    .jdc-#{$name} {
        background-image: url(/img/jdc-#{$name}.png);
    }
}


// CSS
.jdc-list {
    background-image: url(/img/jdc-list.png);
    background-color: red;
}
.jdc-detail {
    background-image: url(/img/jdc-detail.png);
    background-color: blue;
}

// SCSS
@each $name, $color in (list, red), (detail, blue) {
    .jdc-#{$name} {
        background-image: url(/img/jdc-#{$name}.png);
        background-color: $color;
    }
}
```


## function 函数

```scss
@function pxToRem($px) {
    @return $px / 10px * 1rem;
}
.jdc {
    font-size: pxToRem(12px);
}
```


## 运算规范

运算符之间空出一个空格

```scss
.jdc {
    width: 100px - 50px;
    height: 30px / 5;
}
```

注意运算单位，单位同时参与运算，所以 10px 不等于 10，乘除运算时需要特别注意

```scss
// 正确的运算格式
.jdc {
    width: 100px - 50px;
    width: 100px + 50px;
    width: 100px * 2;
    width: 100px / 2;
}
```

## css组织形式

- 以组件名或模块作为命名空间
- 多次共用的属性，抽离为公共属性

## 脚本调用

- 需要脚本调用的dom，以 js- 开头作为css命名前缀

## 按盒子模型进行组织css属性

- 由外到内，浮动优先原则

```
 .a {
     display: XXX
     position: XXX
     margin: XXX
     padding: XXX
     width: XXX
     height: XXX
     ...其他属性
 }
```