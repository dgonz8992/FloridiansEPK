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

const platformLinks = document.querySelectorAll('.streamingPlatformLink');

platformLinks.forEach((link) => {
    link.addEventListener('click', () => {

        const platformName = link.querySelector('img').alt;

        let platformType;

        if (link.closest('#socialsPopup')) {
            platformType = 'social';
        } else {
            platformType = 'streaming';
        }

        gtag('event', 'platform_click', {
            platform_name: platformName,
            platform_type: platformType,
            link_url: link.href
        });
    });
});

document.querySelector('#openStreamingPlatforms')
    .addEventListener('click', () => {
        gtag('event', 'menu_open', {
            menu_name: 'Listen'
        });
    });


document.querySelector('#openSocials')
    .addEventListener('click', () => {
        gtag('event', 'menu_open', {
            menu_name: 'Follow'
        });
    });

