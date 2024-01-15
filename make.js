document.addEventListener("DOMContentLoaded", function () {
  const categories = document.querySelectorAll(".category");
  const templateBoxes = document.querySelectorAll(".template-box");

  categories.forEach((category) => {
    category.addEventListener("click", function () {
      // Reset styles for all categories
      categories.forEach((cat) => {
        cat.style.color = "black";
        cat.style.backgroundColor = "#949494";
      });

      // Hide all template boxes
      templateBoxes.forEach((box) => {
        box.style.display = "none";
      });

      if (category.textContent === "All Designs") {
        categories.forEach((cat) => {
          cat.style.color = "white";
          cat.style.backgroundColor = "#625f5f";
        });
        templateBoxes.forEach((box) => {
          box.style.display = "inline-block";
        });
      } else {
        // Show the selected category
        category.style.color = "white";
        category.style.backgroundColor = "#625f5f";
        const className = category.textContent.toLowerCase(); // Convert category name to lowercase
        const selectedTemplates = document.querySelectorAll(`.${className}`);

        selectedTemplates.forEach((template) => {
          template.style.display = "inline-block";
        });
      }

      // if (category.textContent === "Branding") {
      //   // Handle Branding category
      //   category.style.color = "white";
      //   category.style.backgroundColor = "#625f5f";
      //   document.querySelectorAll(".t1, .t6").forEach((box) => {
      //     box.style.display = "inline-block";
      //   });
      // }

      // if (category.textContent === "Illustration") {
      //   // Handle Illustration category
      //   category.style.color = "white";
      //   category.style.backgroundColor = "#625f5f";
      //   document.querySelectorAll(".t3, .t5").forEach((box) => {
      //     box.style.display = "inline-block";
      //   });
      // }

      // if (category.textContent === "Mobile/Web UI") {
      //   // Handle Mobile/Web UI category
      //   category.style.color = "white";
      //   category.style.backgroundColor = "#625f5f";
      //   document.querySelectorAll(".t2").forEach((box) => {
      //     box.style.display = "inline-block";
      //   });
      // }

      // if (category.textContent === "Pattern") {
      //   // Handle Pattern category
      //   category.style.color = "white";
      //   category.style.backgroundColor = "#625f5f";
      //   document.querySelectorAll(".t1, .t4").forEach((box) => {
      //     box.style.display = "inline-block";
      //   });
      // }

      // if (category.textContent === "Typography") {
      //   // Handle Typography category
      //   category.style.color = "white";
      //   category.style.backgroundColor = "#625f5f";
      //   document.querySelectorAll(".t2, .t3").forEach((box) => {
      //     box.style.display = "inline-block";
      //   });
      // }
    });
  });
});
