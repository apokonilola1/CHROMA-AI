document.addEventListener("DOMContentLoaded", function () {
  // Get all category buttons and SVG elements
  const categoryButtons = document.querySelectorAll(".category");
  const svgElements = document.querySelectorAll("svg");
  const templateBox = document.querySelector(".template-box");

  // Add click event listener to each category button
  categoryButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Reset styles for all buttons
      categoryButtons.forEach((btn) => {
        btn.style.color = "#000000";
        btn.style.backgroundColor = "#f1e7dd";
      });

      // Set styles for the clicked button
      button.style.color = "#f0f0f0";
      button.style.backgroundColor = "#cfb79e";

      const categoryId = button.id;

      // Show/hide SVG elements based on the selected category
      svgElements.forEach((svg) => {
        if (categoryId === "all" || svg.classList.contains(categoryId)) {
          svg.style.display = "inline-block";
        } else {
          svg.style.display = "none";
        }
      });

      // Center the displayed SVGs horizontally
      if (categoryId !== "all") {
        templateBox.style.textAlign = "center";
      } else {
        templateBox.style.textAlign = ""; // Reset to default if "All" is selected
      }
    });
  });
});

// const categories = document.querySelectorAll(".category");
// const templateBoxes = document.querySelectorAll(".template-box");

// function resetStyles() {
//   categories.forEach((cat) => {
//     cat.style.color = "black";
//     cat.style.backgroundColor = "#f1e7dd";
//   });
// }

// function hideAllTemplateBoxes() {
//   templateBoxes.forEach((box) => {
//     box.style.display = "none";
//   });
// }

// function showSelectedCategory(category) {
//   category.style.color = "white";
//   category.style.backgroundColor = "#cfb79e";
//   const className = category.id.toLowerCase();
//   const selectedTemplates = document.querySelectorAll(`.${className}`);

//   selectedTemplates.forEach((template) => {
//     template.style.display = "inline-block";
//   });
// }

// function showBrandingTemplates() {
//   resetStyles();
//   document.querySelectorAll(".template-box").forEach((box) => {
//     box.style.display = "none";
//   });

//   document.querySelectorAll(".t1").forEach((box) => {
//     box.style.display = "inline-block";
//   });
// }

// categories.forEach((category) => {
//   category.addEventListener("click", function () {
//     resetStyles();
//     hideAllTemplateBoxes();

//     if (category.textContent === "All Designs") {
//       resetStyles();
//       hideAllTemplateBoxes();
//       templateBoxes.forEach((box) => {
//         box.style.display = "inline-block";
//       });
//     } else {
//       showSelectedCategory(category);
//     }

//     if (category.id === "Branding") {
//       showBrandingTemplates();
//     }
//   });
// });

// if (category.textContent === "Illustration") {
//   // Handle Illustration category
//   category.style.color = "white";
//   category.style.backgroundColor = "#625f5f";
//   document.querySelectorAll(".t3, .t5").forEach((box) => {
//     box.style.display = "inline-block";
//   });
// }
