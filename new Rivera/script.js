document.addEventListener("DOMContentLoaded", function () {
  const search = document.querySelector(".search-box input");
  const imagesContainer = document.querySelector(".images");

  if (!search || !imagesContainer) {
      console.error("Search input or images container not found");
      return;
  }

  const cars = [
    { name: "Ford Mustang", image: "/Photos/mustang grey.jpg" },
    { name: "Corvette", image: "/Photos/Corvette.jpg" },
    { name: "Corvette", image: "/Photos/Corvette2.jpg" },
    { name: "Corvette", image: "/Photos/corvettePaint.jpg" },
    { name: "Mini Cooper", image: "/Photos/MiniCoop.jpg" },
    { name: "Mini Cooper", image: "/Photos/Minicoop2.jpg" },
    { name: "Ford Mustang", image: "/Photos/MustangWhite.jpg" },
    { name: "Mercedes-Benz C63", image: "/Photos/c63.jpg" },
    { name: "Toyota Highlander", image: "/Photos/RedCar.jpg" },
    { name: "Toyota 4runner", image: "/Photos/4runner.1.jpg" },
    { name: "Toyota 4runner", image: "/Photos/4runner.2.jpg" },
    { name: "Toyota 4runner", image: "/Photos/4runner.3.jpg" },
    { name: "Toyota rav4", image: "/Photos/2022rav4.jpg" },
    { name: "Toyota rav4 DMG", image: "/Photos/rav4.jpg" },
    { name: "Toyota Highlnader", image: "/Photos/highlander1.jpg" },
    { name: "Toyota Highlnader", image: "/Photos/highlander2.jpg" },
    { name: "Toyota Highlnader", image: "/Photos/highlander3.jpg" },
    { name: "Toyota Highlnader DMG", image: "/Photos/highlanderdmg1.jpg" },
    { name: "Toyota Highlnader DMG", image: "/Photos/highlanderdmg2.jpg" },
    { name: "Toyota Highlnader DMG", image: "/Photos/highlanderdmg3.jpg" },
    { name: "Lexus ES350", image: "/Photos/lexusES350.1.jpg" },
    { name: "Lexus ES350", image: "/Photos/lexusES350.2.jpg" },
    { name: "Lexus ES350", image: "/Photos/lexusES350.3.jpg" },
    { name: "Mercedes-Benz SLK230", image: "/Photos/slk230.jpg" },
    { name: "Mercedes-Benz SLK230 DMG", image: "/Photos/slk230dmg.jpg" },


    // Add more car objects as needed
];

  // Function to create an image box HTML element
  function createImageBox(car) {
      const imageBox = document.createElement("div");
      imageBox.classList.add("image-box");
      imageBox.dataset.name = car.name.toLowerCase();

      const img = document.createElement("img");
      img.src = car.image;
      img.alt = car.name;
      imageBox.appendChild(img);

      const h6 = document.createElement("h6");
      h6.textContent = car.name;
      imageBox.appendChild(h6);

      return imageBox;
  }

  // Populate the initial gallery
  cars.forEach((car) => {
      const imageBox = createImageBox(car);
      imagesContainer.appendChild(imageBox);
  });

  // Event listener for search input
  search.addEventListener("input", () => {
      let searchValue = search.value.trim().toLowerCase();

      imagesContainer.innerHTML = ""; // Clear existing images

      cars.forEach((car) => {
          if (car.name.toLowerCase().includes(searchValue)) {
              const imageBox = createImageBox(car);
              imagesContainer.appendChild(imageBox);
          }
      });
  });

  // Handle Enter key press
  search.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
          e.preventDefault(); // Prevent form submission
          search.blur(); // Unfocus the input to hide the keyboard on mobile devices
      }
  });
});


document.addEventListener('DOMContentLoaded', function () {
  const selectElement = (element) => document.querySelector(element);

  const mobileMenu = selectElement('.mobile-menu');
  const header = selectElement('header');
  const languageToggle = selectElement('#languageToggle');

  mobileMenu.addEventListener('click', () => {
      header.classList.toggle('active');
  });

  // Add event listener to each navigation link
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
      link.addEventListener('click', () => {
          // Close the menu when a link is clicked
          header.classList.remove('active');
      });
  });

  // Add event listener to the language toggle button
  if (languageToggle) {
      languageToggle.addEventListener('click', () => {
          // Close the menu when the language is toggled
          header.classList.remove('active');
      });
  }
});


document.addEventListener("DOMContentLoaded", function () {
  const languageToggle = document.getElementById("languageToggle");

  // Initial language setting
  let isEnglish = false;

  // Select elements for English and Spanish content
  const englishElements = document.querySelectorAll(".english");
  const spanishElements = document.querySelectorAll(".spanish");

  // Function to toggle between English and Spanish
  function toggleLanguage() {
      // Toggle the visibility of English and Spanish elements
      englishElements.forEach((element) => {
          element.style.display = isEnglish ? "block" : "none";
      });

      spanishElements.forEach((element) => {
          element.style.display = isEnglish ? "none" : "block";
      });

      // Toggle the language flag
      isEnglish = !isEnglish;
  }

  // Add event listener to the language toggle button
  if (languageToggle) {
      languageToggle.addEventListener("click", toggleLanguage);
  }
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));



const observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('side');
            observer2.unobserve(entry.target);
        }
    });
});

const sideElements = document.querySelectorAll('.notside');
sideElements.forEach((el) => observer2.observe(el));