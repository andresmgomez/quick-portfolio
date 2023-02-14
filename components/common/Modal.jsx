import useClickOutside from '@/hooks/useClickOutside'

function Modal({ openModal, closeModal, children }) {
	let pageEvent = useClickOutside(() => {
		if (open) {
			close()
		}
	})
	return (
		<>
			<div className={`popup-modal ${openModal ? 'opened' : ''}`}>
				<div className='modal-box' ref={pageEvent}>
					<div className='modal-close'>
						<a href='#' onClick={() => closeModal()}>
							<i className='icon-cancel' />
						</a>
					</div>
					<div className='modal-content'>{children}</div>
				</div>
			</div>
		</>
	)
}

export default Modal
