import React, { useState, useEffect } from 'react'
import Price from './price'

export default function HotelRoomPicker(props) {
	const [bestRoom, setBestRoom] = useState()
	const [roomData, setRoomData] = useState([])

	useEffect(() => {
		fetch('http://localhost:8080/nomers')
			.then(res => res.json())
			.then(data => {
				setRoomData(data)
			})
			.catch(err => console.error(err))
	}, [])

	useEffect(() => {
		if (roomData.length > 0) {
			const currentGuest = props.guest === 0 ? 1 : props.guest
			const bestRoom = geneticAlgorithm(roomData, 50, 50, currentGuest)
			setBestRoom(bestRoom)
		}
	}, [roomData, props.guest])

	const calculateFitness = room => {
		return room['number of seats']
	}

	const geneticAlgorithm = (roomData, populationSize, generations, guest) => {
		let bestRoom = null
		const bestFitness = guest == 3 ? 4 : guest
		console.log(bestFitness)
		for (let gen = 0; gen < generations; gen++) {
			for (let i = 0; i < populationSize; i++) {
				const randomRoom = roomData[Math.floor(Math.random() * roomData.length)]
				const fitness = calculateFitness(randomRoom)
				if (bestFitness <= fitness) {
					bestRoom = randomRoom
					if (props.onRoomSelect) {
						props.onRoomSelect(bestRoom.id)
					}
				}
			}
		}
		return bestRoom
	}

	const changeRoom = () => {
		const currentGuest = props.guest === 0 ? 1 : props.guest
		const newRoom = geneticAlgorithm(roomData, 50, 50, currentGuest)
		setBestRoom(newRoom)
		if (props.onRoomSelect) {
			props.onRoomSelect(newRoom.id)
		}
	}

	return (
		<div>
			{bestRoom && (
				<div className='nomers_change_nomer'>
					<div className='change_nomers'>
						<p>{bestRoom['nomers name']}</p>
						<img src={'/img/' + bestRoom['file photo']} alt='' />
						<div>
							<Price
								departureDate={props.departureDate}
								arrivalDate={props.arrivalDate}
								guest={props.guest}
								price={bestRoom.price}
							/>
						</div>
						<p>
							Кількість місць: {bestRoom['number of seats']} Номер кімнати:{' '}
							{bestRoom.id}
						</p>
					</div>
					<button
						type='button'
						className='change_nomer_button'
						onClick={changeRoom}
					>
						Змінити номер
					</button>
				</div>
			)}
		</div>
	)
}
