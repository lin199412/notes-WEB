布局文件相关规范

### 使用盒子模型进行组织dom结构


### 标签

- 自闭合（self-closing）标签，无需闭合 ( 例如： img input br hr 等 )
- 可选的闭合标签（closing tag），需闭合 ( 例如：</li> 或 </body> )；
- 尽量减少标签数量；

### Class 与 ID

- class 应以功能或内容命名，不以表现形式命名；
- class 与 id 单词字母小写，多个单词组成时，采用中划线-分隔；

### 属性顺序

- id
- class
- name
- data-xxx
- src, for, type, href
- title, alt
- aria-xxx, role