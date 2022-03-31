const toggleBtn = document.querySeclector('.navbar_toogleBtn');
const menu = document.querySeclector('.navbar_menu');
const icons = document.querySeclector('.navbar_icons');

toggleBtn.addEventListener('click'){
  menu.classList.toggle('active');
  icons.classList.toggle('active');
}
