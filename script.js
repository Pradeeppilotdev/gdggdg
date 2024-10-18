let dayBox = document.getElementById("day-box");
let hrBox = document.getElementById("hr-box");
let minBox = document.getElementById("min-box");
let secBox = document.getElementById("sec-box");
let endDate = new Date(2024, 10, 7);
let endTime = endDate.getTime();

function countdown() {
  let todayDate = new Date();
  let todayTime = todayDate.getTime();
  let remainingTime = endTime - todayTime;
  let oneMin = 60 * 1000;
  let oneHr = 60 * oneMin;
  let oneDay = 24 * oneHr;

  let addZeroes = (num) => (num < 10 ? `0${num}` : num);

  if (endTime < todayTime) {
    clearInterval(i);
    document.querySelector(
      ".countdown"
    ).innerHTML = `<h1>Countdown Has Expired</h1>`;
  } else {
    let daysLeft = Math.floor(remainingTime / oneDay);
    let hrsLeft = Math.floor((remainingTime % oneDay) / oneHr);
    let minsLeft = Math.floor((remainingTime % oneHr) / oneMin);
    let secsLeft = Math.floor((remainingTime % oneMin) / 1000);

    dayBox.textContent = addZeroes(daysLeft);
    hrBox.textContent = addZeroes(hrsLeft);
    minBox.textContent = addZeroes(minsLeft);
    secBox.textContent = addZeroes(secsLeft);
  }
}

let i = setInterval(countdown, 1000);
countdown();


// adjanda section
const initSlider = () => {
  const imageList = document.querySelector(".slider-wrapper .image-list");
  const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button");
  const sliderScrollbar = document.querySelector(".container .slider-scrollbar");
  const scrollbarThumb = sliderScrollbar.querySelector(".scrollbar-thumb");
  const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

  // Handle scrollbar thumb drag
  scrollbarThumb.addEventListener("mousedown", (e) => {
      const startX = e.clientX;
      const thumbPosition = scrollbarThumb.offsetLeft;
      const maxThumbPosition = sliderScrollbar.getBoundingClientRect().width - scrollbarThumb.offsetWidth;
      
      // Update thumb position on mouse move
      const handleMouseMove = (e) => {
          const deltaX = e.clientX - startX;
          const newThumbPosition = thumbPosition + deltaX;

          // Ensure the scrollbar thumb stays within bounds
          const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
          const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;
          
          scrollbarThumb.style.left = `${boundedPosition}px`;
          imageList.scrollLeft = scrollPosition;
      }

      // Remove event listeners on mouse up
      const handleMouseUp = () => {
          document.removeEventListener("mousemove", handleMouseMove);
          document.removeEventListener("mouseup", handleMouseUp);
      }

      // Add event listeners for drag interaction
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
  });

  // Slide images according to the slide button clicks
  slideButtons.forEach(button => {
      button.addEventListener("click", () => {
          const direction = button.id === "prev-slide" ? -1 : 1;
          const scrollAmount = imageList.clientWidth * direction;
          imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
      });
  });


  // Update scrollbar thumb position based on image scroll
  const updateScrollThumbPosition = () => {
      const scrollPosition = imageList.scrollLeft;
      const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
      scrollbarThumb.style.left = `${thumbPosition}px`;
  }

  // Call these two functions when image list scrolls
  imageList.addEventListener("scroll", () => {
      updateScrollThumbPosition();
      handleSlideButtons();
  });

  // Initial function calls
  updateScrollThumbPosition();
  handleSlideButtons();
}

window.addEventListener("resize", initSlider);
window.addEventListener("load", initSlider);

// slider end


document.addEventListener("DOMContentLoaded", () => {
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
  const questionButton = item.querySelector(".faq-question");
  const answer = item.querySelector(".faq-answer");
  const icon = questionButton.querySelector(".faq-icon");

  questionButton.addEventListener("click", () => {
    const isVisible = answer.classList.contains("show");
    
    // Close all other answers
    faqItems.forEach(i => {
      i.querySelector(".faq-answer").classList.remove("show");
      i.querySelector(".faq-icon").classList.remove("open");
    });

    if (!isVisible) {
      answer.classList.add("show");
      icon.classList.add("open");
    }
  });
});
});


// speaker section

const initSlide = () => {
const imageList = document.querySelector(".slide-wrapper .image-list");
const slideButtons = document.querySelectorAll(".slide-wrapper .slid-button");
const sliderScrollbar = document.querySelector(".container .slide-scrollbar");
const scrollbarThumb = sliderScrollbar.querySelector(".scrollbar-thumb");
const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

// Handle scrollbar thumb drag
scrollbarThumb.addEventListener("mousedown", (e) => {
    const startX = e.clientX;
    const thumbPosition = scrollbarThumb.offsetLeft;
    const maxThumbPosition = sliderScrollbar.getBoundingClientRect().width - scrollbarThumb.offsetWidth;
    
    // Update thumb position on mouse move
    const handleMouseMove = (e) => {
        const deltaX = e.clientX - startX;
        const newThumbPosition = thumbPosition + deltaX;

        // Ensure the scrollbar thumb stays within bounds
        const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
        const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;
        
        scrollbarThumb.style.left = `${boundedPosition}px`;
        imageList.scrollLeft = scrollPosition;
    }

    // Remove event listeners on mouse up
    const handleMouseUp = () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
    }

    // Add event listeners for drag interaction
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
});

// Slide images according to the slide button clicks
slideButtons.forEach(button => {
    button.addEventListener("click", () => {
        const direction = button.id === "prev-slid" ? -1 : 1;
        const scrollAmount = imageList.clientWidth * direction;
        imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });
});


// Update scrollbar thumb position based on image scroll
const updateScrollThumbPosition = () => {
    const scrollPosition = imageList.scrollLeft;
    const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
    scrollbarThumb.style.left = `${thumbPosition}px`;
}

// Call these two functions when image list scrolls
imageList.addEventListener("scroll", () => {
    updateScrollThumbPosition();
    handleSlideButtons();
});

// Initial function calls
updateScrollThumbPosition();
handleSlideButtons();
}

window.addEventListener("resize", initSlide);
window.addEventListener("load", initSlide);

// slider end


const initDuplicatedSlide = () => {
const imageList = document.querySelector(".duplicated-sponsor-section .duplicated-image-list");
const slideButtons = document.querySelectorAll(".duplicated-sponsor-section .duplicated-slid-button");
const sliderScrollbar = document.querySelector(".duplicated-sponsor-section .duplicated-slide-scrollbar");
const scrollbarThumb = sliderScrollbar.querySelector(".duplicated-scrollbar-thumb");
const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

// Handle scrollbar thumb drag
scrollbarThumb.addEventListener("mousedown", (e) => {
  const startX = e.clientX;
  const thumbPosition = scrollbarThumb.offsetLeft;
  const maxThumbPosition = sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth;

  const handleMouseMove = (e) => {
    const deltaX = e.clientX - startX;
    const newThumbPosition = thumbPosition + deltaX;
    const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
    const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;

    scrollbarThumb.style.left = `${boundedPosition}px`;
    imageList.scrollLeft = scrollPosition;
  };

  const handleMouseUp = () => {
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  document.addEventListener("mousemove", handleMouseMove);
  document.addEventListener("mouseup", handleMouseUp);
});

// Slide images according to the slide button clicks
slideButtons.forEach(button => {
  button.addEventListener("click", () => {
    const direction = button.id === "prev-duplicated-slid" ? -1 : 1;
    const scrollAmount = imageList.clientWidth * direction;
    imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
  });
});

// Update scrollbar thumb position based on image scroll
const updateDuplicatedScrollThumbPosition = () => {
  const scrollPosition = imageList.scrollLeft;
  const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
  scrollbarThumb.style.left = `${thumbPosition}px`;
};

// Call these functions when image list scrolls
imageList.addEventListener("scroll", updateDuplicatedScrollThumbPosition);

// Initial function call to set initial scrollbar position
updateDuplicatedScrollThumbPosition();
};

// Event listener for window resize to reinitialize scrollbar
window.addEventListener("resize", initDuplicatedSlide);

// Event listener for initial load to initialize scrollbar
window.addEventListener("load", initDuplicatedSlide);

// Initialize duplicated slide on page load
initDuplicatedSlide();