# Install

* Just download this repo
* Make sure `montavi.py` is in ENV `PATH` variable
* On windows use `git-bash`
* Use `montavi.py new project` to create new project

# Scenes

* Do not override `main` scene as it's a chapter chooser

```js
// Start everything
start();

// Add simple scene
addScene(name, func)

// Add Chapter scene. Will also be displayed in main menu
// title - is a name in main menu
addChapter(name, title, func)

// Dict with Scenes
// To get one: mscenes["main"]
// Do not change manualy
scenes

// Name of the current scene. By default: "main"
// Do not change manualy
scene_cur

// Go to scene by name
// Better to use with 'return' keyword
return goto(sceneName)
```

# Commands

## Sequence

* Sequence adds ability to move back and forth
* Will drop if current scene is not the same

```js
// Let's assume we have an array of text
let array = [
    "Text 1",
    "Text 2",
    "Text 3"
]

// Just print some text one by one
await seq(array)

// Clear and then print some text
await seq(array, t => {
    clear();
    print(t);
})
```

## Timings

```js

// Set interval
_setInterval(cb, ms);

// Set timeout
_setTimeout(cb, ms);

// Clear all timers
_clearTimers();

// Wait n milliseconds
await wait(n);
```

## Printing

```js
// =================================
// Printing
// =================================

// Default text <div> container for the novel
// Variable with reference to that element
appdiv

// Set text printing default transition in ms
textTransition = 500

// Change font color for printing
// By default: "white"
fontColor(color)

// Simple print the text
// text - text to print
// ms   - transition in ms (fade in)
await print(text, ms, target=appdiv)

// Simple print the text and continue button
await printWait(text, waitButtonName="Continue", time=1000, target=appdiv)

// Print text letter by letter
// text - text to print
// time - transition in ms
await printLetter(text, time, target=appdiv)

// Print text letter by letter and continue button
await printLetterWait(text, waitButtonName="Continue", time=1000, target=appdiv)

// Print the title big text
await title(text, target=appdiv)

// Adds horizontal line divider
await hr(target=appdiv);

// Clear the screen
clear(target=appdiv);
```

## Buttons

```js
// Add button
button(name, onclick, target=appdiv)

// Add button which also going to some scene
// button2(name, func) - will just refresh current scene
button2(name, func, sceneName=cur_scene, target=appdiv);

// Button which blocks until press
await buttonWait(name, target=appdiv)
```


## Choice

```js
// Choose button menu. Blocks until choose
// Returns resulting value
// accepts array of [name, value] buttons
await choose("Choose the button: ", [
        ["Button one", 1],
        ["Button two", 2],
        ["Button three", 3]
    ],
    transtitionMs=textTransition, target=appdiv
)

// Choose button with Timer
// Makes reader to hurry up
await chooseTimer("Choose the button quickly: ", seconds, defval, [
        ["Button one", 1],
        ["Button two", 2],
        ["Button three", 3]
    ],
    transtitionMs=textTransition, target=appdiv
)
```


## Images

```js
// Add image to the screen
// You can also write: addImage(src)
await addImage(src, sizew=100, sizeh, center=true)
```

## Audio

```js
// Play
playMusic(src, vol=.5)
playSound(src, vol=.5)

// Set music time
setMusicTime(seconds);

// Stop
stopMusic()
stopSound()

// Wait until music time
// Will not block if music stoped or already that time passed
await waitToMusicTime(sec)
```

## Background

```js
// Set background image
bgImage(src)

// Set background position
// Available: "top", "bottom", "left", "right",
//            "top left", "top right", "bottom left", "bottom right", "center"
bgPosisition(pos)

// Set background scale
// 2, 2 - zoomed in
// 1, 1 - normal
bgScale(scaleX, scaleY)

// Set background transition in ms
bgTransition(ms)

// Swipe background from pos1 to pos2
// Available: "top", "bottom", "left", "right",
//            "top left", "top right", "bottom left", "bottom right", "center"
await bgSwipe(pos1, pos2, ms)

// Zoom scale from size1 to size2 in ms time
// 2 -> 1 is zoom out
// 1 -> 2 is zoom in
await bgZoom(size1, size2, ms)

// Set background color to color string
// Use defaultColor variable to set back
bgColor(color)
```