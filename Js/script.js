let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('ul');
menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};

const sr = ScrollReveal (
    {
        distance: '40px',
        duration: 2050,
        delay: 200,
        reset: true
    }
);

sr.reveal( '.main-image' , {origin: 'top'} );
sr.reveal( '.main-text' , {origin: 'left'} );
