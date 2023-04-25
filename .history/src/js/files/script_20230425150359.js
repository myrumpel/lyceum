console.log('Hello world')
// import gsap from 'gsap'
import { Timeline } from 'gsap/gsap-core'
const topMenuItems = document.querySelectorAll('.header-nav__list-item')
let tl = Timeline()
topMenuItems.forEach(elem => {
	elem.addEventListener('mouseenter', e => {
		tl.to(elem.firstElementChild, {
			opacity: 1,
			scaleY: '100%',
			duration: 0.1,
		})
	})
	elem.addEventListener('mouseleave', e => {
		tl.reverse()
	})
})
