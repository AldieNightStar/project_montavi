async function seq(array, caller=printLetter, prevName="<<", nextName=">>") {
    for (let i = 0; i < array.length;) {
        let elem = array[i];
        await caller(elem);
        let direction = await choose("[" + (i+1) + "/" + array.length + "]", [[prevName, 0], [nextName, 1]])
        if (direction == 0) {
            i-=1;
        } else {
            i+=1;
        }
    }
}

async function seqScenes(scenes, prevName="<<", nextName=">>") {
    await seq(scenes, async scene => { clear(); await scene(); hr(); }, prevName, nextName);
}