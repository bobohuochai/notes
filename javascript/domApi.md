### A DOM tree

A representation of the page structure

### A render tree

A representation of how the DOM nodes will be displayed


### reflow and repaints

When a ***DOM*** change  affects the geometry of an element ( width and height), the browser needs to recalculate the geometry of the element as well as the geometry and position of other elements that could hava been affected by the change. The browser invalidates the part of the ***render tree*** that was affected by the change and reconstructs the ***renderTree***. The process is known as a reflow.

the browser redraws the affected parts of the screen in a process called repaint.


When Does a Reflow Happen?

* Visible DOM elements are added or removed
* Elements change position
* Elements change size(because of a change in margin,padding,border,width,height.etc)
* Content is changed(text changes or an image is replaced with one of a different size)
* Page renders initially
* Broswer window is resized


*** Minimizing Repaints and Reflows

combine multiple DOM and style changes into a batch and apply them once.

``` javascript
const el = document.getElementById('id')
el.style.borderLeft = '1px';
el.style.borderRight ='2px';
el.style.padding= '5px'
```

batch to

```javascript
const el = document.getElementById('id')
el.style.cssText = 'border-left:1px;border-right:2px;padding:5px;'

```

#### Batching DOM changes
When you hava a number of changes to apply to a DOM element,you can reduce the number of repaints and reflows by folllowing these steps:

1. Take the element off of the document flow.
2. Apply multiple changes.
3. Bring the element back to the document.


* Change the **display** property

```javascript

const ul = document.getElementById('myList');
ul.style.display = 'none';
appendDataToElement(ul,data);
ul.style.display = 'block';

```

* Using **document fragment**

```javascript

const fragment = document.createDocumentFragment();
appendDataToElement(fragment,data)
document.getElementById('myList').appendChild(fragment)

```
* Create a copy of node 

``` javascript

const old = document.getElementById('myList')
const clone = old.cloneNode(true)
appendDataToElement(clone,data)
old.parentNode.replaceChild(clone,old)

```


### Position absolutly during animations,and use drag and drop proxies.

### Use event delegation to minimize the number of event handlers.