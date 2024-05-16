import React, { useEffect, useState } from 'react'

export default function Price(props) {
	const { departureDate, arrivalDate, guest, room, onChangePrice } = props
	const [cost, setCost] = useState(null)

	useEffect(() => {
		const newCost = calculateCost(departureDate, arrivalDate, guest, room)
		if (newCost !== cost) {
			setCost(newCost)
			if (onChangePrice) {
				onChangePrice(newCost)
			}
		}
	}, [departureDate, arrivalDate, guest, room, cost, onChangePrice])

	// Функція для обчислення вартості
	const calculateCost = (departureDate, arrivalDate, guest, room) => {
		const departure = new Date(departureDate)
		const arrival = new Date(arrivalDate)
		const time = departure.getTime() - arrival.getTime()
		const day = time / (1000 * 3600 * 24)
		return day * 5000 + guest * 2000 + room * 1000
	}

	return (
		<div>
			<p className='price_text'>Оціночна вартість: {cost}₴</p>
		</div>
	)
}
