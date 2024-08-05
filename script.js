//CHANGE BACKGROUND IMAGES
document.addEventListener('DOMContentLoaded', function() {
    const images = [
      'url(https://cdn.glitch.global/e6b91e12-f29b-4c72-90a6-22d0a968c04d/_background_pink.jpg?v=1720884845710)',
      'url(https://cdn.glitch.global/e6b91e12-f29b-4c72-90a6-22d0a968c04d/background_orange.jpg?v=1720884856179)',
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