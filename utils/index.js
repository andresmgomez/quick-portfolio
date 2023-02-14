export const setActiveSection = value => {
	const sections = document.querySelectorAll('.section-area')
	sections.forEach(section => {
		let id = section.getAttribute('id')
		if (id == value) {
			section.className = 'section-area active wow animated fadeInUp'
		} else {
			section.className = 'section-area hidden animated'
		}
	})
}

export const setActivePage = (currentPage, activePage) => {
	return currentPage === activePage ? 'active' : ''
}
