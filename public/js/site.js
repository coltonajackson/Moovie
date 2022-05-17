const open_btn = document.querySelector('.open-btn')
const close_btn = document.querySelector('.close-btn')
const nav = document.querySelectorAll('.nav')

open_btn.addEventListener('click', () => {
    nav.forEach(navEl => navEl.classList.add('visible'))
})

close_btn.addEventListener('click', () => {
    nav.forEach(navEl => navEl.classList.remove('visible'))
})

$(document).ready(function() {
    $(".menu-item").hover(function() {
        $(this).removeClass("btn-light");
        $(this).addClass("btn-dark");
    }, function() {
        $(this).removeClass("btn-dark");
        $(this).addClass("btn-light");
    });
    $("#moovie-home").hover(function() {
        $(this).removeClass("btn-transparent text-white");
        $(this).addClass("btn-light");
    }, function() {
        $(this).removeClass("btn-light");
        $(this).addClass("btn-transparent text-white")
    });
});

const starTotal = 5;
var starsOuterDivs = document.querySelectorAll(".stars-outer");

starsOuterDivs.forEach(starsOuterDiv => {
    let ratingDiv = starsOuterDiv.previousSibling.previousSibling;
    let starCount = parseFloat(ratingDiv.innerText);
    const starPerc = starCount * 20;
    const starPercRounded = `${Math.round(starPerc)}%`;
    starsOuterDiv.firstChild.nextSibling.style.width = starPercRounded;
});