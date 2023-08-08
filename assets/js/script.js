/*==============CONST VARIABLES================*/
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');
const navLink = document.querySelectorAll('.nav__link');
const header = document.getElementById('header');

/*=================== SHOW MENU IN MOBILE VIEW =================*/

/*========MENU SHOW========*/
//Validate if Nav Toggle symbol exists
if (navToggle) {
	navToggle.addEventListener('click', () => {
		navMenu.classList.add('show-menu');
	});
}

/*========MENU HIDDEN========*/
//Validate if Nav Close symbol exists
if (navClose) {
	navClose.addEventListener('click', () => {
		navMenu.classList.remove('show-menu');
	});
}

/*===REMOVE MENU from MOBILE VIEW WHEN CLICK LINK===*/

function linkAction() {
	navMenu.classList.remove('show-menu');
}

navLink.forEach((n) => n.addEventListener('click', linkAction));

/* =================== CHANGE BACKGROUND HEADER =================== */
function scrollHeader() {
	if (this.scrollY >= 80) header.classList.add('scroll-header');
	else header.classList.remove('scroll-header');
}

window.addEventListener('scroll', scrollHeader);
