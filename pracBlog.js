

function toggle() {
    let toggleActive = document.querySelector('.menu');
    let toggle = document.querySelector('.toggle');

    toggleActive.classList.toggle('activeMenu');

    toggle.classList.toggle('toggleLine');
}

$(window).scroll(function(){
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 550);
});


