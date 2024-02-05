document.addEventListener("DOMContentLoaded", function () {
    var noButton = document.getElementById("noButton");
    var yesButton = document.getElementById("yesButton");
  
    function moveButtonRandomly(button) {
      var buttonRect = button.getBoundingClientRect();
      var buttonWidth = buttonRect.width;
      var buttonHeight = buttonRect.height;
  
      var maxX = window.innerWidth - buttonWidth;
      var maxY = window.innerHeight - buttonHeight;
  
      var randomLeft = Math.random() * maxX;
      var randomTop = Math.random() * maxY;
  
      button.style.transform = `translate(${randomLeft}px, ${randomTop}px)`;
    }
  
    function changePageColorAndDisplayVideo() {
      var body = document.body;
  
      var video = document.createElement("video");
      video.src = "hunnibee-asmr-mcdonalds.mp4";
      video.autoplay = true;
      video.loop = true;
      video.muted = true;
      video.style.position = "fixed";
      video.style.width = "100%";
      video.style.height = "100%";
      video.style.objectFit = "cover";
      video.style.zIndex = "-1";
  
      body.appendChild(video);
  
      yesButton.style.display = "none";
      noButton.style.display = "none";
  
      // Hide the question text
      var questionText = document.querySelector("h1"); // Select the first h1 element
      if (questionText) {
        questionText.style.display = "none";
      }
  
      displayRandomImages();
    }
  
    var displayedImages = []; // Array to store already displayed image indices

function displayRandomImages() {
  var imageContainer = document.createElement("div");
  imageContainer.id = "imageContainer";
  imageContainer.style.zIndex = "9999";
  imageContainer.style.display = "flex";
  imageContainer.style.justifyContent = "center";
  imageContainer.style.alignItems = "center";
  imageContainer.style.marginTop = "20px";

  var imageUrls = [
    "13ce16fa6bc2403301605d2a9f67d713.jpg",
    "160fb1fa63ccb7c061d0795861d6f8d8.jpg",
    "3504e3d228f27b8c34d3463b18e65679.jpg",
    "mcdonald’s french fries.jpg",
    // Add more image URLs as needed
  ];

  // Shuffle the array to randomize the order
  imageUrls = shuffleArray(imageUrls);

  for (var i = 0; i < 4; i++) {
    // Check if the image has already been displayed
    if (!displayedImages.includes(i)) {
      var img = document.createElement("img");
      img.src = imageUrls[i];
      img.alt = "Random Image " + (i + 1);
      img.style.width = "100px"; // Adjust the size as needed
      img.style.height = "100px"; // Adjust the size as needed
      img.style.borderRadius = "100%";
      img.style.margin = "20px"; // Add some margin between images

      // Add the image to the container
      imageContainer.appendChild(img);

      // Mark the image as displayed
      displayedImages.push(i);
    }
  }

  // Reset the displayedImages array if all images have been displayed
  if (displayedImages.length === imageUrls.length) {
    displayedImages = [];
  }

  document.body.appendChild(imageContainer);
}

// Function to shuffle an array (Fisher-Yates algorithm)
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

  
    yesButton.addEventListener("click", function () {
      changePageColorAndDisplayVideo();
    });
  
    noButton.addEventListener("click", function () {
      moveButtonRandomly(noButton);
    });
  });
  