// window.addEventListener('scroll', function myfunction() {
//   // Get the navbar element
//   const nav = document.querySelector('.navbar');

//   // Check if the user has scrolled past the top of the page
//   if (window.scrollY > 0) {
//     // Add the shadow class to the navbar
//     nav.classList.add('shadow');
//   } else {
//     // Remove the shadow class from the navbar
//     nav.classList.remove('shadow');
//   }
// });

let result = document.getElementById("GFG");
 
function changeColor(color) {
    document.body.style.background = color;
}

function myFunc() {
    changeColor('yellow');
    result.innerHTML = "Background Color changed";
    
} 