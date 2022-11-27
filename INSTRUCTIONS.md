# Scenes
```js
// Start everything
start();

// Dict with Scenes
// To get one: mscenes["main"]
scenes


// Name of the current scene. By default: "main"
scene_cur

// Add new scene
scenes["name"] = async function () {
    // no need to add clear() call
}
```

# Sequence
```js
// Simple sequnce.
// Allows you to switch back and forth
// You can use NOT ONLY text. For example scenes. Just replace values and caller
//
// array  - array of values
// caller - func(value) - will call to each value
await seq([
    "Text 1",
    "Text 2",
    "Text 3"
], caller=printLetter, prevName="<<", nextName=">>")
```

# Commands
```js
// =================================
// Timers
// =================================

// Set interval
_setInterval(cb, ms);

// Set timeout
_setTimeout(cb, ms);

// Clear all timers
_clearTimers();

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
// ms   - transition in ms
await printLetter(text, ms, target=appdiv)

// Print text letter by letter and continue button
printLetterWait(text, waitButtonName="Continue", time=1000, nextLine=true, target=appdiv)

// Print the title big text
await title(text, target=appdiv)

// Adds horizontal line divider
await hr(target=appdiv);

// Clear the screen
clear(target=appdiv);

// =================================
// Buttons
// =================================

// Add button
button(name, onclick, target=appdiv)

// Add button which also going to some scene
// button2(name, func) - will just refresh current scene
button2(name, func, sceneName=cur_scene, target=appdiv);

// Button which blocks until press
await buttonWait(name, target=appdiv)

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

// =================================
// Images
// =================================

// Add image to the screen
// You can also write: addImage(src)
await addImage(src, sizew=100, sizeh, center=true)

// =================================
// Music / Audio
// =================================

// Play
playMusic(src, vol=.5)
playSound(src, vol=.5)

// Stop
stopMusic()
stopSound()

// Wait until music time
// Will not block if music stoped or already that time passed
waitToMusicTime(sec)

// =================================
// Background
// =================================

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