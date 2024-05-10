import React, { useState, useEffect } from 'react'
import Price from './price'

export default function HotelRoomPicker(props) {
	const [bestRoom, setBestRoom] = useState(null)
	const [roomData, setRoomData] = useState([])

	useEffect(() => {
		// Отримання даних про номери готелю
		fetch('http://localhost:8080/nomers')
			.then(res => res.json())
			.then(data => {
				setRoomData(data)
			})
			.catch(err => console.error(err))
	}, [])

	useEffect(() => {
		// Перевірка, чи дані про номери готелю завантажені
		if (roomData.length > 0) {
			// Запуск генетичного алгоритму
			const bestRoom = geneticAlgorithm(roomData, 50, 5)
			setBestRoom(bestRoom)
		}
	}, [roomData])

	// Функція придатності (fitness function)
	const calculateFitness = room => {
		const guest = props.guest
		console.log(guest)
		return (room['number of seats'] * room.price) / guest
	}

	// Генетичний алгоритм для пошуку найкращого номера
	const geneticAlgorithm = (roomData, populationSize, generations) => {
		let bestRoom = null
		let bestFitness = null
		// Повторення для кожного покоління
		for (let gen = 0; gen < generations; gen++) {
			// Випадково обираємо номери з поточної популяції та обчислюємо їх придатність
			for (let i = 0; i < populationSize; i++) {
				const randomRoom = roomData[Math.floor(Math.random() * roomData.length)]
				const fitness = calculateFitness(randomRoom)
				if (fitness > bestFitness) {
					bestFitness = fitness
					bestRoom = randomRoom
				}
			}
		}
		return bestRoom
	}

	// Функція для зміни номера по натисканню кнопки
	const changeRoom = () => {
		const newRoom = geneticAlgorithm(roomData, 50, 5)
		setBestRoom(newRoom)
	}

	return (
		<div>
			<button type='button' onClick={changeRoom}>
				Змінити номер
			</button>
			{bestRoom && (
				<div>
					<p>
						Назва: {bestRoom['nomers name']} Номер кімнати: {bestRoom.id}
					</p>
					<img src={'/img/' + bestRoom['file photo']} alt='' />
					<p>
						<Price
							departureDate={props.departureDate}
							arrivalDate={props.arrivalDate}
							guest={props.guest}
							price={bestRoom.price}
						/>
					</p>
					<p>Кількість місць: {bestRoom['number of seats']}</p>
					{/* Додайте інші дані про номер, які вам потрібні */}
				</div>
			)}
		</div>
	)
}
