const openStreaming = document.getElementById("openStreamingPlatforms");
const closeStreaming = document.getElementById("closeStreamingPlatforms");
const popupStreaming = document.getElementById("streamingPlatformsPopup");

openStreaming.addEventListener("click", () => {
    popupStreaming.showModal()
    document.body.style.overflow = "hidden";
});

closeStreaming.addEventListener("click", () => {
    popupStreaming.close();
    document.body.style.overflow = "";
});

popupStreaming.addEventListener("click", (event) => {
    if (event.target === popupStreaming) {
        popupStreaming.close();
        document.body.style.overflow = "";
    }
});


const openSocials = document.getElementById("openSocials")
const closeSocials = document.getElementById("closeSocials")
const socialsPopup = document.getElementById("socialsPopup")

openSocials.addEventListener("click", () => {
    socialsPopup.showModal()
    document.body.style.overflow = "hidden";
});

closeSocials.addEventListener("click", () => {
    socialsPopup.close();
    document.body.style.overflow = "";
});

socialsPopup.addEventListener("click", (event) => {
    if (event.target === socialsPopup) {
        socialsPopup.close();
        document.body.style.overflow = "";
    }
});

