const navbar = () => {
    const burger = document.querySelector('.burger');
    const navlinks = document.querySelector('.navlinks');
    const register = document.querySelector('.register');
    const line1 = document.querySelector('.burger .l-one');
    const line2 = document.querySelector('.burger .l-two');

    burger.addEventListener('click', () => {
        navlinks.classList.toggle('show');
        register.classList.toggle('show');
        line1.classList.toggle('rotate');
        line2.classList.toggle('rotate');
    })
}

const home = () => {
    const slides = document.querySelectorAll('#home .images .slide');
    const up = document.querySelector('#home .buttons .up');
    const down = document.querySelector('#home .buttons .down');

    up.addEventListener('click', () => {
        const current = document.querySelector('.current');
        current.classList.remove('current');
        if(current.previousElementSibling){
            current.previousElementSibling.classList.add('current');
        }
        else{
            slides[slides.length-1].classList.add('current');
        }
    });

    down.addEventListener('click', () => {
        const current = document.querySelector('.current');
        current.classList.remove('current');
        if(current.nextElementSibling){
            current.nextElementSibling.classList.add('current');
        }
        else{
            slides[0].classList.add('current');
        }
    })

}


navbar();
home();



