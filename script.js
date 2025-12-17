//CHANGE BACKGROUND IMAGES
document.addEventListener('DOMContentLoaded', function() {
    const images = [
      'url(img/backgroundimg/2022_cranberry.jpg)',
      'url(img/backgroundimg/2022_green1.jpg)',
      'url(img/backgroundimg/2022_green2.jpg)',
      'url(img/backgroundimg/2022_lightblue1.jpg)',
      'url(img/backgroundimg/2022_lightblue2.jpg)',
      'url(img/backgroundimg/2022_lightblue3.jpg)',
      'url(img/backgroundimg/2022_navy1.jpg)',
      'url(img/backgroundimg/2022_navy2.jpg)',
      'url(img/backgroundimg/2022_orange.jpg)',
      'url(img/backgroundimg/2022_pink1.jpg)',
      'url(img/backgroundimg/2022_pink2.jpg)',
      'url(img/backgroundimg/2022_pink3.jpg)',
      'url(img/backgroundimg/2024_cranberry1.jpg)',
      'url(img/backgroundimg/2024_cranberry2.jpg)',
      'url(img/backgroundimg/2024_green2.jpg)',
      'url(img/backgroundimg/2024_lightblue1.jpg)',
      'url(img/backgroundimg/2024_lightblue2.jpg)',
      'url(img/backgroundimg/2024_navy1.jpg)',
      'url(img/backgroundimg/2024_navy2.jpg)',
      'url(img/backgroundimg/2024_orange1.jpg)',
      'url(img/backgroundimg/2024_orange2.jpg)',
      'url(img/backgroundimg/2024_pink1.jpg)',
      'url(img/backgroundimg/2024_pink2.jpg)',
    ];
  
    let currentIndex = Math.floor(Math.random() * images.length);
    const background1 = document.getElementById('background1');
    const background2 = document.getElementById('background2');
    let isBackground1Visible = true;
  
    function changeBackground() {
      currentIndex = (currentIndex + 1) % images.length;
  
      if (isBackground1Visible) {
        background2.style.backgroundImage = images[currentIndex];
        background2.style.opacity = 1;
        background1.style.opacity = 0;
      } else {
        background1.style.backgroundImage = images[currentIndex];
        background1.style.opacity = 1;
        background2.style.opacity = 0;
      }
  
      isBackground1Visible = !isBackground1Visible;
    }
  
    // Initialize the first background image
    background1.style.backgroundImage = images[currentIndex];
  
    // Change the background image every 10 seconds
    setInterval(changeBackground, 10000); // 5 seconds display + 5 seconds fade
  });

  // New code for updating the footer date
  const lastUpdatedDate = 'December 2025'; // Update this when needed
  document.getElementById('lastUpdated').textContent = lastUpdatedDate;

  //Code for updating nav
  document.addEventListener('DOMContentLoaded', function () {
    const navHTML = `
        <nav>
            <div class="navleft">
                <a style="text-decoration:none;" class="linkleft" id="moving-text" href="index.html">
                    Steph Zimmerman
                </a>
            </div>
            <div class="navright">
                <a class="linkright" href="info.html" data-page="info">Info</a>
                <a class="linkright" href="archive.html" data-page="archive">Archive</a>
                <a class="linkright" href="teaching.html" data-page="teaching">Teaching</a>
            </div>
            <!-- Hamburger Icon -->
            <button class="hamburger" aria-label="Toggle navigation">
                &#9776; <!-- Unicode for hamburger icon -->
            </button>
            <!-- Dropdown Menu -->
            <div class="dropdown">
                <a class="linkright" href="info.html" data-page="info">Info</a>
                <a class="linkright" href="archive.html" data-page="archive">Archive</a>
                <a class="linkright" href="teaching.html" data-page="teaching">Teaching</a>
            </div>
        </nav>
        <!-- Overlay for dimming the rest of the page -->
        <div class="overlay"></div>
    `;
    // document.querySelector('nav').innerHTML = navHTML;
    document.body.insertAdjacentHTML('beforeend', navHTML); // Append to body for proper overlay positioning

    // Highlight the current page
    const currentPage = window.location.pathname.split('/').pop().replace('.html', '');
    document.querySelectorAll('.linkright').forEach(link => {
        if (link.dataset.page === currentPage) {
            link.style.textDecoration = 'underline';
        }
    });
    
    // Hamburger menu functionality
    const hamburger = document.querySelector('.hamburger');
    const dropdown = document.querySelector('.dropdown');
    const overlay = document.querySelector('.overlay');

    hamburger.addEventListener('click', () => {
      dropdown.classList.toggle('active');
      overlay.classList.toggle('active'); // Toggle overlay visibility
  });

  // Prevent closing the overlay when clicking inside the dropdown
  dropdown.addEventListener('click', (event) => {
    event.stopPropagation(); // Stops the click event from propagating to the overlay
});
});
  
  
  /*
  //CHANGE FONTS
  document.addEventListener('DOMContentLoaded', function() {
    const fonts = [
      'Arial, sans-serif',
      'Courier New, Courier, monospace',
      'Georgia, serif',
      'Times New Roman, Times, serif',
      'Verdana, sans-serif'
    ];
  
    let currentFontIndex = Math.floor(Math.random() * fonts.length);
  
    function changeFont() {
      currentFontIndex = (currentFontIndex + 1) % fonts.length;
      document.body.style.fontFamily = fonts[currentFontIndex];
    }
  
    // Initialize the first font family randomly
    document.body.style.fontFamily = fonts[currentFontIndex];
  
    // Change the font family every 20 seconds
    setInterval(changeFont, 20000);
  });
  
  */
  
  const fonts = [
      'Helvetica, sans-serif',
      'Georgia, serif',
      ];
  
      // Function to get a random font from the array
      function getRandomFont() {
        const randomIndex = Math.floor(Math.random() * fonts.length);
        return fonts[randomIndex];
      }
  
      // Apply the random font to the body
      document.body.style.fontFamily = getRandomFont();
  
  //MAKE IT SO IMAGES ZOOM IN WHEN CLICKED
  /*
  // script.js
  const image = document.getElementById('image');
  
  image.addEventListener('click', () => {
    image.classList.toggle('fullscreen');
  });
  */