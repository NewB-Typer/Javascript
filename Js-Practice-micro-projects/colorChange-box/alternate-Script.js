var rectangle = document.querySelector("#box");

rectangle.addEventListener("mousemove", function (info) {
  var outerLine = rectangle.getBoundingClientRect();

  var insideX = info.clientX - outerLine.left;
  var insideY = info.clientY - outerLine.top;

  if (insideX < outerLine.width / 2) {
    if (insideY < outerLine.height / 2) {
      // Top-left quadrant
      var colorX = gsap.utils.mapRange(0, outerLine.width / 2, 255, 0, insideX);
      var colorY = gsap.utils.mapRange(0, outerLine.height / 2, 255, 0, insideY);

      gsap.to(rectangle, {
        backgroundColor: `rgb(${colorX}, ${colorY}, 0)`,
        ease: Power4,
      });
    } else {
      // Bottom-left quadrant
      var colorX = gsap.utils.mapRange(0, outerLine.width / 2, 255, 0, insideX);
      var colorY = gsap.utils.mapRange(outerLine.height / 2, outerLine.height, 0, 255, insideY);

      gsap.to(rectangle, {
        backgroundColor: `rgb(${colorX}, 0, ${colorY})`,
        ease: Power4,
      });
    }
  } else {
    if (insideY < outerLine.height / 2) {
      // Top-right quadrant
      var colorX = gsap.utils.mapRange(outerLine.width / 2, outerLine.width, 0, 255, insideX);
      var colorY = gsap.utils.mapRange(0, outerLine.height / 2, 255, 0, insideY);

      gsap.to(rectangle, {
        backgroundColor: `rgb(0, ${colorX}, ${colorY})`,
        ease: Power4,
      });
    } else {
      // Bottom-right quadrant
      var colorX = gsap.utils.mapRange(outerLine.width / 2, outerLine.width, 0, 255, insideX);
      var colorY = gsap.utils.mapRange(outerLine.height / 2, outerLine.height, 0, 255, insideY);

      gsap.to(rectangle, {
        backgroundColor: `rgb(${colorX}, 0, ${colorY})`,
        ease: Power4,
      });
    }
  }
});

rectangle.addEventListener("mouseleave", function () {
  gsap.to(rectangle, {
    backgroundColor: 'white',
    ease: Power4,
  });
});
