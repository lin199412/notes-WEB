# ENO单文件组件

我们写`vue`组件的时候会使用`.vue`，一个组件的本质其实是对html,css和js的一个封装

我们可以在一个文件下去修改所有的前端类型文件
```html
<template>
<!-- html -->
</template>
<script>
// js
</script>
<style>
/* css */
</style>
```

而`react`的写法更多是对JSX的妥协，把类html写在js里面，样式要另外引入，并且如果没有高阶组件的支持，它是一个全局样式

```js
import React,{Component} from 'react'
import 'style.css'
export default class Test extends Component{
    render(){return <JSX>}
}
```

把React的组件写法换成类似Vue的写法

|||
|-|-|
|templat|jsx/pug|
|script|js/ts|
|style|css/scss|


```html
<template name="Header">
    <div>
        <header>
            {this.state.title}
        </header>
    </div>
</template>

<script>
    // JS
    export default class {
        state = {
            title: '微信'
        }
    }
</script>
<style>
    header {
        height: 50px;
        width: 100%;
        text-align: center;
        line-height: 50px;
        background-color:red;
        color: white;
    }
</style>
```
以上代码将转为以下代码
```js
import { Component as WeElement, createElement as h } from "react";
import styled from "styled-components";
const StyledComponents = styled.div`
  header {
    height: 50px;
    width: 100%;
    text-align: center;
    line-height: 50px;
    background-color: red;
    color: white;
  }
`;

class Header extends WeElement {
  constructor(...args) {
    super(...args);
    this.state = {
      title: "微信"
    };
  }

  render() {
    return h(
      StyledComponents,
      null,
      h("div", null, h("header", null, this.state.title))
    );
  }
}

Header.css = `
    header {
        height: 50px;
        width: 100%;
        text-align: center;
        line-height: 50px;
        background-color:red;
        color: white;
    }
`;
export default Header;
```