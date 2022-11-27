async function beforeAllScene() {
    await title("The unknown story");

    // Here you can add background, etc for logo scene
}

async function storyInit() {
    addScene("b01", "The beginning", true, async () => {
        let story = [
            "This is samll story",
            "With using array",
            "And what we need is already there",
            "So you can enjoy"
        ]
        let ptr = 0;
        await printLetter(story[ptr++]);
        button2("Update", )
    });
}