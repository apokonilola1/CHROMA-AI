// generate.js
document.addEventListener("DOMContentLoaded", function () {
  const generateButton = document.querySelector(".generate");

  generateButton.addEventListener("click", function () {
    const colorSVGFillMapping = {
      color1: {
        fill: [
          ".t1-cls-61",
          ".t1-cls-62",
          ".t2-cls-1",
          ".t2-cls-6",
          ".t3-s2",
          ".t3-t4",
          ".t4-p1",
          ".t5-p1",
          ".t6-p1",
          ".t7-p1",
          ".t8-p1",
          ".t9-p1",
        ],
        stroke: [".t9-st-p1"],
      },
      color2: {
        fill: [
          ".t1-cls-7",
          ".t2-cls-2",
          ".t2-cls-7",
          ".t3-s0",
          ".t4-p4",
          ".t5-p2",
          ".t6-p2",
          ".t7-p2",
          ".t8-p5",
          ".t9-p2",
        ],
        stroke: [".t1-cls-1", ".t1-cls-3"],
      },
      color3: {
        fill: [
          ".t2-cls-3",
          ".t4-p2",
          ".t5-p5",
          ".t6-p3",
          ".t7-p3",
          ".t8-p3",
          ".t9-p3",
        ],
        stroke: [".t1-cls-2"],
      },
      color4: {
        fill: [
          ".t1-cls-9",
          ".t2-cls-4",
          ".t3-s1",
          ".t4-p3",
          ".t5-p3",
          ".t6-p4",
          ".t7-p4",
          ".t8-p4",
          ".t9-p4",
        ],
      },
      color5: {
        fill: [
          ".t1-cls-41",
          ".t1-cls-42",
          ".t1-cls-51",
          ".t1-cls-52",
          ".t1-cls-53",
          ".t1-cls-54",
          ".t1-cls-8",
          ".t2-cls-5",
          ".t4-p5",
          ".t5-p4",
          ".t6-p5",
          ".t7-p5",
          ".t8-p2",
          ".t9-p5",
        ],
        stroke: [".t3-s3", ".t9-st-p5"],
      },
    };

    const randomColors = generateRandomColors();

    // Change background-color for color-box elements
    Array.from(document.querySelectorAll(".color-box")).forEach(function (box) {
      const colorBoxId = box.id;
      box.style.backgroundColor = randomColors[colorBoxId];
    });

    // Change fill for SVG elements
    changeSvgColors(colorSVGFillMapping, randomColors);

    // Add generated colors to the history
    window.undoRedo.addToHistory(
      Array.from(document.querySelectorAll(".color-box")).map(
        (box) => box.style.backgroundColor
      )
    );
  });

  function changeSvgColors(mapping, colors) {
    for (const colorBoxId in mapping) {
      const colorData = mapping[colorBoxId];
      const fillClasses = colorData.fill;
      const strokeClasses = colorData.stroke;

      fillClasses.forEach(function (fillClass) {
        const fillElements = document.querySelectorAll(fillClass);
        if (fillElements) {
          fillElements.forEach(function (fillElement) {
            fillElement.style.fill = colors[colorBoxId];
          });
        }
      });

      if (strokeClasses) {
        strokeClasses.forEach(function (strokeClass) {
          const strokeElements = document.querySelectorAll(strokeClass);
          if (strokeElements) {
            strokeElements.forEach(function (strokeElement) {
              strokeElement.style.stroke = colors[colorBoxId];
            });
          }
        });
      }
    }
  }

  function generateRandomColors() {
    const colors = {};
    for (let i = 0; i < 5; i++) {
      const colorId = `color${i + 1}`;
      const randomColor =
        "#" + Math.floor(Math.random() * 16777215).toString(16);
      colors[colorId] = randomColor;
    }
    return colors;
  }
});
