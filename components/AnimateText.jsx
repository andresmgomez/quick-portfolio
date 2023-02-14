import { useState, useEffect } from 'react'

function AnimateText() {
	const textEffect = {
		roles: ['Front-end', 'Back-end', 'Full-stack'],
	}

	const [rotateText, setRotateText] = useState(0)

	useEffect(() => {
		const lastRole = textEffect.roles.length - 1
		const delayEffect = setInterval(() => {
			setRotateText(rotateText < lastRole ? rotateText + 1 : 0)
		}, 5000)

		return () => clearInterval(delayEffect)
	}, [rotateText])

	return (
		<span className='display-text rotate'>
			<span className='my-roles'>
				{textEffect.roles.map((role, index) => {
					return (
						<p
							key={index}
							className={rotateText === index ? 'is-visible' : 'is-hidden'}
						>
							{role}
						</p>
					)
				})}
			</span>
			<span className='suffix pl-2'>Developer</span>
		</span>
	)
}

export default AnimateText
