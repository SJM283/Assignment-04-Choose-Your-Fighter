console.log("Are you ready to RUMBLE?");

const thumbnailContainer = document.getElementById("thumbnailContainer");
const backgroundImage = document.getElementById("backgroundImage");
const audioContainer = document.getElementById("audioContainer");

const fighters = [
  {
    src: "/images/BB.webp",
    alt: "Battle-Beast",
    audio: "/audio/deep.mp3",
  },
  {
    src: "/images/DV.jpg",
    alt: "Darth-Vader",
    audio: "/audio/deep.mp3",
  },
  {
    src: "/images/GL.avif",
    alt: "Green-Lantern",
    audio: "/audio/deep.mp3",
  },
  {
    src: "/images/KS.avif",
    alt: "Kratos",
    audio: "/audio/deep.mp3",
  },
  {
    src: "/images/MO.avif",
    alt: "Magneto",
    audio: "/audio/deep.mp3",
  },
];

function createThumbnails() {
  console.log("createThumbnails invoked!");

  const thumbnailContainer = document.getElementById("thumbnailContainer"); // Ensure this exists in your HTML

  for (let x = 0; x < fighters.length; x++) {
    const imgTag = document.createElement("img");

    imgTag.src = fighters[x].src;
    imgTag.alt = fighters[x].alt;

    imgTag.addEventListener("click", function () {
      console.log("Image clicked:", fighters[x].src);
      createBackgroundImage(fighters[x]);
      createAudioPlayer(fighters[x].audio);
    });

    thumbnailContainer.appendChild(imgTag);
  }
}

function createBackgroundImage(currentImage) {
  console.log("The thing passed in is", currentImage);
  backgroundImage.style.backgroundImage = `url(${currentImage.src})`;
}

function createAudioPlayer(source) {
  audioContainer.innerHTML = "";
  const audio = document.createElement("audio");
  audio.autoplay = true;
  audio.controls = false;
  audio.muted = false;
  const audioSource = document.createElement("source");
  audioSource.src = source;
  audioSource.type = "audio/mp3";
  audio.appendChild(audioSource);
  audioContainer.appendChild(audio);
}

window.addEventListener("DOMContentLoaded", function () {
  createThumbnails();
  // do some other shit here
});
