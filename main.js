document.addEventListener("DOMContentLoaded", () => {
    const sadeBelirmeElemanlari = document.querySelectorAll(".sade-belirme");

    function sadeBelirmeyiGoster() {
        sadeBelirmeElemanlari.forEach((eleman) => {
            const elemanKonumu = eleman.getBoundingClientRect().top;
            const ekranYuksekligi = window.innerHeight;

            if (elemanKonumu < ekranYuksekligi - 100) {
                eleman.classList.add("goster");
            }
        });
    }

    window.addEventListener("scroll", sadeBelirmeyiGoster);
    window.addEventListener("load", sadeBelirmeyiGoster);

    sadeBelirmeyiGoster();

    /* AÇILIR MENÜ */
    const menuOverlay = document.getElementById("menu-overlay");
    const menuOpen = document.getElementById("menu-open");
    const menuClose = document.getElementById("menu-close");
    const menuLinks = document.querySelectorAll(".menu-link");

    if (menuOverlay && menuOpen && menuClose) {
        menuOpen.addEventListener("click", () => {
            menuOverlay.classList.add("aktif");
            document.body.style.overflow = "hidden";
        });

        menuClose.addEventListener("click", () => {
            menuOverlay.classList.remove("aktif");
            document.body.style.overflow = "";
        });

        menuLinks.forEach((link) => {
            link.addEventListener("click", () => {
                menuOverlay.classList.remove("aktif");
                document.body.style.overflow = "";
            });
        });
    }

    /* YATAY KAYAN BÖLÜM - GSAP */
    if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
        gsap.registerPlugin(ScrollTrigger);

        const yataySerit = document.querySelector(".yatay-serit");

        if (yataySerit && window.innerWidth > 1024) {
            gsap.to(yataySerit, {
                xPercent: -100 * (2/3),
                ease: "none",
                scrollTrigger: {
                    trigger: "#hz-trigger",
                    pin: true,
                    scrub: 1,
                    end: () => "+=" + yataySerit.scrollWidth
                }
            });
        }
    }
});