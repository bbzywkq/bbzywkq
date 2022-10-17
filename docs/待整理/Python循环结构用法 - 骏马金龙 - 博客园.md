# Python循环结构用法 - 骏马金龙 - 博客园
本文介绍python中的while循环、for循环。在python中for可以用于循环，也可用于另一种近亲的列表解析，列表解析是python中非常重要的特性，详细内容见后面的文章。

一般来说，python写for循环比写while更容易、方便，而且python中的for比while效率要更高，如果可以，用for而不是while。

## while循环
python中的while/for循环和其它语言的while循环有些不一样，它支持else分支。结构如下：

```python
while <CONDITION>:
    CODE
else:
    CODE_ELSE

```
注意，condition部分只能是表达式，不能是语句，所以condition中不能包含赋值语句，如`while a = x:`是错误的。

while和for的else分支表示当正常退出while/for循环的时候所执行的代码分支。所谓正常退出，是指不是通过break跳出的情况，也就是正常把所有循环条件轮完的情况。**这对于那些需要通过设置标志位来判断的情况来说非常方便**，而标志位通常是用于离开循环的时候，提供一个额外的标记、通知功能，比如退出循环时想找的数据是否找到。

例如搜索一个列表，并在退出时告知是否找到。如果使用标志位来实现，如下：

```python
found = False

while x and not found:
    if match(x[0]):
        print("found it")
        found = True
    else:
        x = x[1:]

if not found:
    print("not found")

```
如果通过else，则逻辑更清晰：

```python
while x:
    if match(x[0]):
        print("found it")
        break
    x = x[1:]
else:
    print("not found")

```
再例如，判断一个数(如下面的y)是否是质数。

```Plain Text
y = 21

x = y // 2
while x > 1:
    if y % x == 0:
        print( y, "has a factor: ", x)
        break
    x -= 1
else:
    print("y is a prime")

```
想象一下如果不使用while的else，上面的功能该如何实现。

## pass、break、continue、else
这几个关键字都能用在while/for中。

* break：退出整个循环(while/for)，如果嵌套了循环，则退出break所在的那个层次
* continue：直接跳到下一次循环
* else：在循环正常退出(不是break中断的循环)时执行的所执行的默认代码块
* pass：在python中作为空的占位符，表示什么也不做。比如:
* if x:pass
* while x:pass
* def x():pass
* class x:pass

在python 3.x中，pass的另一种方式是`...`，它也表示什么也不做的占位符。

## for循环
python中的for是一个通用的序列迭代器，和bash的for语法类似。python中没有`for(i=0;i<N;i++)`的语法，但for结合range可以实现一样的功能，后文介绍。

for语法：

```Plain Text
for i in <Sequence>:
    CODE
else:
    CODE_ELSE

```
每次迭代时，for从序列中取一个元素赋值给控制变量i，下一轮迭代取下一个元素再赋值给i。和其它语言不太一样，for中的控制变量**不会在for循环完后消失，它会保持最后一个被迭代的元素值**。之所以会这样，是因为其它语言中for是一个代码块，而python中for不算是代码块，也就是说没有自己的名称空间。

实际上不止序列，只要是可迭代的对象，都能用for进行遍历。关于什么是可迭代的，将专门在迭代器相关的文章中解释。

例如，遍历一个字符串，因为它是序列。

```Plain Text
for i in 'xiaofang':
    print(i)

print("var i after: ",i)   # 输出g

```
遍历一个列表：

```Plain Text
L = ["aa","bb","cc"]
for i in L:
    print(i)

```
嵌套：

```Plain Text
L = ["aa","bb","cc"]
for i in L:
    for j in i:
        print(j)

```
计算序列中所有数值的和：

```Plain Text
L = [1,2,3,4,5]
sum = 0
for i in L:
    sum += i

print(sum)

```
### for迭代字典
**for迭代字典时，迭代的是key**。

```Plain Text
D = {'a': 1,
     'b': 2,
     'c': 3}

for key in D:
    print(key, "=>", D[key])

```
其它迭代字典的几种方式：

1.通过keys()迭代字典

```Plain Text
for k in D.keys():
    print(key, "=>", D[key])

```
2.直接迭代字典的value

```Plain Text
for v in D.values():
    print(v)

```
3.同时迭代key和value

```Plain Text
for k, v in D.items():
    print(k, v)

```
### for中的赋值和序列解包
for迭代时，实际上是从可迭代对象中取元素并进行赋值的过程，python中各种变量赋值的方式在for中都支持。而且，**python中变量赋值是按引用赋值的，所以每次迭代过程中赋值给控制变量的是那个元素的引用，而不是拷贝这个元素并赋值给控制变量**。所以，如果赋值给控制变量的是可变对象时，修改控制变量会直接修改原始数据。

例如:

```Plain Text
T = [(1, 2), (3, 4), (5, 6)]
for i in T:
     print(i)

for (a, b) in T:
    print(a, b)

```
输出：

```Plain Text
(1, 2)
(3, 4)
(5, 6)
1 2
3 4
5 6

```
for还支持[序列解包](https://www.cnblogs.com/f-ck-need-u/p/10122962.html#blog1544969684)的赋值形式。

例如：

```Plain Text
for (a, *b, c) in [(1, 2, 3, 4), (5, 6, 7, 8)]:
    print(a, b, c)

```
结果：

```Plain Text
1 [2, 3] 4
5 [6, 7] 8

```
因为python是按引用赋值的，所以控制变量都是直接指向迭代元素的，而不是拷贝副本后进行赋值。看下面的结果：

```Plain Text
L = [1111, 2222]
print(id(L[0]))
print(id(L[1]))

print("-" * 15)

for i in L:
    print(id(i))

```
输出结果：

```Plain Text
46990096
46990128
---------------
46990096
46990128

```
可见，变量i和列表中元素的内存地址是一致的。

正因为是按引用赋值，所以迭代过程中修改赋值给控制变量i的不可变对象时会创建新对象，从而不会影响原始数据，但如果赋值给i的是可变对象，则修改i会影响原始数据。

例如：

```Plain Text
L = [1111, 2222]

for i in L:
    i += 1

print(L)

```
列表L不会改变：

```Plain Text
[1111, 2222]

```
而下面修改控制变量i会改变原始对象：

```Plain Text
L = [[1],[1,2],[1,2,3],[1,2,3,4]]

for i in L:
    i.append(0)

print(L)

```
结果：

```Plain Text
[[1, 0], [1, 2, 0], [1, 2, 3, 0], [1, 2, 3, 4, 0]]

```
## for + range
python中并没有直接支持`for i=0;i<N;i++`的for语法，但是，通过for + range()，可以实现类似的功能。

先介绍一下range()。它像Linux下的seq命令功能一样，用来返回一些序列数值。range()返回一个可迭代对象，目前无需知道可迭代对象是什么，只需知道它可以转换成list、tuple、Set，然后可以在通用迭代器for中进行迭代。

```Plain Text
>>> range(3)
range(0, 3)

>>> list(range(3)),set(range(3)),tuple(range(3))
([0, 1, 2], {0, 1, 2}, (0, 1, 2))

```
可见，range()返回的序列值是前闭后开的。

还可以指定起始值，步进(每隔几个数)。

```Plain Text
>>> list(range(1,5))
[1, 2, 3, 4]

>>> list(range(-1,5))
[-1, 0, 1, 2, 3, 4]

>>> list(range(-1,5,2))
[-1, 1, 3]

```
步进值指定为负数的时候，可以生成降序的序列值。

```Plain Text
>>> list(range(10,5,-1))
[10, 9, 8, 7, 6]

```
range()返回了生成序列值的迭代器后，可以用for来进行迭代。

```Plain Text
for i in range(3):
    print(i)

```
range()还经常用于for中作为序列的索引位。例如：

```Plain Text
L = ["a","b","c","d"]
for i in range(3):
    print(L[i])

```
### 分析for + range迭代的过程
下面两个例子，在结果上是等价的：

```Plain Text
for i in range(3):
    print(i)

for i in [0,1,2]:
    print(i)

```
但除了结果上，过程并不一样。range()既然返回可迭代对象，说明序列数值是需要迭代一个临时生成一个的，也就是说range()从始至终在内存中都只占用一个数值的内存空间。而`[0,1,2]`则是在内存中占用一个包含3数值元素的列表，然后for从这个列表对象中按照索引进行迭代。

再通俗地解释下，`for i in range(3)`开始迭代的时候，生成一个数值0，第二次迭代再生成数值1，第三次迭代再生成数值2，在第一次迭代的时候，1和2都是不存在的。而`[0,1,2]`则是早就存在于内存中，for通过list类型编写好的迭代器进行迭代，每次迭代从已存在的数值中取一个元素。

所以，**在效率上，使用range()要比直接解析列表要慢一点，但是在内存应用上，range()的方式要比直接解析已存在的列表要好，特别是列表较大的时候**。一般来说，python中最简单的方式总是最好的、效率很大可能上也是最高的，所以能直接解析的时候，不使用range的效率总会更高一些。

这种效率的区别，也可以应用于其它迭代方式的分析上。例如，按行读取文件的两种方式：

```Plain Text
for i in open("filename"):
    print(i)

for i in open("filename").readlines():
    print(i)

```
第一种方式，open()返回一个文件迭代器，每次需要迭代的时候才会去读需要的那一行，也就是说从始至终在内存中都只占用一行数据的空间。而第二种通过readlines()读取时，它会一次性将文件中所有行都读取到一个列表中，然后for去迭代这个列表。如果文件比较大，第二种方式可能会占用比较大的内存，甚至可能比原文件大小还要大，因为很可能会一次性为400M的文件分配500M内存，以免后续不断的内存分配。

### for + range的步进以及分片
无论是range()，还是序列的分片计数，都支持步进。例如步进为2：

```Plain Text
>>> list(range(1,6,2))
[1, 3, 5]

>>> L = [1,2,3,4,5]
>>> L[::2]
[1, 3, 5]

```
它们都能用于for。

```Plain Text
for i in range(1,6,2):
    print(i)

L = [1,2,3,4,5]
for i in L[::2]:
    print(i)

```
它们的结果是一样的。但是和前面分析的一样，range除了在内存应用上比较有优势，在效率上是不及直接列表解析的，包括这里分片步进。

### for修改列表元素
有一个列表，想要为列表中的值都加1。

```Plain Text
L = [1,2,3,4]
for i in L:
    i += 1

```
这是无效的，虽然python中是按照引用进行赋值的，但数值类型是不可变类型，所以每次修改i实际上都会创建新的数据对象，并不会直接影响L中的元素。这些前文已经解释过了。

如果想要修改L本身，直接迭代L是没法实现的，可以通过迭代它的索引，然后通过索引的方式来修改L的元素值。例如：

```Plain Text
L = [1,2,3,4]
for i in range(len(L)):
    L[i] += 1
print(L)       # 输出：[2,3,4,5]

```
通过while也可以实现。但更简单的方式是后面的文章要详细解释的"列表解析"：

```Plain Text
L = [1,2,3,4]

L = [x + 1 for x in L]

print(L)

```
## for + zip并行迭代
zip()函数可以将多个序列(实际上是更通用的可迭代对象)中的值一一对应地取出来，然后放进一个元组中。它也返回一个可迭代对象，可以直接通过list/set等函数将它们的内容一次性展现出来。

例如：

```Plain Text
L = [1,2,3,4]
S = {'a','b','c','d'}

>>> zip(S,L)
<zip object at 0x03684148>
>>> list(zip(S,L))
[('d', 1), ('a', 2), ('b', 3), ('c', 4)]

```
注意，集合是无序的，所以这里从S中去的元素是随机顺序的。但无论如何，已经可以看出zip()的功能了：从容器1和容器2(可是更多个容器)中同时取出一个元素，组成元组返回，再取第二个元素返回。

```Plain Text
>>> list(zip(L,L))
[(1, 1), (2, 2), (3, 3), (4, 4)]

```
如果容器中元素数量不等，则以长度最短的为基准进行截断。例如：

```Plain Text
L1 = [1,2,3,4,5]
L2 = [11,22,33,44,55,66]
L3 = [111,222,333]

>>> list(zip(L1,L2,L3))
[(1, 11, 111), (2, 22, 222), (3, 33, 333)]

```
zip()还常用于构造dict，例如：

```Plain Text
keys = ['a', 'b', 'c', 'd']
values = [1, 3, 5, 7]
D = dict(zip(keys, values))

>>> D
{'a': 1, 'b': 3, 'c': 5, 'd': 7}

```
了解了zip()，就可以将它结合for来进行并行迭代：从每个zip()返回的元组中取来自各个容器中的元素。

例如:

```Plain Text
L1 = [1,2,3,4,5]
L2 = [11,22,33,44,55,66]
L3 = [111,222,333]

for (x, y, z) in zip(L1,L2,L3):
    print("%d + %d + %d = %d" % (x, y, z, x + y + z))

```
结果：

```Plain Text
1 + 11 + 111 = 123
2 + 22 + 222 = 246
3 + 33 + 333 = 369

```
## enumerate()取得索引位和元素
在其他语言中，可能会有专门的工具在迭代每一个序列元素时同时取得这个元素的索引位和元素值。python中可以通过enumerate()来实现。

例如：

```Plain Text
>>> L =  ['a', 'b', 'c', 'd']

>>> list(enumerate(L))
[(0, 'a'), (1, 'b'), (2, 'c'), (3, 'd')]

```
于是，可以通过for迭代器来迭代enumerate()生成的`(index, value)`元素：

```Plain Text
for (k, v) in enumerate(L):
    print(k,v)

```
enumerate()还可以用它的第二个参数指定从哪个索引值开始标记索引。例如:

```Plain Text
>>> list(enumerate(L, 2))
[(2, 'a'), (3, 'b'), (4, 'c'), (5, 'd')]

```
需要注意的是，像dict这样的类型不应该去用enumerate()去取索引和值，因为它会将dict的key作为元素值，并自己生成数值索引，也就是说dict的value被丢弃了。

```Plain Text
>>> D
{'a': 1, 'b': 3, 'c': 5, 'd': 7}

>>> list(enumerate(D))
[(0, 'a'), (1, 'b'), (2, 'c'), (3, 'd')]

```
## for迭代的陷阱
for是一个通用的迭代器，它按照next的方式一次取一个元素，下一轮迭代取下一个元素。所以，如果在for内部修改了正在迭代的序列(所以这里是说可变序列，且特指列表类型)，可能会引起一些奇怪现象。

这是for的一个陷阱，或者说是迭代器的一个陷阱：迭代的对象在迭代过程中被修改了。

### 陷阱一
**迭代操作是递归到数据对象中去的，而不是根据变量名进行迭代的**。也就是说迭代的对象是内存中的数据对象。

例如：

```Plain Text
L = [1,2,3,4]
for i in L:
    ...

```
这个for迭代器在迭代刚开始的时候，先找到L所指向的迭代对象，即内存中的`[1,2,3,4]`。如果迭代过程中如果L变成了一个集合，或另一个列表对象，for的迭代并不会收到影响。但如果是在原处修改这个列表，那么迭代将会收到影响，例如新增元素也会被迭代到。

看下面的例子：

```Plain Text
L = ['a','b','c','d','e']

## 原处修改列表，新元素f、g也会被迭代
for i in L:
    if i in "de":
        L += ["f", "g"]
    print(i)

## 创建新列表，新元素f、g不会被迭代
for i in L:
    if i in "de":
        L = L + ["f", "g"]
    print(i)

```
### 陷阱二
例如，**迭代一个列表**，迭代过程中删除一个列表元素。

```Plain Text
L = ['a','b','c','d','e']
for i in L:
    if i in "bc":
        L.remove(i)
        print(i)

print(L)

```
输出的结果将是：

```Plain Text
b
['a', 'c', 'd', 'e']

```
这个for循环的本意是想删除b、c元素，但结果却只删除了b。通过结果可以发现，c根本就没有被for迭代。之所以会这样，是因为迭代到b的时候，满足if条件，然后删除了列表中的b元素。正因为删除操作，使得列表中b后面的元素整体前移一个位置，也就是c元素的索引位置变成了index=1，而index=1的元素已经被for迭代过(即元素b)，使得c幸运地逃过了for的迭代。

**如果迭代并修改的是集合或字典**呢？将会报错。虽然它们是可变序列，但是**它们是以hash key作为迭代依据的，只要增、删元素，就会导致整个对象的顺序hash key发生改变，这显然是编写这两种类型的迭代器时所需要避免的问题**。如下：

```Plain Text
D = {'a':1,
     'b':2,
     'c':3,
     'd':4,
     'e':5}

for i in D:
    if i in "bc":
        del D[i]
        print(i)

print(D)

```
报错：

```Plain Text
b
Traceback (most recent call last):
  File "g:/pycode/lists.py", line 12, in <module>
    for i in D:
RuntimeError: dictionary changed size during iteration

```
```Plain Text
S = {'a','b','c','d','e'}

for i in S:
    if i in "bc":
        S.remove(i)
        print(i)

print(S)

```
报错：

```Plain Text
b
Traceback (most recent call last):
  File "g:/pycode/lists.py", line 4, in <module>
    for i in L:
RuntimeError: Set changed size during iteration

```
迭代并修改集合、字典是非常常见的需求，但很多第三方模块在迭代并修改它们的时候都隐隐忽略了这种问题。那么如何实现这种需求且不会出错？可以考虑**迭代它们的副本，并修改它们自身**。

例如：

```Plain Text
D = {'a':1,'b':2,'c':3,'d':4,'e':5}

for i in D.copy():
    if i in "bc":
        D.pop(i)
        print(i)
print(D)


S = {'a','b','c','d','e'}

for i in S.copy():
    if i in "bc":
        S.remove(i)
        print(i)
print(S)

```
结果：

```Plain Text
b
c
{'a': 1, 'd': 4, 'e': 5}
c
b
{'e', 'd', 'a'}

```
注意，别使用dict的keys()函数，在python 2.x是可以的，因为返回的是一个列表，但是在python 3.x中，它返回的是一个迭代器。

除了使用copy()，使用其它的方式也可以，只要保证迭代的对象和修改的对象不是同一个对象即可。例如，list()方法转换Set/Dict，在转换的过程中会创建新的数据对象，所以迭代和修改操作是互不影响的。

```Plain Text
D = {'a':1,'b':2,'c':3,'d':4,'e':5}

for i in list(D):
    if i in "bc":
        D.pop(i)
        print(i)

print(D)

```
**转载请注明出处：\*\*\*\*https://www.cnblogs.com/f-ck-need-u/p/10129317.html**

