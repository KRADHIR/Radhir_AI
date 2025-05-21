const imageUpload = document.getElementById("imageUpload");
const originalImage = document.getElementById("originalImage");
const convertedImage = document.getElementById("convertedImage");
const convertBtn = document.getElementById("convertBtn");
const downloadBtn = document.getElementById("downloadBtn");
const loading = document.getElementById("loading");

imageUpload.addEventListener("change", (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
        originalImage.src = e.target.result;
        convertedImage.src = ""; // Clear old converted image
    };
    reader.readAsDataURL(file);
});

convertBtn.addEventListener("click", () => {
    if (!originalImage.src) {
        alert("Please upload an image first.");
        return;
    }

    loading.classList.remove("hidden");

    // Simulated image processing delay (replace with actual AI API call)
    setTimeout(() => {
        convertedImage.src = originalImage.src; // For now, simulate conversion
        loading.classList.add("hidden");
        alert("Image converted to Ghibli style! (Simulated)");
    }, 2000);
});

downloadBtn.addEventListener("click", () => {
    if (!convertedImage.src) {
        alert("Please convert an image first.");
        return;
    }

    const link = document.createElement("a");
    link.href = convertedImage.src;
    link.download = "ghibli_art.png";
    link.click();
});
