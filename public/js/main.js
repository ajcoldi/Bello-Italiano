const loginBtn = document.getElementById('loginBtn');
const loginDropDown = document.getElementById('login-drop-down');
const hideIcon = document.getElementById('hideIcon');


loginBtn.addEventListener("click", () => {
    loginDropDown.style.display = 'flex';
})
hideIcon.addEventListener("click", () => {
    loginDropDown.style.display = 'none';
})





const pizzaLink = document.getElementById('pizzaLink');
const pastaLink = document.getElementById('pastaLink');

const pizzaMenu = document.getElementById('pizzaMenu');
const pastaMenu = document.getElementById('pastaMenu');

pizzaLink.addEventListener('click', () => {
    pizzaMenu.style.display = 'block';
    pastaMenu.style.display = 'none';
});
pastaLink.addEventListener('click', () => {
    pizzaMenu.style.display = 'none';
    pastaMenu.style.display = 'block';
});