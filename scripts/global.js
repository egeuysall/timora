const canvas = document.getElementById('grainCanvas');
    const ctx = canvas.getContext('2d');

    // Resize the canvas to fit the screen
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    function generateGrain() {
      const grainDensity = 0.06; // Control the opacity (lower means lighter grain)
      const grainSize = 1;      // Adjusted to a larger grain size for visible grain effect

      const imageData = ctx.createImageData(canvas.width, canvas.height);
      const buffer = imageData.data;

      // Loop through the entire canvas at a larger grain size
      for (let x = 0; x < canvas.width; x += grainSize) {
        for (let y = 0; y < canvas.height; y += grainSize) {
          const randomValue = Math.random() * 255;

          // Set the grain color to white (#fff)
          const offset = (y * canvas.width + x) * 4;

          buffer[offset] = 255;       // Red (R)
          buffer[offset + 1] = 255;   // Green (G)
          buffer[offset + 2] = 255;   // Blue (B)
          buffer[offset + 3] = randomValue * grainDensity; // Alpha (opacity)
        }
      }

      ctx.putImageData(imageData, 0, 0);
    }

    generateGrain();

    // Adjust canvas size on window resize
    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      generateGrain();
    });