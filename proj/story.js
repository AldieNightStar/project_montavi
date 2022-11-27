async function beforeAllScene() {
    await title("The unknown story");

    // Here you can add background, etc for logo scene
}

async function storyInit() {
    addChapter("b01", "The beginning", async () => {
        seq([
            "This is text 1",
            "This is text 2",
            "This is text 3",
            "This is text 4",
            "This is text 5"
        ])
    });
}