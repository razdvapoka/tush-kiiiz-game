var colors = ["gold", "#dedede", "rgba(111, 111, 222, 0.8)", "magenta", "cyan"];

document.querySelectorAll(".child").forEach(function (child) {
  child.addEventListener("mouseenter", function () {
    var randomColorIndex = Math.floor(Math.random() * colors.length);
    child.style.backgroundColor = colors[randomColorIndex];
  });
});

document.querySelector(".green-circle").addEventListener("click", function () {
  console.log("click");
  document.querySelector(".figure-2").classList.toggle("rotated");
});

document.querySelectorAll("video").forEach(function (video) {
  video.addEventListener("click", function (event) {
    video.classList.toggle("video-rotating");
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  });
});

document.querySelector(".box").addEventListener("click", function (event) {
  var box = event.target;
  box.classList.toggle("box-active");
});
