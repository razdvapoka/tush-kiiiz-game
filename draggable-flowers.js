document.querySelectorAll(".flower").forEach(function (flower) {
  flower.addEventListener("mousedown", function (e) {
    flower.classList.add("is-dragged");
  });
});

window.addEventListener("mousemove", function (event) {
  var draggedElement = document.querySelector(".is-dragged");

  if (draggedElement) {
    var draggedElementRect = draggedElement.getBoundingClientRect();
    var translateX = event.clientX - draggedElementRect.width / 2;
    var translateY = event.clientY - draggedElementRect.height / 2;
    var translate = "translate(" + translateX + "px, " + translateY + "px)";
    draggedElement.style.transform = translate;
  }
  // else {
  //   console.log("nothing to drag");
  // }
});

window.addEventListener("mouseup", function () {
  document.querySelectorAll(".flower").forEach(function (flower) {
    flower.classList.remove("is-dragged");
  });
});
