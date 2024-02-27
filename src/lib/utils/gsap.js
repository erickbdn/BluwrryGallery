import { gsap } from "gsap";

export function initializeHoverEffect() {
    const items = document.querySelectorAll('.item');

    items.forEach((el) => {
        const image = el.querySelector('img');

        el.addEventListener('mouseenter', (e) => {
            gsap.to(image, { autoAlpha: 1 });
        });

        el.addEventListener('mouseleave', (e) => {
            gsap.to(image, { autoAlpha: 0 });
        });
    });
}