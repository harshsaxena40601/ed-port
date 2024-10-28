document.addEventListener("DOMContentLoaded", function () {
  const cashcowButton = document.getElementById("cashcow-video");
  const reelsButton = document.getElementById("reels");
  const cashcowVideoList = document.querySelector(".cashcow-videos-list");
  const reelsVideoList = document.querySelector(".reels-list");

  // Initially hide the cashcow video list
  cashcowVideoList.style.display = "none"; // Initially hide cashcow videos
  reelsVideoList.style.display = "grid"; // Show reels videos initially

  cashcowButton.addEventListener("click", function () {
    // Change background color of the cashcow button
    cashcowButton.style.backgroundColor = "rgba(244, 238, 238, 0.22)";
    reelsButton.style.backgroundColor = ""; // Reset reels button color

    // Show cashcow video list and hide reels video list
    cashcowVideoList.style.display = "grid"; // Show cashcow video list
    reelsVideoList.style.display = "none"; // Hide reels video list
  });

  reelsButton.addEventListener("click", function () {
    // Change background color of the reels button
    reelsButton.style.backgroundColor = "rgba(244, 238, 238, 0.22)";
    cashcowButton.style.backgroundColor = ""; // Reset cashcow button color

    // Show reels video list and hide cashcow video list
    reelsVideoList.style.display = "grid"; // Show reels video list
    cashcowVideoList.style.display = "none"; // Hide cashcow video list
  });
});
