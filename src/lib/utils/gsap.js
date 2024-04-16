import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export function hideNavBar() {
  gsap.set('.header', { yPercent: 0 });
  const showAnim = gsap.from('.header', { 
    yPercent: -100,
    paused: true,
    duration: 0.35
  }).progress(1);
  
  ScrollTrigger.create({
    start: "top top",
    end: "max",
    onUpdate: (self) => {
      self.direction === -1 ? showAnim.play() : showAnim.reverse()
    }
  });
}

export function destroyScrollTrigger() {
  ScrollTrigger.getAll().forEach(trigger => trigger.kill());
}

export function initializeHoverEffect() {
    gsap.set('.item-image', { yPercent: -50, xPercent: -50 })
    const items = document.querySelectorAll('.item');

    items.forEach((el) => {
        const image = el.querySelector('img'),
        xTo = gsap.quickTo(image, "x", {duration: 0.8, ease: "power3"}),
        yTo = gsap.quickTo(image, "y", {duration: 0.8, ease: "power3"}),
        align = e => {
          xTo(e.clientX);
          yTo(e.clientY);
        },
        startFollow = () => document.addEventListener("mousemove", align),
        stopFollow = () => document.removeEventListener("mousemove", align),
        fade = gsap.to(image, {autoAlpha: 1, scale: 0.8, ease: "none", duration: 0.3, paused: true, onReverseComplete: stopFollow});
  
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
          yPercent: -15,
          ease: 'none'
        }, {
          yPercent: 15,
          ease: 'none'
        });
      });
}

export function initializeParallax() {

    const gridItems = document.querySelectorAll('.hero-images');
    
    gridItems.forEach((item, index) => {
        const yPercentRandomVal = gsap.utils.random(-1500, -500);

        gsap.timeline()
		.addLabel('start', 0)
		.to(item, {
            ease: 'none',
            yPercent: yPercentRandomVal,
			scrollTrigger: {
                trigger: item,
                start: 'top bottom',
                end: 'top -120%',
                scrub: true,
            }
        }, 'start');
    });
    
   
    gsap.to('.hero-wrapper', {
      scrollTrigger: {
          trigger: '.hero-wrapper',
          start: 'top-=162vh  top',
          end: '+=1300vh',
          pin: true,
      }
  });
    // Repeat the above for each image wrapper
}

export function destroyParallax() {
  // Clear GSAP animations or perform any necessary cleanup
  ScrollTrigger.getAll().forEach(trigger => {
      trigger.kill();
  });
}

export function aboutMeStickyImage() {
  const aboutMeImageWrapper = document.querySelector('.about-me-image-wrapper');
    
  gsap.to(aboutMeImageWrapper, {
      y: 0, // Stick to the top
      scrollTrigger: {
          trigger: '.about-me-image-wrapper',
          start: '-215vh top', // Start sticking when top of the section hits top of the viewport
          end: 'bottom+=40% top', // Stop sticking when bottom of the section hits top of the viewport
          pin: true, // Pin the element
          pinSpacing: false, // Don't create any spacing when pinned
          scrub: true,
      }
  });
}

export function carousel(startIndex = 0) {
  const prevButton = document.querySelector("#prevButton");
  const nextButton = document.querySelector("#nextButton");

  const items = document.querySelectorAll(".carousel-item");

  if (items.length <= 1) {
    // Hide prev and next buttons
    prevButton.style.display = "none";
    nextButton.style.display = "none";
    return; // Exit the function
  }
  
  let boxWidth = 1200;
  let wrapWidth = (items.length - 1) * boxWidth;

  let animatePrev = animateCarousel.bind(prevButton, boxWidth);
  let animateNext = animateCarousel.bind(nextButton,  -boxWidth);

  gsap.set(items, {
    x: function(i) {
        return (i - startIndex) * boxWidth;
    }
});

  prevButton.addEventListener("click", animatePrev);
  nextButton.addEventListener("click", animateNext);

  function animateCarousel(delta) {
    gsap.to(items, {
      duration: 0.7,
      ease: "power4.inOut", 
      x: function(i, target) {
        let x = Math.round(gsap.getProperty(target, "x") / boxWidth) * boxWidth;
        return x + delta;
      },
      modifiers: {
        x: function(x) {
          x = gsap.utils.wrap(-boxWidth, wrapWidth, parseInt(x));
          
          return x + "px";
        }
      }
    });
  }
}