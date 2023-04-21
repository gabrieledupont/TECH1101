// // Add active class to current navigation link
// let navLinks = document.querySelectorAll("nav ul li a");
// navLinks.forEach(link => {
//   if (link.href === window.location.href) {
//     link.classList.add("active");
//   }
// });

// // Smooth scrolling to section on click
// let scrollLinks = document.querySelectorAll('nav ul li a');
// scrollLinks.forEach(link => {
//   link.addEventListener('click', e => {
//     e.preventDefault();
//     let target = document.querySelector(link.hash);
//     target.scrollIntoView({behavior: 'smooth'});
//   });
// });

// // Change portfolio item on click
// let portfolioItems = document.querySelectorAll('.portfolio-item');
// portfolioItems.forEach(item => {
//   item.addEventListener('click', e => {
//     portfolioItems.forEach(item => item.classList.remove('active'));
//     item.classList.add('active');
//   });
// });
