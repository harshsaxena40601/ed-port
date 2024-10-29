document.addEventListener("DOMContentLoaded", function () {
  const cashcowButton = document.getElementById("cashcow-video");
  const reelsButton = document.getElementById("reels");
  const cashcowVideoList = document.querySelector(".cashcow-videos-list");
  const reelsVideoList = document.querySelector(".reels-list");

  // Set default display
  cashcowVideoList.style.display = "grid"; // Show Cashcow videos by default
  reelsVideoList.style.display = "none"; // Hide Reels videos by default

  // Set default button color
  cashcowButton.style.backgroundColor = "rgba(244, 238, 238, 0.22)";
  reelsButton.style.backgroundColor = ""; // Reset Reels button color

  // Function to pause all videos in a list
  function pauseAllVideos(videoList) {
    const videos = videoList.querySelectorAll("video");
    videos.forEach((video) => {
      video.pause();
    });
  }

  cashcowButton.addEventListener("click", function () {
    cashcowButton.style.backgroundColor = "rgba(244, 238, 238, 0.22)";
    reelsButton.style.backgroundColor = "";

    cashcowVideoList.style.display = "grid";
    reelsVideoList.style.display = "none";

    // Pause all reels videos when switching to cashcow
    pauseAllVideos(reelsVideoList);
  });

  reelsButton.addEventListener("click", function () {
    reelsButton.style.backgroundColor = "rgba(244, 238, 238, 0.22)";
    cashcowButton.style.backgroundColor = "";

    reelsVideoList.style.display = "grid";
    cashcowVideoList.style.display = "none";

    // Pause all cashcow videos when switching to reels
    pauseAllVideos(cashcowVideoList);
  });

  // Add event listeners to all videos in both lists
  const allVideos = document.querySelectorAll(
    ".cashcow-videos-list video, .reels-list video"
  );
  allVideos.forEach((video) => {
    video.addEventListener("play", function () {
      // Pause all other videos when one is played
      allVideos.forEach((otherVideo) => {
        if (otherVideo !== video) {
          otherVideo.pause();
        }
      });
    });
  });
});
