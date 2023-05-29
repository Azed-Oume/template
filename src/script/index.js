// const dropdown = document.getElementById('dropdown');

// const toggleDropdown = () => {
//   dropdown.classList.toggle('show');
// };

// document.addEventListener('click', (event) => {
//   if (!event.target.matches('.dropbtn')) {
//     dropdown.classList.remove('show');
//   }
// });

// function showdropdown() {
//   const screenWidth = window.innerWidth;
//   const breakpoint = 768; // Modifier cette valeur en fonction de votre point de rupture souhaité

//   if (screenWidth < breakpoint) {
//     var dropdown = document.getElementById("dropdown");
//     if (dropdown.style.display === "" || dropdown.style.display === "none") {
//       dropdown.style.display = "block";
//     } else {
//       dropdown.style.display = "none";
//     }
//   }
// }

function showdropdown() {
  const screenWidth = window.innerWidth;
  const breakpoint = 768; // Modifier cette valeur en fonction de votre point de rupture souhaité

  if (screenWidth < breakpoint) {
    var dropdown = document.querySelector(".dropdown__content");
    if (dropdown.style.display === "" || dropdown.style.display === "none") {
      dropdown.style.display = "block";
    } else {
      dropdown.style.display = "none";
    }
  }
}



