document.addEventListener("DOMContentLoaded", function () {
  // Get all color boxes
  var colorBoxes = document.querySelectorAll(".color-box");

  // Attach click event listener to each color box
  colorBoxes.forEach(function (box) {
    box.addEventListener("click", function () {
      // Show color picker when a color box is clicked
      showColorPicker(box);
    });
  });

  // Function to show color picker
  function showColorPicker(colorBox) {
    // Create an input type color element
    var colorPicker = document.createElement("input");
    colorPicker.type = "color";

    // Set the initial color of the color picker to match the color box
    colorPicker.value = rgbToHex(getComputedStyle(colorBox).backgroundColor);

    // Attach change event listener to the color picker
    colorPicker.addEventListener("change", function () {
      // Update the background color of the selected color box
      colorBox.style.backgroundColor = colorPicker.value;

      // Get the hexagon corresponding to the clicked color box
      var hexagonId = colorBox.id.replace("color", "hexagon");
      var hexagon = document.querySelector("." + hexagonId);

      // Check if the clicked color box is #color1
      if (colorBox.id === "color1") {
        document.querySelector(".t2-cls-1").style.fill = colorPicker.value;
        document.querySelector(".t2-cls-6").style.fill = colorPicker.value;
        document.querySelector(".t1-cls-61").style.fill = colorPicker.value;
        document.querySelector(".t1-cls-62").style.fill = colorPicker.value;
        document.querySelector(".t3-s2").style.fill = colorPicker.value;
        document.querySelector(".t3-t4").style.fill = colorPicker.value;
        document.querySelector(".t4-p1").style.fill = colorPicker.value;
        document.querySelector(".t5-p1").style.fill = colorPicker.value;
        document.querySelector(".t6-p1").style.fill = colorPicker.value;
        document.querySelector(".t7-p1").style.fill = colorPicker.value;
        document.querySelector(".t8-p1").style.fill = colorPicker.value;
        document.querySelector(".t9-p1").style.fill = colorPicker.value;
        document.querySelector(".t9-st-p1").style.stroke = colorPicker.value;
      } else if (colorBox.id === "color2") {
        document.querySelector(".t1-cls-7").style.fill = colorPicker.value;
        document.querySelector(".t2-cls-2").style.fill = colorPicker.value;
        document.querySelector(".t2-cls-7").style.fill = colorPicker.value;
        document.querySelector(".t3-s0").style.fill = colorPicker.value;
        document.querySelector(".t4-p4").style.fill = colorPicker.value;
        document.querySelector(".t5-p2").style.fill = colorPicker.value;
        document.querySelector(".t6-p2").style.fill = colorPicker.value;
        document.querySelector(".t7-p2").style.fill = colorPicker.value;
        document.querySelector(".t8-p5").style.fill = colorPicker.value;
        document.querySelector(".t9-p2").style.fill = colorPicker.value;
        document.querySelector(".t1-cls-1").style.stroke = colorPicker.value;
        document.querySelector(".t1-cls-3").style.stroke = colorPicker.value;
      } else if (colorBox.id === "color3") {
        document.querySelector(".t2-cls-3").style.fill = colorPicker.value;
        document.querySelector(".t2-cls-3").style.fill = colorPicker.value;
        document.querySelector(".t4-p2").style.fill = colorPicker.value;
        document.querySelector(".t5-p5").style.fill = colorPicker.value;
        document.querySelector(".t6-p3").style.fill = colorPicker.value;
        document.querySelector(".t7-p3").style.fill = colorPicker.value;
        document.querySelector(".t8-p3").style.fill = colorPicker.value;
        document.querySelector(".t9-p3").style.fill = colorPicker.value;
        document.querySelector(".t1-cls-2").style.stroke = colorPicker.value;
      } else if (colorBox.id === "color4") {
        document.querySelector(".t2-cls-4").style.fill = colorPicker.value;
        document.querySelector(".t1-cls-9").style.fill = colorPicker.value;
        document.querySelector(".t3-s1").style.fill = colorPicker.value;
        document.querySelector(".t4-p3").style.fill = colorPicker.value;
        document.querySelector(".t5-p3").style.fill = colorPicker.value;
        document.querySelector(".t6-p4").style.fill = colorPicker.value;
        document.querySelector(".t7-p4").style.fill = colorPicker.value;
        document.querySelector(".t8-p4").style.fill = colorPicker.value;
        document.querySelector(".t9-p4").style.fill = colorPicker.value;
      } else if (colorBox.id === "color5") {
        document.querySelector(".t2-cls-5").style.fill = colorPicker.value;
        document.querySelector(".t1-cls-41").style.fill = colorPicker.value;
        document.querySelector(".t1-cls-42").style.fill = colorPicker.value;
        document.querySelector(".t1-cls-51").style.fill = colorPicker.value;
        document.querySelector(".t1-cls-52").style.fill = colorPicker.value;
        document.querySelector(".t1-cls-53").style.fill = colorPicker.value;
        document.querySelector(".t1-cls-54").style.fill = colorPicker.value;
        document.querySelector(".t1-cls-8").style.fill = colorPicker.value;
        document.querySelector(".t4-p5").style.fill = colorPicker.value;
        document.querySelector(".t5-p4").style.fill = colorPicker.value;
        document.querySelector(".t6-p5").style.fill = colorPicker.value;
        document.querySelector(".t7-p5").style.fill = colorPicker.value;
        document.querySelector(".t8-p2").style.fill = colorPicker.value;
        document.querySelector(".t9-p5").style.fill = colorPicker.value;
        document.querySelector(".t3-s3").style.stroke = colorPicker.value;
        document.querySelector(".t9-st-p5").style.stroke = colorPicker.value;
      }
    });

    // Trigger a click on the color picker to open it
    colorPicker.click();
  }

  // Helper function to convert RGB color to hex
  function rgbToHex(rgb) {
    // Using a canvas element to facilitate color conversion
    var canvas = document.createElement("canvas");
    var context = canvas.getContext("2d");
    context.fillStyle = rgb;
    return context.fillStyle;
  }

  // Wait for the DOM to be ready
  $(document).ready(function () {
    // Initialize the color picker
    $(".color-box").spectrum({
      showPaletteOnly: true,
      showPalette: true,
      hideAfterPaletteSelect: true,
      change: function (color) {
        // Get the background color of the clicked color-box
        var boxId = $(this).attr("id");
        // Set the background color of the clicked color-box
        $("#" + boxId).css("background-color", color.toHexString());
      },
    });
  });
});
