const searchEl = document.querySelector('.search')
const buttonEl = document.querySelector('.btn')
const input = document.querySelector('input')

buttonEl.addEventListener('click', () => {
	searchEl.classList.toggle('active')
	input.focus()
})
