import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

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
          yPercent: -20,
          ease: 'none'
        }, {
          yPercent: 20,
          ease: 'none'
        });
      });
}