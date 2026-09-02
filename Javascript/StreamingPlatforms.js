const openButton = document.getElementById("openStreamingPlatforms");
const closeButton = document.getElementById("closeStreamingPlatforms");
const popup = document.getElementById("streamingPlatformsPopup");

openButton.addEventListener("click", () => {
    popup.showModal()
    document.body.style.overflow = "hidden";
});

closeButton.addEventListener("click", () => {
    popup.close();
    document.body.style.overflow = "";
});

popup.addEventListener("click", (event) => {
    if (event.target === popup) {
        popup.close();
    }
});