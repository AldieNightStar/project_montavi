async function seq(array, caller=printLetter) {
    let oldCurScene = scene_cur;
    for (let i = 0; i < array.length;) {
        let elem = array[i];
        if (oldCurScene !== scene_cur) break;
        await caller(elem);
        if (oldCurScene !== scene_cur) break;
        let direction = await choose("[" + (i+1) + "/" + array.length + "]", [["<<", 0], [">>", 1]])
        if (direction == 0) {
            i-=1;
        } else {
            i+=1;
        }
    }
}