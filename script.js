// Get DOM elements
const fileInput = document.getElementById('file-input');
const uploadArea = document.getElementById('upload-area');
const originalImage = document.getElementById('original-image');
const ghibliImage = document.getElementById('ghibli-image');
const styleStrength = document.getElementById('style-strength');
const convertButton = document.getElementById('convert-button');
const downloadButton = document.getElementById('download-button');
const loadingOverlay = document.getElementById('loading-overlay');

// Enable drag and drop functionality
uploadArea.addEventListener('dragover', (e) => {
  e.preventDefault();
  uploadArea.classList.add('dragover');
});
uploadArea.addEventListener('dragleave', () => {
  uploadArea.classList.remove('dragover');
});
uploadArea.addEventListener('drop', (e) => {
  e.preventDefault();
  uploadArea.classList.remove('dragover');
  if (e.dataTransfer.files.length > 0) {
    fileInput.files = e.dataTransfer.files;
    handleFileUpload({ target: { files: fileInput.files } });
  }
});

// Allow clicking upload area to trigger file dialog
uploadArea.addEventListener('click', () => fileInput.click());

// Handle file upload input
fileInput.addEventListener('change', handleFileUpload);

function handleFileUpload(event) {
  const file = event.target.files[0];
  if (!file) return;
  if (!file.type.startsWith('image/')) {
    alert('Please upload a valid image file.');
    return;
  }
  const reader = new FileReader();
  reader.onload = function(e) {
    originalImage.src = e.target.result;
    ghibliImage.src = '';
    convertButton.disabled = false;
    downloadButton.disabled = true;
  };
  reader.readAsDataURL(file);
}

// Simulated conversion (replace with actual AI processing API call)
convertButton.addEventListener('click', () => {
  if (!originalImage.src) return;
  convertButton.disabled = true;
  downloadButton.disabled = true;
  loadingOverlay.classList.add('active');

  // Simulate AI processing delay (2.5 seconds)
  setTimeout(() => {
    // For demonstration, just applying a CSS filter as "Ghibli-fied" effect
    // Replace this block with actual AI output image
    const canvas = document.createElement('canvas');
    const img = new Image();
    img.crossOrigin = 'Anonymous';
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0);

      // Apply a "Ghibli inspired" pastel filter style!
      // Using canvas filters for demo, real app should use AI generated image
      ctx.globalCompositeOperation = 'soft-light';
      const pastelGradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      pastelGradient.addColorStop(0, 'rgba(219, 176, 135, 0.25)');
      pastelGradient.addColorStop(1, 'rgba(181, 220, 233, 0.3)');
      ctx.fillStyle = pastelGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Create another layer with slight blur for softness
      ctx.filter = 'blur(1.2px)';
      ctx.drawImage(img, 0, 0);
      ctx.filter = 'none';

      const styleFactor = +styleStrength.value / 100;
      // To create a subtle ghibli-style color tint, blend with pastel overlay depending on slider
      let imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < imageData.data.length; i += 4) {
        // Blend towards warmer pastel tint
        imageData.data[i] = imageData.data[i] * (1 - styleFactor) + 230 * styleFactor;       // R
        imageData.data[i + 1] = imageData.data[i + 1] * (1 - styleFactor) + 198 * styleFactor; // G
        imageData.data[i + 2] = imageData.data[i + 2] * (1 - styleFactor) + 134 * styleFactor; // B
      }
      ctx.putImageData(imageData, 0, 0);

      ghibliImage.src = canvas.toDataURL('image/png');
      loadingOverlay.classList.remove('active');
      convertButton.disabled = false;
      downloadButton.disabled = false;
    };
    img.src = originalImage.src;
  }, 2500);
});

// Download the transformed image
downloadButton.addEventListener('click', () => {
  if (!ghibliImage.src) return;
  const link = document.createElement('a');
  link.href = ghibliImage.src;
  link.download = 'ghibli_art.png';
  document.body.appendChild(link);
  link.click();
  link.remove();
});
