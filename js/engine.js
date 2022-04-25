window.addEventListener('load', () => {
    setTimeout(() => {
        let preloader = document.getElementById('preloader');
        preloader.classList.add('hidden');
    }, 1000);
})
var words = ['Electrical Engineer','Frontend Developer', 'UX Designer', 'Tech enthusiast']
var typewriter = document.getElementById('typewriter')
let text = '';
let index = 0;
let wordIndex = 0;
let typing = true;
function type() {
    if (wordIndex < words[index].length) {
        if (typewriter.classList.contains("no-typing")) typewriter.classList.remove("no-typing");
        typewriter.textContent += words[index].charAt(wordIndex);
        wordIndex++;
        setTimeout(type, 200);
    }
    else {
        typewriter.classList.add("no-typing");
        setTimeout(erase, 2000);
    }
}
function erase() {
    if (wordIndex > 0) {
        if (typewriter.classList.contains("no-typing")) typewriter.classList.remove("no-typing");
        typewriter.textContent = words[index].substring(0, --wordIndex);
        setTimeout(erase, 50);
    }
    else {
        typewriter.classList.add("no-typing");
        index++;
        if (index >= words.length) index = 0;
        setTimeout(type, 1200);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    if(words.length) setTimeout(type, 300);
});
window.addEventListener('scroll', () => {
    let navbar = document.querySelector('nav');
    navbar.classList.toggle('bg-nav', window.scrollY > 300);
})
let themeBtn = document.getElementById('theme');
themeBtn.addEventListener('click', () => {
    let html = document.querySelector('html');
    html.classList.toggle('dark');
})
let menu = document.getElementById('menu');
let cross = document.getElementById('close');
let nav = document.getElementById('navigation');
function dontApply() {
    nav.classList.remove('max-md:dropdown');
    nav.classList.remove('bg-nav')
}
dontApply();
menu.addEventListener('click', () => {
    menu.classList.add('hidden');
    cross.classList.remove('hidden');
    nav.classList.toggle('hidden');
    nav.classList.add('max-md:dropdown');
})
cross.addEventListener('click', () => {
    menu.classList.remove('hidden');
    cross.classList.add('hidden');
    nav.classList.toggle('hidden');
    nav.classList.remove('max-md:dropdown');
})

let surname = document.querySelector('.animate-color');
function color() {
    surname.classList.remove('after:w-full');
    surname.classList.add('after:w-0');
}
setTimeout(color, 3000);
