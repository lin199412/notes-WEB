# 项目管理规范


## vue书写规范

### 为 v-for 设置键值
这么做不仅仅是为了看起来好看，而且是为了让我们的历尽有排序的依据，支持vue的局部更新，比如
```js
data: function () {
  return {
    todos: [
      {
        id: 1,
        text: '学习使用 v-for'
      },
      {
        id: 2,
        text: '学习使用 key'
      }
    ]
  }
}
```
>此处如果我们在业务代码中执行以下操作，则只会更新第二个元素
```js
this.todos[1] = {
    id: 2,
    text: '学习使用 key'
}
```
- 正例
```js
<ul>
  <li
    v-for="todo in todos"
    :key="todo.id"
  >
    {{ todo.text }}
  </li>
</ul>
```
- 反例
```js
<ul>
  <li v-for="todo in todos">
    {{ todo.text }}
  </li>
</ul>
```

### Prop 定义应该尽量详细
- 正例
```js
props: {
  status: {
    type: String,
    required: true,
    validator: function (value) {
      return [
        'syncing',
        'synced',
        'version-conflict',
        'error'
      ].indexOf(value) !== -1
    }
  }
}
```
- 反例
```js
props: {
  status: String
}
```

### 避免 v-if 和 v-for 用在一起
- 永远不要把 v-if 和 v-for 同时用在同一个元素上。

    - 为了过滤一个列表中的项目 (比如 v-for="user in users" v-if="user.isActive")。在这种情形下，请将 users 替换为一个计算属性 (比如 activeUsers)，让其返回过滤后的列表。

    - 为了避免渲染本应该被隐藏的列表 (比如 v-for="user in users" v-if="shouldShowUsers")。这种情形下，请将 v-if 移动至容器元素上 (比如 ul, ol)。

- 正例
```js
<ul v-if="shouldShowUsers">
  <li
    v-for="user in users"
    :key="user.id"
  >
    {{ user.name }}
  </li>
</ul>
```
- 反例
```js
<ul>
  <li
    v-for="user in users"
    v-if="user.isActive"
    :key="user.id"
  >
    {{ user.name }}
  </li>
</ul>
```

## 命名规范

### 文件命名

 >单文件组件的文件名应该始终是单词大写开头 (PascalCase)。

- 正例
```js
components/
|- my-component.vue
```
- 反例
```js
components/
|- myComponent.vue
omponents/
|- mycomponent.vue
```

### 父子通讯

- 采用单向数据绑定，父容器管理与分配数据流
- 共用数据与状态数据，使用vuex统一管理

### 子组件

- 参数定义需要明确数据类型与默认值
  ```
  props: {
    a: {
      type: Array,
      default: () => []
    }
  }
  ```
- 派发事件命名
  ```
  以 on- 开头,词组以 - 分隔
  例子：
    this.$emit('on-item-click', ...);
  ```

### vue-router

- 跳转使用name + query方式：<router-link :to="{ name: XXX, query: { ...} }">

### 父组件

- 不参与dom渲染的数据，不要放在data属性中，可以挂载到类实例上
- 组件卸载时，手动清除定时器等其他变量
- 子组件的事件接收函数命名采用驼峰式，以 handle 开头

### vue项目编程风格（eslint）

- eslint:recommended
- eslint-plugin-vue
- eslint-config-airbnb