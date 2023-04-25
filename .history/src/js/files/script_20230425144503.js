console.log('Hello world')
import { gsap } from 'gsap'
const topMenuItems = document.querySelectorAll('.header-nav__list-item')
console.log(topMenuItems)
topMenuItems.forEach(elem => {
	elem.addEventListener('mouseenter', e => {
		gsap.to(elem.firstElementChild, {
			opacity: 1,
			scaleY: '100%',
		})
	})
})
