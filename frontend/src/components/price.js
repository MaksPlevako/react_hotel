import React from 'react'

export default function Price(props) {
	const departureDate = new Date(props.departureDate)
	const arrivalDate = new Date(props.arrivalDate)
	const guest = props.guest
	const nomer = props.nomer

	const time = departureDate.getTime() - arrivalDate.getTime()
	const day = time / (1000 * 3600 * 24)

	const price = day * 5000 + guest * 1500 + nomer * 10000

	return (
		<>
			<p className='price_text'>Оціночна вартіть: {price}₴</p>
		</>
	)
}
