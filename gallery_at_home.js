// Array of image data (replace with your image paths and descriptions)
const imageFolder = "images/gallery/";
const imageData = [
  { src: "gallery1.jpg", description: "Mangrove Restoration in Sundarbans" },
  { src: "gallery2.jpg", description: "Wildlife in the Mangroves" },
  { src: "gallery3.jpg", description: "Community Engagement Activities" },
  { src: "gallery4.jpg", description: "Planting Mangrove Saplings" },
  { src: "gallery5.jpg", description: "Sundarbans Landscape" },
  { src: "gallery6.jpg", description: "Team Working on Restoration" },
  // Add more images and descriptions as needed
];

// Function to load and display images
function loadGallery() {
  const galleryRow = document.querySelector("#gallery .row");

  // Check if galleryRow exists
  if (!galleryRow) {
    console.error("Gallery row not found!");
    return;
  }

  // Display all images
  imageData.forEach((image) => {
    const colElement = document.createElement("div");
    colElement.classList.add("col-6", "col-md-4", "mb-4"); /* 2 columns on mobile, 3 on desktop */

    const galleryItem = document.createElement("div");
    galleryItem.classList.add("gallery-item");

    const imgElement = document.createElement("img");
    imgElement.src = imageFolder + image.src;
    imgElement.alt = image.description;

    // Add click event to open modal (if needed)
    imgElement.addEventListener("click", () => {
      console.log("Image clicked:", image.src); // Debugging statement
      // Add modal functionality here if needed
    });

    galleryItem.appendChild(imgElement);
    colElement.appendChild(galleryItem);
    galleryRow.appendChild(colElement);
  });
}

// Load the gallery on page load
document.addEventListener("DOMContentLoaded", loadGallery);