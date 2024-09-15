// Nav
const hamburgerButton = document.querySelector("#hamburger");
const navBar = document.querySelector("#navBar");
const icon = hamburgerButton.querySelector("i");

function toggleMenu() {
    // Check if the sidebar is already open
    if (navBar.classList.contains('left-0')) {
        // Hide Side Nav
        navBar.classList.add("left-[-250px]", "opacity-0", "pointer-events-none");
        navBar.classList.remove("left-0", "opacity-100", "pointer-events-auto");

        // Change Icon
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

        // Allow body to scroll
        document.body.style.overflow = "auto";
    } else {
        // Show Side Nav
        navBar.classList.add("left-0", "opacity-100", "pointer-events-auto");
        navBar.classList.remove("left-[-250px]", "opacity-0", "pointer-events-none");

        // Change Icon
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");

        // Prevent body from scrolling
        document.body.style.overflow = "hidden";
    }
}

// Add event listener to the hamburger button
hamburgerButton.addEventListener("click", toggleMenu);


  //FAQ

  document.querySelectorAll('.faq-question').forEach((button) => {
    button.addEventListener('click', () => {
      const content = button.nextElementSibling;
      const allContent = document.querySelectorAll('.faq-content');

      // Close all other FAQ content
      allContent.forEach((item) => {
        if (item !== content) {
          item.classList.remove('max-h-96');
          item.classList.add('max-h-0');
        }
      });

      // Toggle current FAQ content
      if (content.classList.contains('max-h-96')) {
        content.classList.remove('max-h-96');
        content.classList.add('max-h-0');
      } else {
        content.classList.remove('max-h-0');
        content.classList.add('max-h-96');
      }
    });
  });

   // Show the button when user scrolls down
   window.onscroll = function() {
    const backToTopBtn = document.getElementById('backToTopBtn');
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      backToTopBtn.classList.remove('hidden');
      backToTopBtn.classList.add('opacity-100');
    } else {
      backToTopBtn.classList.add('hidden');
      backToTopBtn.classList.remove('opacity-100');
    }
  };

  // Scroll to the top when the button is clicked
  document.getElementById('backToTopBtn').onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };