console.log('Hello world')
import { gsap } from 'gsap'
const topMenuItems = document.querySelectorAll('.header-nav__list-item')
topMenuItems.forEach(elem => {
	elem.addEventListener('mouseenter', e => {
		gsap.to(elem, {
			opacity: 1,
			scaleY: '100%',
		})
	})
})
