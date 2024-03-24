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

sr.reveal('.input-box',{delay:800, origin:'bottom'});
sr.reveal('.input-group-2',{delay:800, origin:'bottom'});
sr.reveal('.heading',{delay:500, origin:'left'});
sr.reveal('.icons',{delay:300, origin:'top'});
