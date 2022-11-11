const menu_toggle = document.querySelector('.menu-toggle');
const cross_toggle = document.querySelector('.cross');
const menu = document.querySelector('.menu');
const menu_item = document.querySelectorAll('.menu ul li');


menu_toggle.addEventListener('click', () => {
    menu.classList.toggle('show_item')
});

cross_toggle.addEventListener('click', () => {
    menu.classList.toggle('show_item');
});

menu_item.forEach(ele => {
    ele.addEventListener('click', () => {
        menu.classList.toggle('show_item');
    })
})






