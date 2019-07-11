# JavaScript30

## Learnings:

### 01 - Drum Kit 
* Listening for events on the browser window object
* DOM interface of HTML elements (see technical summary page)
* Custom data- HTML element attributes
* keydown events, and extracting keyCodes to match up to HTML elements with corresponding values set for custom data- attributes
* transitionend events

### 02 - CSS Clock
* setInterval()
* working with time - new Date(), getSeconds(), getMinutes(), getHours()
* converting time units into degrees (for clock face)
* CSS transforms, transitions, transition-timing-function, transform-origin property
* using JS to animate the CSS transform property

### 03 - CSS Variables - updating with JS
* CSS filter property (add blur effects, grayscale, etc. to images)
* dataset: The dataset property on the HTMLElement interface provides read/write access to all the custom data attributes (data-*) set on the element
* document.documentElement // returns the root element
* The CSSStyleDeclaration interface: represents an object that is a CSS declaration block, and exposes style information and various style-related methods and properties. accessible via HTMLElement.style

### 04 - Array Cardio 1
* destructuring assignment of arrays // const [first, last] = ['george', 'orwell']
* Array.prototype.sort() // how this works, popping items up and down the list (and relates to index position)
* The imperative pattern that Array.reduce() makes easier
* console.table(array/object);
