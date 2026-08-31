const openButton = document.getElementById("openStreamingPlatforms");
const closeButton = document.getElementById("closeStreamingPlatforms");
const popup = document.getElementById("streamingPlatformsPopup");

openButton.addEventListener("click", () => {
    popup.showModal();
});

closeButton.addEventListener("click", () => {
    popup.close();
});

popup.addEventListener("click", (event) => {
    if (event.target === popup) {
        popup.close();
    }
});