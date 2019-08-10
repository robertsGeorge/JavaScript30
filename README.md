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

### 09 - Console methods 
* console.dir(DOMElement) // to look up properties and methods available
* console.group() / console.groupEnd() // to add hierarchy to logging output, make it more readable
* console.time() / console.timeEnd() // to time how long operations take (use same label on each)
* adding %c to a string, in order to style it with css from the following argument
* Other string substitution options, like %s (will add the string that is the following argument supplied to the console method)
* console.assert() // useful for testing something (only logs if assertion is false)
* break on attribute modification (apply to an HTML element to see what code is acting on it)

### 10 - Hold shift to check multiple checkboxes
* use of global variable 'lastChecked' to store state (remember) between function calls
* use of this value within function to represent element the event was triggered on (same as e.target)
* declaring a flag variable 'inBetween', then toggling its value based on two conditions joined by ||, then using it to control flow and actions based on its current value

### 11 - Custom HTML5 Video Player
* use of the property called paused on the video player element (a boolean true or false value)
* use of the 'play' and 'pause' Media Events to update items onscreen independant of the method used by user to get the video playing
* The dataset property on the HTMLElement interface provides read/write access to all the custom data attributes (data-*) set on the element.
* use simple arrow function within event listener to update a global flag variable. The function then uses the flag variable to decide whether to execute code or not.
* a mouseEvent object has allsorts of data about the event, like where the mouse was positioned on the screen
* You can look up what events a particular type of element can respond to on its API interface page on MDN
* realising that an arrow function attached via addEventListener IS the callback function, so you can put a function to run inside its body and that function would need its parentheses after it, because it's a function inside the body of a callback. It's not the callback itself. You must pass through eny arguments that function needs in order to run properly. if that's the event object, you need to 'hot-potato' it through, by passing it into the callback function itself first, then on to the function in the body.
* Process: 'Get our Elements', 'Build out Functions', 'Hook up Event Listeners'
* Sometimes data from the event object is crucial the function, e.g. a mouseEvent holds data about what coordinates on the screen the mouse-click was at.

### Key Sequence Detection
* use of the 'keyup' event, and then the 'key' property on the keyBoardEvent object, and pushing that key into a global array to create a key stroke logger.
* Flexible use of arr.slice() with a negative value as starting point, to count from back of array, then a delete count that starts as a negative value (so doesn't delete anything) until the length of the calling array reaches a certain point, then only one item is deleted (trimmed);
* use of a library function, from 'cornify.js', a script included in the head element, then the function called in the body using the name of the function followed by parentheses cornify_add();

### Slide in on Scroll
* use of a debounce function, and why it's needed (to limit the freqency with which a function is called, in this case responding to a scroll view event)
* window.scrollY and window.innerHeight and HTMLElement.offsetTop properties
* CSS transition property, css transform with translatex(); 
* use of CSS opacity property to make an element disappear

### 14 - Objects and Arrays - Reference vs Copy
* Spread syntax for cloning objects (to make shallow clones of 'own' properties)
* Older approach of cloning objects using Object.assign({}, obj2Clone, [...additional objs]).
* Poor man's deep-clone of objects using JSON.parse( JSON.stringify(obj2Clone) );

### 15 - Local Storage and Event Delegation
* can use querySelector() method on this within an event listener callback: text = this.querySelector('.item').value
* localStorage deals in strings only, so need to use JSON.stringify() to put content into it, and JSON.parse() to get content out of it in a useable form.
* HTMLFormElement interface represents a <form> element in the DOM
* HTMLFormElement.reset()
* Element.matches('css selector') // useful if you want to check an event target is what you need when using event delegation
* using 'data-' attributes, and then accessing them via element.dataset (what's after dash is a property of the dataset object);
* use of a ternary operator evaluated within a template literal, depending on the boolean value of an object's property
* Setting, getting, and clearing items from local storage with .getItem() .setItem('key', object as string) .clear()
* element.insertAdjacentHTML() // saves you having to use document.createElement

### 16 - Mouse Move Shadow
* using offsetX and offsetY properties to get x and y coordinates of the mouse cursor as it moves
* Use of object destructuring assignment

### 17 - Sorting Band Names without Articles
* In a regex, using ^ to assert position at beginning of string.
* Using .join() when setting innerHTML to an array to avoid the toString() object-primitive conversion being called, which will include commas in the string
* use of helper function split(bandName) within arr.sort() method.
* with arr.sort(), only providing return 1 or return -1 branches (no need for 0?).

### 18 - Tally String Times with Reduce
* Passing a pre-existing function into .map() as its callback, like so: .map(parseFloat) (if you included an argument between the parentheses, the function will try to execute immediately rather than as a callback, so the argument won't have been defined at that point, and you'll get a reference error)
* Using .map() inside of a .reduce()

## 19 - Unreal Webcam Fun
* Accessing video data from function getVideo() {
  navigator.mediaDevices
    .getUserMedia({video: true, audio: false})
    .then(localMediaStream => {
      // console.log(localMediaStream);
      video.srcObject = localMediaStream;
      video.play();
* Using html canvas element's context to insert image data.
* link.setAttribute('download', 'handsome');

## 20 - Native Speech Recognition
* use of the SpeechRecognition native browser API

## 21 - Geolocation based Speedometer and Compass
* Use of Xcode's simulator, to simulate a mobile device (then navigated to the external url on that simulated device) (URL provided by browser Sync server).
* use of navigator.geolocation interface
* watchPosition() method of the above, which accepts a Position object containing coordinates/heading/speed etc that is passed to a callback function, which is called whenever location / speed / heading etc. changes.
