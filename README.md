# Responsive Waterfall

Responsive waterfall grid implement in pure javascript without any dependencies. Compatibility: IE9+

[Demo here](http://leozdgao.github.io/responsive_waterfall/)

### Installation

Reference the script to your html like this, and without any other javascript library:

```html
<script src="../responsive_waterfall.js"></script>
```

To make sure code works, you need to copy the style definition in `wf-style.css` or remember to let `wf-column` float, and "clearfix" for the container.

### How to use

What you need to do is invoke the constructor and tell it how to select the container and the box in it. Then tell it how to split the column by setting the `minBoxWidth`. And here is the default value.

```javascript
// use querySelector/querySelectorAll internally
var waterfall = new Waterfall({
	containerSelector: '.wf-container',
	boxSelector: '.wf-box',
	minBoxWidth: 250
});
```

Internally, I use getter/setter by ES5 Object API, the `minBoxWidth` will never bigger than 1000 and always bigger than 100;

If you want to customize the style of each column, you can define your own style for `.wf-column` in your css file.

Commomly, you will need to lazy load data and insert them to your view, so you can use `waterfall.addbox` to add the boxes, and re-compose after your adding.

```javascript
var btn = document.getElementById('add-btn');
var boxHandle = newNode(); // simulation for getting box
btn.addEventListener('click', function() {

    waterfall.addBox(boxHandle());
});
```

### License

MIT
