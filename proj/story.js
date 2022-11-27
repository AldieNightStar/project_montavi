async function beforeAllScene() {
    await title("The unknown story");

    // Here you can add background, etc for logo scene
}

async function storyInit() {
    
    addChapter("b01", "The beginning", async () => {
        await seq([
            "Text 1",
            "Text 2",
            "Text 3"
        ])
    });
}