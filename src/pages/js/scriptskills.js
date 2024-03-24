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

sr.reveal('.icons',{delay:500, origin:'left'});

ScrollReveal().reveal(".sample-cards", {
	duration: 5000,
	move: 0
  });