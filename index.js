const navbar = () => {
    const nav = document.querySelector('nav');
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

    window.addEventListener('scroll', () => {
        nav.classList.add('sticky');
        setTimeout( () => {
            nav.classList.remove('sticky');
        }, 2000);
    });
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


const services = () => {
    const service = document.querySelector('#services .services-content');
    const trending = document.querySelector('.trending .trending-content');
    const women = document.querySelector('.women .women-content');
    const faq = document.querySelector('.faq-content');
    const subscribe = document.querySelector('.subscribe-content');

    const footer = document.querySelector('footer');
    
    
    window.addEventListener('scroll', () => {
        const y = window.scrollY;
        if (y > service.offsetTop/3) {
            service.classList.add('appear');
        }
        if (y > trending.offsetTop/1.6){
            trending.classList.add('appear');
        }
        if (y > women.offsetTop/1.3){
            women.classList.add('appear');
        }
        if (y > faq.offsetTop/1.2){
            faq.classList.add('appear');
        }
        if (y > subscribe.offsetTop/1.2){
            subscribe.classList.add('appear');
        }
        if (y > footer.offsetTop/1.1){
            footer.classList.add('appear');
        }

        
    })
}

const faq = () => {
    const accbtns = document.querySelectorAll('.accbtn');
    accbtns.forEach(accbtn => {
        accbtn.addEventListener('click', () => {

            accbtn.classList.toggle('active');
            const paragraph = accbtn.nextElementSibling;
            if(paragraph.style.maxHeight){
                paragraph.style.maxHeight = null;
            }
            else{
                paragraph.style.maxHeight = paragraph.scrollHeight + 'px';
            }
            
        })
    })
}



navbar();
home();
services();
faq();




