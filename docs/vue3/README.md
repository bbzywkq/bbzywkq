# vue3

## 模板语法

### 文本插值

```vue
<span>Message: {{ msg }}</span>
```



### 原始 HTML

```html
<p>Using text interpolation: {{ rawHtml }}</p>
<p>Using v-html directive: <span v-html="rawHtml"></span></p>
```

### Attribute 绑定

```html
<div v-bind:id="dynamicId"></div>
```

简写语法

```html
<div :id="dynamicId"></div>
```

### 布尔型 Attribute

```html
<button :disabled="isButtonDisabled">Button</button>
```

### 动态绑定多个值

```js
const objectOfAttrs = {
  id: 'container',
  class: 'wrapper'
}
```



```html
通过不带参数的 v-bind，你可以将它们绑定到单个元素上：
<div v-bind="objectOfAttrs"></div>
```

### 使用 JavaScript 表达式

在 Vue 模板内，JavaScript 表达式可以被使用在如下场景上：

- 在文本插值中 (双大括号)
- 在任何 Vue 指令 (以 `v-` 开头的特殊 attribute) attribute 的值中

```vue
{{ number + 1 }}

{{ ok ? 'YES' : 'NO' }}

{{ message.split('').reverse().join('') }}

<div :id="`list-${id}`"></div>
```

### 调用函数

可以在绑定的表达式中使用一个组件暴露的方法：

template

```html
<span :title="toTitleDate(date)">
  {{ formatDate(date) }}
</span>
```

### 受限制的全局访问

模板中的表达式将被沙盒化，仅能够访问到`有限的全局对象列表`。该列表中会暴露常用的内置全局对象，比如 `Math` 和 `Date`。

没有显式包含在列表中的全局对象将不能在模板内表达式中访问，例如用户附加在 `window` 上的属性。然而，你也可以自行在 `app.config.globalProperties`上显式地添加它们，供所有的 Vue 表达式使用。

### 指令 Directives

一个指令的任务是在其表达式的值变化时响应式地更新 DOM

某些指令会需要一个“参数”，在指令名后通过一个冒号隔开做标识。例如用 `v-bind` 指令来响应式地更新一个 HTML attribute：

#### 动态参数

指令参数上也可以使用一个 JavaScript 表达式，需要包含在一对方括号内

```vue 
<a v-bind:[attributeName]="url"> ... </a>

<!-- 简写 -->
<a :[attributeName]="url"> ... </a>
```

还可以将一个函数绑定到动态的事件名称上

```vue
<a v-on:[eventName]="doSomething"> ... </a>

<!-- 简写 -->
<a @[eventName]="doSomething">
```

#### 指令语法

![image](https://file.bbzy.online/blog/image-20221019214356040.png)

## 内置指令

### v-text

`v-text` 通过设置元素的 [textContent](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent) 属性来工作，因此它将覆盖元素中所有现有的内容。如果你需要更新 `textContent` 的部分，应该使用 模板语法代替。

### v-html

`v-html` 的内容直接作为普通 HTML 插入—— Vue 模板语法是不会被解析的。如果你发现自己正打算用 `v-html` 来编写模板，不如重新想想怎么使用组件来代替。

### v-show

基于表达式值的真假性，来改变元素的可见性。

`v-show` 通过设置内联样式的 `display` CSS 属性来工作，当元素可见时将使用初始 `display` 值。当条件改变时，也会触发过渡效果。

### v-if

基于表达式值的真假性，来条件性地渲染元素或者模板片段。

当 `v-if` 元素被触发，元素及其所包含的指令/组件都会销毁和重构。如果初始条件是假，那么其内部的内容根本都不会被渲染。

可用于 `<template>` 表示仅包含文本或多个元素的条件块。

当条件改变时会触发过渡效果。

当同时使用时，`v-if` 比 `v-for` 优先级更高,

::: warning
不推荐在一元素上同时使用这两个指令
:::

###  v-else &v-else-if

表示 `v-if` 或 `v-if` / `v-else-if` 链式调用的“else 块”。

- 限定：上一个兄弟元素必须有 `v-if` 或 `v-else-if`。

### v-for

- **期望的绑定值类型：**`Array | Object | number | string | Iterable`

指令值必须使用特殊语法 `alias in expression` 为正在迭代的元素提供一个别名：

```vue
<div v-for="item in items">
  {{ item.text }}
</div>
```

也可以为索引指定别名 (如果用在对象，则是键值)

```vue
<div v-for="(item, index) in items"></div>
<div v-for="(value, key) in object"></div>
<div v-for="(value, name, index) in object"></div>
```

`v-for` 的默认方式是尝试就地更新元素而不移动它们。要强制其重新排序元素，你需要用特殊 attribute `key` 来提供一个排序提示：

```vue
<div v-for="item in items" :key="item.id">
  {{ item.text }}
</div>
```

###  v-on

给元素绑定事件监听器。

- **缩写：**`@`

- **期望的绑定值类型：**`Function | Inline Statement | Object (不带参数)`

- **参数：**`event` (使用对象语法则为可选项)

- **修饰符：**
  - `.stop` ——调用 `event.stopPropagation()`。
  - `.prevent` ——调用 `event.preventDefault()`。
  - `.capture` ——在捕获模式添加事件监听器。
  - `.self` ——只有事件从元素本身发出才触发处理函数。
  - `.{keyAlias}` ——只在某些按键下触发处理函数。
  - `.once` ——最多触发一次处理函数。
  - `.left` ——只在鼠标左键事件触发处理函数。
  - `.right` ——只在鼠标右键事件触发处理函数。
  - `.middle` ——只在鼠标中键事件触发处理函数。
  - `.passive` ——通过 `{ passive: true }` 附加一个 DOM 事件。

当用于普通元素，只监听[**原生 DOM 事件**](https://developer.mozilla.org/en-US/docs/Web/Events)。当用于自定义元素组件，则监听子组件触发的**自定义事件**。

```vue
<!-- 方法处理函数 -->
<button v-on:click="doThis"></button>

<!-- 动态事件 -->
<button v-on:[event]="doThis"></button>

<!-- 内联声明 -->
<button v-on:click="doThat('hello', $event)"></button>

<!-- 缩写 -->
<button @click="doThis"></button>

<!-- 使用缩写的动态事件 -->
<button @[event]="doThis"></button>

<!-- 停止传播 -->
<button @click.stop="doThis"></button>

<!-- 阻止默认事件 -->
<button @click.prevent="doThis"></button>

<!-- 不带表达式地阻止默认事件 -->
<form @submit.prevent></form>

<!-- 链式调用修饰符 -->
<button @click.stop.prevent="doThis"></button>

<!-- 按键用于 keyAlias 修饰符-->
<input @keyup.enter="onEnter" />

<!-- 点击事件将最多触发一次 -->
<button v-on:click.once="doThis"></button>

<!-- 对象语法 -->
<button v-on="{ mousedown: doThis, mouseup: doThat }"></button>
```

监听子组件的自定义事件 (当子组件的“my-event”事件被触发，处理函数将被调用)：

```vue
<MyComponent @my-event="handleThis" />

<!-- 内联声明 -->
<MyComponent @my-event="handleThis(123, $event)" />
```

### v-bind

动态的绑定一个或多个 attribute，也可以是组件的 prop。

- **缩写：**`:` 或者 `.` (当使用 `.prop` 修饰符)

- **修饰符：**
  - `.camel` ——将短横线命名的 attribute 转变为驼峰式命名。
  - `.prop` ——强制绑定为 DOM property。<Badge type="tip" text="3.2+" vertical="top" />
  - `.attr` ——强制绑定为 DOM attribute。<Badge type="tip" text="3.2+" vertical="top" />

```vue
<!-- 绑定 attribute -->
<img v-bind:src="imageSrc" />

<!-- 动态 attribute 名 -->
<button v-bind:[key]="value"></button>

<!-- 缩写 -->
<img :src="imageSrc" />

<!-- 缩写形式的动态 attribute 名 -->
<button :[key]="value"></button>

<!-- 内联字符串拼接 -->
<img :src="'/path/to/images/' + fileName" />

<!-- class 绑定 -->
<div :class="{ red: isRed }"></div>
<div :class="[classA, classB]"></div>
<div :class="[classA, { classB: isB, classC: isC }]"></div>

<!-- style 绑定 -->
<div :style="{ fontSize: size + 'px' }"></div>
<div :style="[styleObjectA, styleObjectB]"></div>

<!-- 绑定对象形式的 attribute -->
<div v-bind="{ id: someProp, 'other-attr': otherProp }"></div>

<!-- prop 绑定。“prop” 必须在子组件中已声明。 -->
<MyComponent :prop="someThing" />

<!-- 传递子父组件共有的 prop -->
<MyComponent v-bind="$props" />

<!-- XLink -->
<svg><a :xlink:special="foo"></a></svg>
```

`.prop` 修饰符也有专门的缩写，`.`：

```vue
<div :someProperty.prop="someObject"></div>

<!-- 等同于 -->
<div .someProperty="someObject"></div>
```

### v-model

在表单输入元素或组件上创建双向绑定。

- **仅限：**
  - `<input>`
  - `<select>`
  - `<textarea>`
  - components

- **修饰符：**
  - [`.lazy`](https://cn.vuejs.org/guide/essentials/forms.html#lazy) ——监听 `change` 事件而不是 `input`
  - [`.number`](https://cn.vuejs.org/guide/essentials/forms.html#number) ——将输入的合法符串转为数字
  - [`.trim`](https://cn.vuejs.org/guide/essentials/forms.html#trim) ——移除输入内容两端空格

### v-slot

用于声明具名插槽或是期望接收 props 的作用域插槽。

- **缩写：**`#`

- **期望的绑定值类型**：能够合法在函数参数位置使用的 JavaScript 表达式。支持解构语法。绑定值是可选的——只有在给作用域插槽传递 props 才需要。

- **参数**：插槽名 (可选，默认是 `default`)

```vue
<!-- 具名插槽 -->
<BaseLayout>
  <template v-slot:header>
    Header content
  </template>

  <template v-slot:default>
    Default slot content
  </template>

  <template v-slot:footer>
    Footer content
  </template>
</BaseLayout>

<!-- 接收 prop 的具名插槽 -->
<InfiniteScroll>
  <template v-slot:item="slotProps">
    <div class="item">
      {{ slotProps.item.text }}
    </div>
  </template>
</InfiniteScroll>

<!-- 接收 prop 的默认插槽，并解构 -->
<Mouse v-slot="{ x, y }">
  Mouse position: {{ x }}, {{ y }}
</Mouse>
```

### v-pre

跳过该元素及其所有子元素的编译。

元素内具有 `v-pre`，所有 Vue 模板语法都会被保留并按原样渲染。最常见的用例就是显示原始双大括号标签及内容。

```vue
<span v-pre>{{ this will not be compiled }}</span>
```

### v-once

仅渲染元素和组件一次，并跳过之后的更新。

在随后的重新渲染，元素/组件及其所有子项将被当作静态内容并跳过渲染。这可以用来优化更新时的性能。

```vue
<!-- 单个元素 -->
<span v-once>This will never change: {{msg}}</span>
<!-- 带有子元素的元素 -->
<div v-once>
  <h1>comment</h1>
  <p>{{msg}}</p>
</div>
<!-- 组件 -->
<MyComponent v-once :comment="msg" />
<!-- `v-for` 指令 -->
<ul>
  <li v-for="i in list" v-once>{{i}}</li>
</ul>
```

### v-memo <Badge type="tip" text="3.2+" vertical="top" />

- **期望的绑定值类型：**`any[]`

缓存一个模板的子树。在元素和组件上都可以使用。为了实现缓存，该指令需要传入一个固定长度的依赖值数组进行比较。如果数组里的每个值都与最后一次的渲染相同，那么整个子树的更新将被跳过。举例来说：

```vue
<div v-memo="[valueA, valueB]">
  ...
</div>
```

当组件重新渲染，如果 `valueA` 和 `valueB` 都保持不变，这个 `<div>` 及其子项的所有更新都将被跳过。实际上，甚至虚拟 DOM 的 vnode 创建也将被跳过，因为缓存的子树副本可以被重新使用。
`v-memo` 传入空依赖数组 (`v-memo="[]"`) 将与 `v-once` 效果相同。
与`v-for`一起使用

`v-memo` 仅用于性能至上场景中的微小优化，应该很少需要。最常见的情况可能是有助于渲染海量 `v-for` 列表 (长度超过 1000 的情况)：

```vue
<div v-for="item in list" :key="item.id" v-memo="[item.id === selected]">
  <p>ID: {{ item.id }} - selected: {{ item.id === selected }}</p>
  <p>...more child nodes</p>
</div>
```

::: warning

当搭配 `v-for` 使用 `v-memo`，确保两者都绑定在同一个元素上。**`v-memo` 不能用在 `v-for` 内部。**

`v-memo` 也能被用于在一些默认优化失败的边际情况下，手动避免子组件出现不需要的更新。但是一样的，开发者需要负责指定正确的依赖数组以免跳过必要的更新。

:::

### v-cloak

用于隐藏尚未完成编译的 DOM 模板。

**该指令只在没有构建步骤的环境下需要使用。**

当使用直接在 DOM 中书写的模板时，可能会出现一种叫做“未编译模板闪现”的情况：用户可能先看到的是还没编译完成的双大括号标签，直到挂载的组件将它们替换为实际渲染的内容。

`v-cloak` 会保留在所绑定的元素上，直到相关组件实例被挂载后才移除。配合像 `[v-cloak] { display: none }` 这样的 CSS 规则，它可以在组件编译完毕前隐藏原始模板。

```vue
[v-cloak] {
  display: none;
}
```

```vue
<div v-cloak>
  {{ message }}
</div>
```

## 响应式基础

使用 [`reactive()`](https://cn.vuejs.org/api/reactivity-core.html#reactive) 函数创建一个响应式对象或数组：

```vue
import { reactive } from 'vue'

const state = reactive({ count: 0 })
```

