console.log('Hello world')
import gsap, { Elastic } from 'gsap'
const tl = gsap.timeline()
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
const search = document.querySelector('.search')
search.addEventListener('click', e => {
	tl.fromTo(
		search,
		{
			position: 'absolute',
			right: 0,
		},
		{
			ease: Elastic.easeOut.config(1, 0.3),
			duration: 2
			left: 0,
		}
	)
})
