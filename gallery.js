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
  const galleryRow = document.querySelector(".gallery-grid .row");

  // Display all images
  imageData.forEach((image) => {
    const colElement = document.createElement("div");
    colElement.classList.add("col-6", "col-md-4", "mb-4"); /* 2 columns on mobile, 3 on desktop */

    const galleryItem = document.createElement("div");
    galleryItem.classList.add("gallery-item");

    const imgElement = document.createElement("img");
    imgElement.src = imageFolder + image.src;
    imgElement.alt = image.description;

    // Add click event to open modal
    imgElement.addEventListener("click", () => {
      openModal(image.src, image.description);
    });

    galleryItem.appendChild(imgElement);
    colElement.appendChild(galleryItem);
    galleryRow.appendChild(colElement);
  });
}

// Function to open the modal
function openModal(src, description) {
  const modalImage = document.getElementById("modalImage");
  const modalDescription = document.getElementById("modalDescription");

  // Update modal content
  modalImage.src = imageFolder + src;
  modalDescription.textContent = description;

  // Show the modal
  const modal = new bootstrap.Modal(document.getElementById("imageModal"));
  modal.show();
}

// Load the gallery on page load
document.addEventListener("DOMContentLoaded", loadGallery);