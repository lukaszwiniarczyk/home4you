const navBtn = document.querySelector('.nav__btn');
const navMobile = document.querySelector('.nav__links');
const navMobileLinks = document.querySelectorAll('.nav__links--link');
const body = document.querySelector('body');
const html = document.querySelector('html');

const carouselBox = document.querySelector('.offer__box')
const btnCheck = document.querySelector('.offer__addons--btn')
const partNumber = document.querySelector('.offer__addons--part-type')


navBtn.addEventListener('click', () => {
	navMobile.classList.toggle('nav__links-active');

	if (navMobile.classList.contains('nav__links-active')) {
		body.style.overflow = 'hidden';
		html.style.overflow = 'hidden';
	} else {
		body.style.overflow = 'visible';
		html.style.overflow = 'visible';
	}
});
navMobileLinks.forEach((item) => {
	item.addEventListener('click', () => {
		navMobile.classList.remove('nav__links-active');
		body.style.overflow = 'visible';
		html.style.overflow = 'visible';
	});
});

btnCheck.addEventListener('click', ()=>{
	carouselBox.classList.toggle('carouselMore')
	if(carouselBox.classList.contains('carouselMore')){
		partNumber.textContent ='2'
	}else{
		partNumber.textContent ='1'
	}
})