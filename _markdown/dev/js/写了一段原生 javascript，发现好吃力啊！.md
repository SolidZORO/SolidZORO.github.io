[slug]: write-javascript
[date]: 2017-04-04T02:16:26

# 写了一段原生 js，发现真是难哭了

起因是为了完成 [优达学城](https://classroom.udacity.com/courses/ud989/lessons/3417188540/concepts/33916789250923) 的这个习题。要求是点击一个猫的图片，计数器+1。

![](media/14991487833798.jpg)



DOM 代码:

```html
<img id="cat" src="cat.jpg">
<div id="times">0</div>
```

jQuery 代码：

```javascript
const $catEl = $('#cat');
const $timesEl = $('#times');
const $timesCounter = $timesEl.val();

$('body').on('click', $catEl, ()=> {
    timesEl.html(++$timesCounter)
});
```

不过习题要求的是用原生 javascript 编写，完整写出来大概是这样的：

原生 javascript 代码：

```javascript
var catEl = document.querySelector('#cat');
var timesEl = document.querySelector('#times');
var timesCounter = timesEl.innerHTML;

catEl.addEventListener('click', function() {
    timesEl.innerHTML = ++timesCounter;
});
```

和 jQuery 一样，都很简单，但是我却花了很多时间在 Google 上找语法，我一开始以为可以像 jQuery 一样 `timesEl.val()` 得到 0，但是我错了，并不行，又试了 `timesEl.value`，居然也不行，明明去 SO 上说可以的（后来查了下 MDN，才知道这只能用于 input），然后东找西找，最后问了 @dongyu 才知道是用 `innerText`，有种累觉不爱的感觉。

然后我又试了下 `innerHtml`，发现居然也不行，我就奇怪了！！郁闷之下使用 `innerHTML`（注意大小写）就又可以了。马上感觉自己这几年写 jQuery 多了，原生 javascript 真是连一些基础代码都不会了，然而未来的方向又得面向 vue、react 编程，可能真的没有机会写原生 javascript 了😭。