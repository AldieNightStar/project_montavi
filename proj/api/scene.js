window.scenes = {"main": showScenes};
window.scene_cur = "main";
window.sceneList = [];

function goto(name=scene_cur) {
    clear();
    window.scene_cur = name;
    window.scenes[name]();
}

function start() {
    goto(scene_cur);
}

function addScene(name, func) {
    if (scenes[name] !== undefined) throw new Error("Scene '" + name + "' is already exists");
    scenes[name] = func;
    if (isMain) {
        sceneList.push([title, name]);
    }
}

function addChapter(name, title, func) {
    if (scenes[name] !== undefined) throw new Error("Scene '" + name + "' is already exists");
    scenes[name] = func;
    sceneList.push([title, name]);
}

async function showScenes(sceneList=window.sceneList, target=appdiv) {
    await beforeAllScene();
    chapter = await choose("Choose chapter:", sceneList, 3000, target);
    goto(chapter);
}