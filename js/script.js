/*======================typing animation=================*/
var typed = new Typed(".typing", {
    strings: ["Web Designer", "Graphic Designer", "Web Developer", "Network Topology"],
    typeSpeed: 100,       // Speed of typing (in milliseconds)
    backSpeed: 60,        // Speed of backspacing (in milliseconds)
    loop: true            // Keep looping through the strings
});



/*======================typing animation=================*/
document.addEventListener("DOMContentLoaded", () => {
    // Get all the counter elements
    const counters = document.querySelectorAll('.count');

    // Function to animate the counter
    function animateCounter(counter) {
        const target = parseInt(counter.getAttribute('data-target'));
        let currentValue = 0;
        const increment = target / 100; // Speed of the counter

        function updateCounter() {
            currentValue += increment;
            if (currentValue >= target) {
                counter.textContent = target;
            } else {
                counter.textContent = Math.floor(currentValue);
                requestAnimationFrame(updateCounter); // Recursive call for smooth animation
            }
        }
        
        updateCounter(); // Start the counter animation
    }

    // Animate all counters
    counters.forEach(counter => {
        animateCounter(counter);
    });
});



var imageUrls = [];
har.log.entries.forEach(function (entry) {
  if (entry.response.content.mimeType.indexOf("image/") !== 0) return;
  imageUrls.push(entry.request.url);
});
console.log(imageUrls.join('\n'));





function locomotive() {
    gsap.registerPlugin(ScrollTrigger);
  
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true ,
    });
    locoScroll.on("scroll", ScrollTrigger.update);
  
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      },
  
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
  
      pinType: document.querySelector("#main").style.transform
        ? "transform"
        : "fixed",
    });
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
  }
  locomotive();
  
  
  const canvas = document.querySelector("canvas");
  const context = canvas.getContext("2d");
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  
  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });
  
  