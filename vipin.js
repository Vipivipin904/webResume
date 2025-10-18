// Function to detect when an element is in view
function isElementInView(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to handle scroll animation
function handleScroll() {
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        if (isElementInView(section)) {
            section.classList.add('visible'); // Add 'visible' class when the section is in view
        }
    });
}

// Listen for scroll events
window.addEventListener('scroll', handleScroll);

// Call the function initially to handle the case when the page is loaded with some sections already in view
handleScroll();

function showMessage() {
  alert("Thanks for clicking the button!");
}
// You can handle clicks using JS if needed
document.querySelector('.portfolio-img img').addEventListener('click', () => {
    window.open('file:///F:/123/vipin.html#Home', '_blank');
});
