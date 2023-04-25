console.log('Hello world')
import gsap from 'gsap'
// import timeline from 'gsap/gsap-core'
const topMenuItems = document.querySelectorAll('.header-nav__list-item')
// let tl = timeline()
topMenuItems.forEach(elem => {
	elem.addEventListener('mouseenter', e => {
		gsap.to(elem.firstElementChild, {
			opacity: 1,
			scaleY: '100%',
			duration: 0.1,
		})
	})
	elem.addEventListener('mouseleave', e => {
		// gsap.reverse()
		gsap.to(elem.firstElementChild, {
			visibility: visible,
			opacity: 0,
			scaleY: '80%',
			duration: 0.1,
		})
	})
})
