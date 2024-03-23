let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navlist.classList.toggle('open');
};

const sr = ScrollReveal ({
	distance: '10px',
	duration: 1000,
	delay: 500,
	reset: true
});

sr.reveal('.hero-text',{delay:250, origin:'top'});
sr.reveal('.hero-img',{delay:550, origin:'right'});
sr.reveal('.icons',{delay:500, origin:'left'});
sr.reveal('.scroll',{delay:500, origin:'left'});
sr.reveal('.propertyme-text',{delay:200, origin:'top'});
sr.reveal('.hobby-text',{delay:200, origin:'top'});
