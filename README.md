# Ghibli Art Photo Converter

A web-based AI tool that allows users to upload a photo and convert it into a Studio Ghibli-inspired artwork. The tool features a whimsical and soft pastel design consistent with the Ghibli aesthetic, providing an intuitive interface with real-time preview and downloadable results.

---

## Features

- **User-friendly interface:**
  - Clean, responsive design with a Ghibli theme using soft colors and whimsical elements.
  - Drag-and-drop or file upload option for images.
  - Preview windows to show original and Ghibli-fied images side by side.
  - Slider control to adjust "Ghibli Style Strength" for customization.

- **AI Image Processing (Simulated):**
  - A simulated artistic filter that blends pastel tones and softness for demonstration.
  - Loading animation while processing.
  - Error handling for invalid files.

- **Real-Time Preview & Customization:**
  - Toggle between the original and converted images.
  - Adjust style intensity using the slider.

- **Download & Share:**
  - Download the Ghibli-style image in high resolution.

- **Bonus:**
  - Animated floating soot sprites reminiscent of Ghibli movies add whimsy.
  
---

## Technologies Used

- **Frontend:**
  - HTML5
  - CSS3 (Flexbox, gradients, animations)
  - JavaScript (ES6+)

- **Fonts & Icons:**
  - Google Fonts - Pacifico and Poppins for a playful yet readable look.

---

## How to Use

1. Open `index.html` in any modern web browser.
2. Drag and drop an image or click the upload area to select a photo.
3. Adjust the "Ghibli Style Strength" slider to set the artistic intensity.
4. Click **Convert** to apply the Ghibli-inspired filter.
5. Preview the effect in the "Ghibli-fied Image" panel.
6. Click **Download** to save the converted image.

---

## Notes

- The current version uses a simulated filter effect to demonstrate the UI and styling.
- To integrate a real AI style-transfer model:
  - Replace the simulated processing JavaScript with API calls to a pre-trained Ghibli-style GAN or style-transfer service.
  - You can consider using APIs such as DeepAI, TensorFlow.js models, or any custom model exposing a web API.
  
---

## File Structure

---

## License

This project is open for modification and personal use. Feel free to extend and adapt as needed.

---

## Inspiration

Inspired by Studio Ghibli’s beautiful, whimsical art style — the tool helps users channel their inner Miyazaki through their own photos.

---

Enjoy turning your photos into magical Ghibli artworks!
