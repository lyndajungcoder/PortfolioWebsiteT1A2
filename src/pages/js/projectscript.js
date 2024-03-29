let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navlist.classList.toggle('open');
};

const sr = ScrollReveal ({
	distance: '10px',
	duration: 1000,
	delay: 450,
	reset: true
});

sr.reveal('.section',{delay:500, origin:'left'});
sr.reveal('.heading1',{delay:500, origin:'left'});
sr.reveal('.portfolioimage',{delay:400, origin:'left'});
sr.reveal('.portfolioimage .text',{delay:600, origin:'bottom'});

ScrollReveal().reveal(".projectcards", {
	duration: 5000,
	move: 0
});