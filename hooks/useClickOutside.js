import { useEffect, useRef } from 'react'

const useClickOutside = eventHandler => {
	let eventDOMNode = useRef()

	useEffect(() => {
		const handleUserEvent = event => {
			if (!eventDOMNode.current.contains(event.target)) {
				eventHandler()
			}
		}

		document.addEventListener('mousedown', handleUserEvent)

		return () => {
			document.removeEventListener('mousedown', handleUserEvent)
		}
	})

	return eventDOMNode
}

export default useClickOutside
