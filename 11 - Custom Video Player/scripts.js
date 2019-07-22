/* ============ Get Our elements ===============*/
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle'); // the play button.
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');


/* =========== Build out functions ============== */
function togglePlay() {
  const method = video.paused ? 'play' : 'pause';
  video[method]();
} // make the function and test it out in console before hooking it up to event listener

function updateButton() {
  const icon = this.paused ? '►' : '❚ ❚';
  toggle.textContent = icon;
}

function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate(e) {
  if ( e.type !== 'change' && !mouseEngaged ) return;
  /* because this.name is the same as the relevant property names on video, we can use square brackets. */
  video[this.name] = this.value;  // this particularly useful when you've added the same event handler to multiple elements. Which element is in play? This one!
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) { //  e === mouseEvent object (so has data on where the mouse was when it was clicked, relative to event it was fired on?)
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}


/* =========== Hook up the event listeners ============== */
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', togglePlay);

skipButtons.forEach(button => button.addEventListener('click', skip));


let mouseEngaged = false; // flag to use when changing range sliders.
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
// use simple arrow function within event listener to update a global flag variable.
// The function then uses the flag variable to decide whether to execute code or not.
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousedown', () => mouseEngaged = true));
ranges.forEach(range => range.addEventListener('mouseup', () => mouseEngaged = false));
ranges.forEach(range => range.addEventListener('mouseout', () => mouseEngaged = false));

let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);
