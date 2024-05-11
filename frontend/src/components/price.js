import React from 'react'

export default function Price(props) {
	const departureDate = new Date(props.departureDate)
	const arrivalDate = new Date(props.arrivalDate)
	const guest = props.guest
	const price = props.price

	const time = departureDate.getTime() - arrivalDate.getTime()
	const day = time / (1000 * 3600 * 24)

	const cost = day * 5000 + guest * 1500 + price

	return (
		<div>
			<p className='price_text'>Оціночна вартіть: {cost}₴</p>
		</div>
	)
}
