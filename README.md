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

### 05 - Flex Panels Image Gallery
* Multiple nested flexboxes (element can be both flex container and flex item)
* Using flex: display on elements with no children, in order to align/justify their text content.
* CSS transitions, transform: translateY, cubic-bezier() for motion control
* Triggering CSS transitions by toggling classes using JavaScript
* Listening for 'click' and 'transitionend' events

### 06 - Ajax Type Ahead
* performing pre operations inside a map method before returning each item
* Working with fetch and .then .then to get data from a json file hosted as a gist
* Using the RegExp constructor to generate regex objects to use with .replace() based on a users search input value.
* Difference between a 'change' event and a 'keyup' event
* using stackoverflow to find a numberWithCommas() function (complex regex)
* Using str.match() with regex variable to implement a search feature, along with arr.filter()

### 07 - Array Cardio Day 2
* arr.find() (like filter but returns just the value of the first element that passes the test condition). Otherwise returns undefined
* arr.findIndex() // returns the index of the first element that passes the test condition, or -1 if it's not there
* neat way to delete an element from an array (if you know the index) without mutating original: create new array and use slice with spread operator twice, either side of index you wish to delete.

### 08 - HTML5 Canvas
* Use of a boolean flag variable to direct control flow
* Use of events: mousemove, mouseout, mousedown, mouseup
* use of an if statement with a condition containing two conditions separated by || to define boundaries which if breached will trigger a reversal of the flag variable flag = !flag