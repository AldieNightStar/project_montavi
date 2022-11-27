async function beforeAllScene() {
    await title("The unknown story");

    // Here you can add background, etc for logo scene
}

async function storyInit() {
    addScene("b01", "The beginning", true, async () => {
        
    });
}