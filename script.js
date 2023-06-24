document.addEventListener("DOMContentLoaded", function () {
    var carouselContainer = document.querySelector(".carousel-container");
    var carouselItems = Array.from(
      document.querySelectorAll(".carousel-item")
    );

    var currentIndex = 0;
    var interval = 9000; // Transition interval in milliseconds

    function showNextItem() {
      carouselItems[currentIndex].classList.remove("active");
      currentIndex = (currentIndex + 1) % carouselItems.length;
      carouselItems[currentIndex].classList.add("active");
    }

    setInterval(showNextItem, interval);

    // Start animation for the first item
    carouselItems[currentIndex].classList.add("active");
  });

  document.addEventListener("DOMContentLoaded", function () {
    // Rest of the carousel code
  });
  
  const contactLink = document.getElementById("contact-link");
  
  // Add a click event listener to the link
  contactLink.addEventListener("click", () => {
    // Navigate to the contact.html file
    window.location.href = "contact.html";
  });
  