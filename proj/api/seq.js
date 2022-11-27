async function seq(array, caller=printLetter) {
    let oldCurScene = scene_cur;
    let max = array.length
    for (let i = 0; i < max;) {
        let elem = array[i];
        if (oldCurScene !== scene_cur) break;
        await caller(elem);
        if (oldCurScene !== scene_cur) break;
        let direction = await choose("[" + (i+1) + "/" + max + "]", [
            ["<<", 0], [">>", 1], ["??", 2]
        ]);
        if (direction === 0) {
            i-=1;
        } else if (direction === 1) {
            i+=1;
        } else if (direction === 2) {
            let number = i+1;
            try { number = parseInt(prompt(`1 - ${max}`, i+1)); } catch(e) {/* ignored */}
            if (number < 1 || number > max) { number = i+1; }
            i = number-1;
            continue;
        }
    }
}