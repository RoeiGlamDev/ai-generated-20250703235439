// Clean JavaScript with proper structure and error handling.
// Uses a modular and reusable approach to scripting components.

// Select all elements with the class "fade-in"
const fadeInElements = document.querySelectorAll('.fade-in');

// Add event listener to window for scroll event
window.addEventListener('scroll', () => {
  // Get the current scroll position
  const scrollPosition = window.scrollY;
  
  // Loop through each fade-in element
  fadeInElements.forEach((element) => {
    // Get the top position of the element
    const elementTop = element.offsetTop;
    
    // Check if the element is in view
    if (scrollPosition >= elementTop - window.innerHeight) {
      // Add the "animate" class to the element
      element.classList.add('animate');
    }
  });
});

// Add event listener to button for click event
document.querySelector('.hero button').addEventListener('click', () => {
  // Get the current scroll position
  const scrollPosition = window.scrollY;
  
  // Scroll to the top of the page
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Add event listener to form for submit event
document.querySelector('form').addEventListener('submit', (event) => {
  // Prevent default form submission behavior
  event.preventDefault();
  
  // Get the form data
  const formData = new FormData(event.target);
  
  // Send the form data to the server (not implemented in this static site)
  // fetch('/api/form', {
  //   method: 'POST',
  //   body: formData,
  // })
  // .then((response) => response.json())
  // .then((data) => console.log(data))
  // .catch((error) => console.error(error));
});