const u3 = document.querySelector('.header .nav_bar .nav_list .u3');
const mobile = document.querySelector('.header .nav_bar .nav_list ul');
const menu = document.querySelectorAll('.header .nav_bar .nav_list ul li a');
const header = document.querySelector('.header.contain');

u3.addEventListener('click',()=>{
    u3.classList.toggle('active');
    mobile.classList.toggle('active');
})

document.addEventListener('scroll',()=>{
    var scroll_position = window.scrollY;
    if(scroll_position > 300){
        header.style.backgroundColor = '#29323c';
    }
    else{
        header.style.backgroundColor = 'transparent';
    }
})

menu.forEach(item=>{
    item.addEventListener('click',()=>{
        u3.classList.toggle('active');
        mobile.classList.toggle('active');
    })
})