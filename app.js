document.addEventListener("DOMContentLoaded", function () {
  const cashcowButton = document.getElementById("cashcow-video");
  const reelsButton = document.getElementById("reels");
  const cashcowVideoList = document.querySelector(".cashcow-videos-list");
  const reelsVideoList = document.querySelector(".reels-list");

  cashcowVideoList.style.display = "none";
  reelsVideoList.style.display = "grid";

  cashcowButton.addEventListener("click", function () {
    cashcowButton.style.backgroundColor = "rgba(244, 238, 238, 0.22)";
    reelsButton.style.backgroundColor = "";

    cashcowVideoList.style.display = "grid";
    reelsVideoList.style.display = "none";
  });

  reelsButton.addEventListener("click", function () {
    // Change background color of the reels button
    reelsButton.style.backgroundColor = "rgba(244, 238, 238, 0.22)";
    cashcowButton.style.backgroundColor = "";

    reelsVideoList.style.display = "grid";
    cashcowVideoList.style.display = "none";
  });
});
