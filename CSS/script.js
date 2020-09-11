const menuToggle = document.querySelector('.toggle_bar input');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function(){
  nav.classList.toggle('slide');
});