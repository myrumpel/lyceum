console.log('Hello world')
import gsap from 'gsap'
const topMenuItems = document.querySelectorAll('.header-nav__list-item')
topMenuItems.forEach(elem => {
	elem.addEventListener('mouseenter', e => {
		gsap.to(elem.firstElementChild, {
			visibility: 'visible',
			opacity: 1,
			scaleY: '100%',
			duration: 0.1,
		})
	})
	elem.addEventListener('mouseleave', e => {
		gsap.to(elem.firstElementChild, {
			visibility: 'hidden',
			opacity: 0,
			scaleY: '0%',
			duration: 0.1,
		})
	})
})
const tl = gsap.timeline()
const inputBox = document.querySelector('.tools-line__input-box')
const searchGlass = document.querySelector('.search')
searchGlass.addEventListener('click', e => {
	tl.to(searchGlass, {
		left: 0,
		ease: 'ease-in-out',
	}).to(inputBox, {
		opacity: 1,
		visibility: 'visible',
	})
})
console.log()
