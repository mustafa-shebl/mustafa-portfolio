const carouselTrack = document.querySelector(".carousel-track");
const images = Array.from(carouselTrack.children);
let currentIndex = 0;

// Carousel function to slide images
function slideCarousel() {
    const imageWidth = images[0].getBoundingClientRect().width; // Get the width of a single image
    carouselTrack.style.transform = `translateX(-${currentIndex * imageWidth}px)`; // Slide to the current image
    currentIndex = (currentIndex + 1) % images.length; // Move to the next image, reset if at the end
}

// Set interval to automatically slide images every 3 seconds
setInterval(slideCarousel, 3000);

// Contact button functionality
const contactButton = document.getElementById("contactButton");
const contactInfo = document.getElementById("contactInfo");

contactButton.addEventListener("click", () => {
    contactInfo.classList.remove("hidden"); // Show the contact info
    setTimeout(() => {
        contactInfo.classList.add("hidden"); // Hide after 35 seconds
    }, 35000); // 35 seconds in milliseconds
});


