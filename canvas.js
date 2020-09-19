window.addEventListener("load", () => {
  const canvas = document.querySelector("#canvas");
  const context = canvas.getContext("2d");

  //Resizing
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;

  //variables
  let painting = false;

  function startPosition(e) {
    painting = true;
    draw(e);
  }

  function finishedPosition() {
    painting = false;
    context.beginPath();
  }

  function draw(e) {
    if (!painting) {
      return;
    }
    context.lineWidth = 2;
    context.strokeStyle = "red";
    context.lineCap = "round";

    context.lineTo(e.clientX, e.clientY);
    context.stroke();

    context.beginPath();
    context.moveTo(e.clientX, e.clientY);
  }

  //event listeners
  canvas.addEventListener("mousedown", startPosition);
  canvas.addEventListener("mouseup", finishedPosition);
  canvas.addEventListener("mousemove", draw);
});

window.addEventListener("resize");
