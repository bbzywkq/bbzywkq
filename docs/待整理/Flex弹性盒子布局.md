# Flex弹性盒子布局
## 一、引言
传统的CSS布局基本是`div` + `css`布局，依赖盒子模型，通过`position`、`float`、`display`等方式实现，但是对于一些特殊布局，就不太容易实现，比如垂直居中布局。

2009年，W3C 提出了一种新的方案----Flex 布局，可以简便、完整、响应式地实现各种页面布局。目前大部分浏览器都已经支持Flex属性。

我也一直在使用Flex，但是有的属性也只是会用，一知半解，甚至有的属性就没用过，比如: `order`、`flex-grow`等。写这篇文章的目的主要还是做个总结与梳理，加深印象。

## 二、什么是Flex布局
> Flex 是 Flexible Box 的缩写，意为"弹性布局"。

> CSS 弹性盒子布局是 CSS 的模块之一，定义了一种针对用户界面设计而优化的 CSS 盒子模型。***在弹性布局模型中，弹性容器的子元素可以在任何方向上排布，也可以“弹性伸缩”其尺寸***，既可以增加尺寸以填满未使用的空间，也可以收缩尺寸以避免父元素溢出。子元素的水平对齐和垂直对齐都能很方便的进行操控。通过嵌套这些框（水平框在垂直框内，或垂直框在水平框内）可以在两个维度上构建布局。 —— MDN

## 三、基本概念
### 3.1、容器
采用 Flex 布局的元素，称为 Flex 容器（flex container），简称"**容器**"。它的所有子元素自动成为容器成员，称为 **Flex 项目（flex item）**，简称"**项目**"，也叫`flex`元素。

### 3.2、两根轴线
Flex的两根轴线，分别是`主轴`和`交叉轴`，可以简单理解为`水平`和`竖直`两个方向。默认情况下`主轴`对应的是`水平方向`，`交叉轴`对应的是`竖直方向`，但是这个对应关系是可以修改的（通过`flex-direction`属性），很多情况下我们也确实要修改，具体怎么修改下面会讲到。

### 3.3、起始线和终止线
之前我们一般都默认文档书写时从左到右的，但是Flex没有左右的概念，默认情况下，`flex-direction`的属性值为`row`，意思就是主轴为水平方向，起始线（也就是起点）在左边。`flex-direction`属性还有其他属性值，这里先不列举，后面详细说。

## 四、`CSS`属性
### 4.1、使用`Flex`布局
指定一个元素为`Flex`容器非常简单。

```css
.box {
  display: flex;
}
```
行内元素也可以指定为`Flex`容器。

```css
.box {
  display: inline-flex;
}
```
`Webkit`内核的浏览器。

```css
.box{
  display: -webkit-flex; /* Safari */
  display: flex;
}
```
**注意，设为 Flex 布局以后，子元素的float、clear和vertical-align属性将失效。**

### 4.2、容器的属性
容器可以设置下面6个属性：

```css
flex-direction
flex-wrap
flex-flow
justify-content
align-items
align-content
```
先初始化一下我们的页面

```html
/* HTML */
<div class="container">
    <div class="item">one</div>
    <div class="item">two</div>
    <div class="item">three</div>
</div>
```
```css
/* CSS */
.container {
    width: 800px;
    height: 400px;
    margin: 100px auto;
    border: 1px dashed #00f;
}
.item {
    border: 1px solid #000;
    text-align: center;
}
```
此时我们的页面是这样的

![image](https://file.bbzy.online/blog/31a44db0-0e40-4195-9cfe-1373a51e6929.png)

#### `flex-direction`属性
`flex-direction`属性可以让我们更改 flex 元素的排列方向（即主轴的方向），它有四个值。

```css
.box {
  flex-direction: row | row-reverse | column | column-reverse;
  /* row（默认）:  主轴为水平方向，起点在左端。 */
  /* row-reverse:  主轴为水平方向，起点在右端。 */
  /* column:  主轴为竖直方向，起点在上面。 */
  /* column-reverse:  主轴为竖直方向，起点在下面。 */
}
```
> 注意，当主轴为水平方向时，对应的交叉轴就为竖直方向，反之亦然。

嗯。。。还是看效果吧，首先把容器设置为flex容器

```css
.container {
  ...
  display: flex;
}
```
然后再设置`flex-direction`属性。

效果就不一一展示了，太占地方，放一张对比的效果图。

![image](https://file.bbzy.online/blog/279f9448-8a52-49b6-a8eb-1f723bc7db31.png)

这样就很清晰了，***可能有人已经注意到了，项目在交叉轴方向上都被拉伸了***，这是因为有另一个属性的作用，它是`align-items`，它的作用是控制容器内项目在交叉轴上的排列方式，后面会介绍，这里先不详细说。

#### `flex-wrap`属性
默认情况下，项目都排在一条线（又称"轴线"）上。`flex-wrap`属性定义，如果一条轴线排不下，如何换行。

```css
.box{
  flex-wrap: nowrap | wrap | wrap-reverse;
  /* nowrap（默认）:  不换行 */
  /* wrap:  换行，第一行在前面 */
  /* wrap-reverse:  换行，第一行在后面 */
}
```
还是要写一写，首先把上面的`flex-direction`属性改成默认的，或者删除掉，现在效果是这样的

![image](https://file.bbzy.online/blog/31fc2a41-4043-449e-adb2-8d5b9f7b858c.png)

然后，我们给容器内的项目设置宽度，使内容宽度超过容器的宽度

```Plain Text
.item {
  width: 300px;  /* 每个项目宽度为300px，总共是900px */
  ...
}
```
![image](https://file.bbzy.online/blog/e45a3885-d8dd-40f5-bc5f-f62d25d79ad8.png)

可以看到，每个项目宽度设置为300px，已经超过容器宽度的800px了，但是项目并没有换行，而是被压缩在一行了，接下来看看`flex-wrap`的作用，还是展示对比图。

![image](https://file.bbzy.online/blog/b0f855d5-301e-4120-bbb0-3d486c01ecd0.png)

对比看起来就很明了了，`nowrap`其实就是默认的属性值，不换行，压缩在容器内展示，`wrap`和`wrap-reverse`都是换行，但是不同行的展示顺序不同。

#### `flex-flow`属性
可以将两个属性 `flex-direction` 和 `flex-wrap` 组合为简写属性 `flex-flow`。第一个指定的值为 `flex-direction` ，第二个指定的值为 `flex-wrap`。默认值为：`row nowrap`

#### `justify-content`属性
`justifity-content`属性定义了项目在主轴上的对齐方式。

```css
justify-content: flex-start;       /* 默认值，左对齐 */
justify-content: flex-end;         /* 右对齐 */
justify-content: center;           /* 居中 */
justify-content: space-between;    /* 两端对齐，项目之间的间隔都相等
                                      （首个元素在起点，末尾元素在终点） */
justify-content: space-around;     /* 均匀排列每个元素
                                      每个元素周围分配相同的空间 */
justify-content: space-evenly;     /* 均匀排列每个元素
                                      每个元素之间的间隔相等 */
```
还是看对比图吧

![image](https://file.bbzy.online/blog/137f7785-4b3d-4aa6-8bad-968d2d8d6028.png)

其中`space-around`和`space-evenly`要分清楚，两个都是均匀分布，区别在于容器两端与元素之间的距离是否相等。

#### `align-items`属性
`align-items`属性定义了项目在交叉轴上的对其方式，上面讲`flex-direction`属性的最后说到了这个属性，现在就一起来看看。

```css
align-items: flex-start;   /* 元素向交叉轴的起点对齐 */
align-items: flex-end;     /* 元素向交叉轴的终点对齐 */
align-items: center;       /* 元素在交叉轴居中对齐。 */
align-items: baseline;     /* 项目的第一行文字的基线对齐 */
align-items: stretch;      /* 默认，如果项目未设置高度或设为auto，将占满整个容器的高度。 */
```
![image](https://file.bbzy.online/blog/f3f3b2ee-4bad-43ea-802e-62b67349c034.png)

可以看到当属性值为`stretch`的时候和一开始的效果是一样的，因为这是默认的属性值。

#### `align-content`属性
`align-content`属性定义了多根轴线在交叉轴上的对齐方式。是`轴线`的对齐方式，不是`项目`。

```css
align-content: flex-start;     /* 与交叉轴的起点对齐 */
align-content: flex-end;      /* 与交叉轴的终点对齐 */
align-content: center;        /* 在交叉轴居中对齐 */
align-content: space-between; /* 与交叉轴两端对齐，轴线之间的间隔平均分布 */
align-content: space-around;   /* 每根轴线两侧的间隔都相等 */
align-content: space-evenly;  /* 均匀分布，两端与每条轴线之间距离相等 */
align-content: stretch;   /* 默认，轴线占满整个交叉轴 */
```
这里有个需要注意的地方，当内容高度（也可能是宽度）不固定的时候，`align-content`默认属性值是`stretch`，也就是充满交叉轴的长度，这时候设置`align-items`可以看出效果。

但是如果`align-content`设置为其他属性，`align-items`设置的属性可能就“失效”了。其实不是失效，因为给`align-content`设置除了`stretch`的属性后，每个主轴的内容高度（也可能是宽度）就被压缩了，这时候再设置`align-items`当然就看不出什么效果了。

最后还是看下对比图

![image](https://file.bbzy.online/blog/4c717369-3d84-4f7a-90c3-8c77488d419a.png)



### 4.3、项目的属性
项目可以设置下面几个属性

```Plain Text
order
flex-grow
flex-shrink
flex-basis
flex
align-self
```
#### `order`属性
`order`属性定义项目（元素）的排列顺序。数值越小，排列越靠前，默认为0。

还是先修改一下页面代码

```css
/* HTML */
<div class="container">
  <div class="item item1">one</div>
  <div class="item item2">two</div>
  <div class="item item3">three</div>
</div>

/* CSS */
.container {
  width: 800px;
  height: 400px;
  margin: 100px auto;
  border: 1px dashed #00f;
  display: flex;
  align-items: flex-start;
}
.item {
  width: 200px;
  margin: 20px 0;
  border: 1px solid #000;
  text-align: center;
}
```
现在效果是这样

![image](https://file.bbzy.online/blog/12d2aae2-3500-44c0-a2e4-44b6d505bca3.png)

增加CSS代码

```css
.item1 {
  order: 3
}

.item2 {
  order: 2
}

.item3 {
  order: 1
}
```
![image](https://file.bbzy.online/blog/a3ae2812-311f-4dc6-a134-3f8a516f87c2.png)

可以看到，排列顺序发生了变化，`order`值越小，排列越靠前，还可以为负数。

#### `flex-grow`属性
`flex-grow`属性定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。

先恢复一下代码，分别添加代码

```css
/* 给所有项目都设置为1 */
.item {
  flex-grow: 1;
}

/* 只给item1设置 */
.item1 {
  flex-grow: 1;
}

/* 只给item1和item2设置 */
.item1 {
  flex-grow: 1;
}
.item2 {
  flex-grow: 1;
}
```
然后看下对比

![image](https://file.bbzy.online/blog/d2b819eb-54a5-48a7-878f-ec65eb628788.png)

可以看到如果只给一个元素设置`flex-grow`大于0的属性，那个这个元素会占据剩余空间。

如果给多个元素设置相同的`flwx-grow`属性，那么这些元素会平分剩余空间。

还有一种情况我没列举，给不同元素设置不同大小的`flex-grow`属性，这时候会根据`flex-grow`的大小分配不同大小的空间。

上面说的都是在容器有剩余空间的情况下，如果项目充满了容器，name设置`flex-grow`是没效果的。

#### `flex-shrink`属性
`flex-shrink`属性指定了 `flex` 元素的收缩规则。`flex` 元素仅在默认宽度之和大于容器的时候才会发生收缩，其收缩的大小是依据 `flex-shrink` 的值，默认为1。

```Plain Text
.container {
  width: 400px;  /* 容器宽度小于项目宽度之和 */
}
.item1 {
  flex-shrink: 2;
}
```
![image](https://file.bbzy.online/blog/e70e8892-6647-41f1-aec1-7509675c1400.png)

可以看到第一个元素被压缩的程度是其他两个的2倍。这是因为`flex-shrink`默认值为1，第一个元素我们设置为2。

#### `flex-basis`属性
`flex-basis`属性指定了 `flex` 元素在主轴方向上的初始大小。如果不使用 `box-sizing` 改变盒模型的话，那么这个属性就决定了 `flex` 元素的内容盒（`content-box`）的尺寸。

![image](https://file.bbzy.online/blog/cc6e04f0-e02a-4b6a-ad29-1c1386e7bdae.png)

当我们设置为`auto`时，就是使用项目本来的宽度。

#### `flex`属性
`flex`属性是`flex-grow`, `flex-shrink` 和 `flex-basis`的简写，默认值为`0 1 auto`。后两个属性可选。

有几种写法：

**单值语法**

* 一个不带单位的数值，会被当做`flex-grow`的属性值。
* 一个有效的宽度值（如：`10px`），会被当做`flex-basis`的属性值。
* 关键字`none`，`auto`或`initial`。

**双值语法**

第一个值必须为一个无单位数，并且它会被当作 `<flex-grow>` 的值。第二个值必须为以下之一：

* 一个无单位数：它会被当作 `<flex-shrink>` 的值。
* 一个有效的宽度值（如：`10px`），会被当做`flex-basis`的属性值。

**三值语法**

* 第一个值必须为一个无单位数，并且它会被当作 `<flex-grow>` 的值。
* 第二个值必须为一个无单位数，它会被当作 `<flex-shrink>` 的值。
* 第三个值必须为一个有效宽度值，它会被当作 `<flex-basis>` 的值。

```Plain Text
flex: auto;  /* 相当于 flex: 1 1 auto */
flex: none;  /* 相当于 flex: 0 0 auto */
```
#### `align-self`属性
`align-self`属性可以设置单个项目与其他项目不一样的对齐方式，可以覆盖`align-items`属性，默认值为`auto`，表示继承父元素的`align-items`属性。

`align-self`的属性值和`align-items`是一样的，只不过多了一个`auto`。

![image](https://file.bbzy.online/blog/78a975ce-a35e-4bc5-9d0f-97d5e3389545.png)

上图中给容器设置了`align-items: flex-start;`，然后单独给第一个元素设置了`align-self: flex-end;`可以看到该元素和其他的元素排列方式不同。

[原文地址](https://segmentfault.com/a/1190000023801961)