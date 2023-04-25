console.log('Hello world')
import gsap, { Back } from 'gsap'
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
			ease: Back.easeOut.config(1),
			duration: 1,
			left: 0,
		}
	).to(
		'.tools-line__input-box',
		{
			opacity: 1,
			visibility: 'visible',
		},
		'-=.3'
	)
})
window.addEventListener('click', e => {
	if (
		!e.target.classList.contains('search') &&
		!e.target.classList.contains('tools-line__input-box')
	)
		tl.to(search, {
			position: 'block',
		}).to(
			'.tools-line__input-box',
			{
				opacity: 0,
				visibility: 'hidden',
			},
			'-=.3'
		)
})
