import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

export function initializeHoverEffect() {
    gsap.set('.item-image', { yPercent: -50, xPercent: -50 })
    const items = document.querySelectorAll('.item');

    items.forEach((el) => {
        const image = el.querySelector('img'),
        setX = gsap.quickSetter(image, "x", "px"),
        setY = gsap.quickSetter(image, "y", "px"),
        align = e => {
          setX(e.clientX);
          setY(e.clientY);
        },
        startFollow = () => document.addEventListener("mousemove", align),
        stopFollow = () => document.removeEventListener("mousemove", align),
        fade = gsap.to(image, {autoAlpha: 1, ease: "none", paused: true, onReverseComplete: stopFollow});
  
  el.addEventListener('mouseenter', (e) => {
    fade.play();
    startFollow();
    align(e);
  });
  
  el.addEventListener('mouseleave', () => fade.reverse());
    });
}

let currentThumbnailIndex = 1; // Initialize with the index of the default selected thumbnail

// Function to handle image swapping and animations
export function initThumbnailClickHandlers() {
    // Get reference to the big image and the title element
    const bigImage = document.querySelector('.featured-image img');
    const titleElement = document.querySelector('.featured-photo-title h2');

    // Add click event listener to each thumbnail image
    for (let i = 1; i <= 6; i++) {
        const thumbnail = document.querySelector(`.featured-thumbnail-${i} img`);
        thumbnail.addEventListener('click', () => {
            // Check if clicked thumbnail index is the same as the currently selected one
            if (currentThumbnailIndex === i) {
                return; // Exit early if clicked on the same thumbnail
            }

            // Get the source and title of the clicked thumbnail image
            const newImageSrc = thumbnail.src;
            const newTitle = thumbnail.alt; // Assuming alt attribute contains the title
            
            // Determine the direction of the animation
            const direction = i < currentThumbnailIndex ? -1 : 1; // -1 for downwards, 1 for upwards

            // Animate the big image using GSAP
            gsap.to('.featured-image img', { 
                y: `${-direction * 70}vh`, 
                duration: 0.4, 
                ease: 'power4.in', 
                onComplete: () => {
                    // Set the source of the big image to the source of the clicked thumbnail image
                    bigImage.src = newImageSrc;
                    // Set the title to the title of the clicked thumbnail image
                    titleElement.textContent = newTitle;
                    // Animate the big image back to its original position
                    gsap.fromTo('.featured-image img', { y: `${direction * 70}vh` }, { y: 0, duration: 0.4, ease: 'power4.out' });
                }
            });
            
            // Update the currently selected thumbnail index
            currentThumbnailIndex = i;
        });
    }
}
gsap.registerPlugin(ScrollTrigger);
export function categoryAnim() {
    gsap.utils.toArray('.img-container').forEach(container => {
        const img = container.querySelector('img');
      
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: container,
            scrub: true,
            pin: false,
          }
        });
      
        tl.fromTo(img, {
          yPercent: -30,
          ease: 'none'
        }, {
          yPercent: 30,
          ease: 'none'
        });
      });
}

export function imageHoverLayout(targetElements, overlayElement) {
    //  gsap.set('.overlay-layout', { yPercent: 75, xPercent:  0 })
    // const tooltips = document.querySelectorAll(tooltipElement);

    // if (!tooltips.length) {
    //     console.error('Tooltip elements not found');
    //     return;
    // }

    // targetElements.forEach(targetElement => {
    //     const target = targetElement.querySelector('.grid-image');
    //     const tooltip = targetElement.querySelector('.overlay-layout');

    //     if (!target || !tooltip) {
    //         console.error('Target element or tooltip element not found');
    //         return;
    //     }

    //     const alignTooltip = (event) => {
    //         gsap.set(tooltip, { x: event.clientX, y: event.clientY });
    //     };

    //     target.addEventListener('mouseenter', () => {
    //         document.addEventListener('mousemove', alignTooltip);
    //         gsap.to(tooltip, { duration: 0.3, autoAlpha: 1, display: 'block' }); // Fade in and show the tooltip
    //     });

    //     target.addEventListener('mouseleave', () => {
    //         document.removeEventListener('mousemove', alignTooltip);
    //         gsap.to(tooltip, { duration: 0.3, autoAlpha: 0, onComplete: () => tooltip.style.display = 'none' }); // Fade out and hide the tooltip
    //     });
    // });
}

