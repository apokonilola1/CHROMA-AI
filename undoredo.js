// undoredo.js
document.addEventListener("DOMContentLoaded", function () {
  const undoButton = document.querySelector(".undo");
  const redoButton = document.querySelector(".redo");

  let colorHistory = [];
  let currentStep = -1;

  undoButton.addEventListener("click", function () {
    if (currentStep > 0) {
      currentStep--;
      restoreColors();
    }
  });

  redoButton.addEventListener("click", function () {
    if (currentStep < colorHistory.length - 1) {
      currentStep++;
      restoreColors();
    }
  });

  function restoreColors() {
    const colorBoxes = document.querySelectorAll(".color-box");

    // Restore colors for color boxes
    colorHistory[currentStep].forEach((color, index) => {
      colorBoxes[index].style.backgroundColor = color;
    });

    // Restore colors for SVG elements
    const svgClasses = {
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

    Object.entries(svgClasses).forEach(([colorBoxId, classes]) => {
      const colorBoxIndex = Array.from(colorBoxes).findIndex(
        (box) => box.id === colorBoxId
      );

      classes.fill.forEach((classSelector) => {
        const elements = document.querySelectorAll(classSelector);
        if (elements) {
          elements.forEach((element) => {
            if (element.style.fill !== undefined) {
              element.style.fill = colorHistory[currentStep][colorBoxIndex];
            }
          });
        }
      });

      if (classes.stroke) {
        classes.stroke.forEach((classSelector) => {
          const elements = document.querySelectorAll(classSelector);
          if (elements) {
            elements.forEach((element) => {
              if (element.style.stroke !== undefined) {
                element.style.stroke = colorHistory[currentStep][colorBoxIndex];
              }
            });
          }
        });
      }
    });
  }

  window.undoRedo = {
    addToHistory: function (colors) {
      colorHistory.push([...colors]);
      currentStep = colorHistory.length - 1;
    },
  };
});
