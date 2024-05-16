import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import HotelRoomPicker from './alg'

export default function Form() {
	const [name, setName] = useState('')
	const [active, setActive] = useState(false)
	const [activechange, setActivechange] = useState(false)
	const [activeButton, setActiveButton] = useState(false)

	const [bookings, setBookings] = useState({
		name: '',
		phone: '',
		number_of_guests: '',
		room: '',
		room_number: '',
		check_in_date: '',
		check_out_date: '',
		total_price: '',
		email: '',
	})

	useEffect(() => {
		const check_in_date = new Date(bookings.check_in_date)
		const check_out_date = new Date(bookings.check_out_date)
		const time = check_out_date.getTime() - check_in_date.getTime()
		const isButton = () => {
			if (
				bookings.name !== '' &&
				bookings.phone !== '' &&
				bookings.email !== '' &&
				bookings.check_in_date !== '' &&
				bookings.check_out_date !== '' &&
				time > 0
			) {
				return true
			} else {
				return false
			}
		}
		setActiveButton(isButton())
	}, [bookings])

	const handleChange = event => {
		setBookings({ ...bookings, [event.target.name]: event.target.value })
		if (event.target.name === 'name') setName(event.target.value)
	}

	const changeRoom = (room, roomId, price) => {
		setBookings({
			...bookings,
			room: room,
			room_number: roomId,
			total_price: price,
		})
	}

	const handleSubmit = event => {
		event.preventDefault()
		axios
			.post('http://localhost:8080/Amethyst', bookings)
			.then(res => console.log(bookings))
			.catch(err => console.log(err))
		setActivechange(false)
		setActive(true)
	}

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<div className='booking_block'>
					<label className='booking_text'>Ім'я</label>
					<div className='booking_form'>
						<input
							type='text'
							name='name'
							id='name'
							pattern='[A-Za-zА-Яа-яІіЇїЄє]{2,}'
							placeholder='Максим'
							required
							onChange={handleChange}
						/>
						<span className='validity'></span>
					</div>
				</div>
				<div className='booking_block'>
					<label className='booking_text'>Телефон</label>
					<div className='booking_form'>
						<input
							type='tel'
							name='phone'
							id='phone'
							placeholder='0999999999'
							max='10'
							min='10'
							pattern='[0-9]{10}'
							title='0996661981'
							required
							onChange={handleChange}
						/>
						<span className='validity'></span>
					</div>
				</div>
				<div className='booking_block'>
					<label className='booking_text'>Email</label>
					<div className='booking_form'>
						<input
							type='email'
							name='email'
							id='email'
							placeholder='maksplevako@gmail.com'
							required
							onChange={handleChange}
						/>
						<span className='validity'></span>
					</div>
				</div>
				<br />
				<div className='booking_block'>
					<label className='booking_text'>Заїзд</label>
					<div className='booking_form'>
						<input
							type='date'
							name='check_in_date'
							id='arrival'
							required
							onChange={handleChange}
						/>
						<span className='validity'></span>
					</div>
				</div>
				<div className='booking_block'>
					<label className='booking_text'>Виїзд</label>
					<div className='booking_form'>
						<input
							type='date'
							name='check_out_date'
							id='departure'
							required
							onChange={handleChange}
						/>
						<span className='validity'></span>
					</div>
				</div>
				<div className='booking_block'>
					<label className='booking_text'>Кількість гостей</label>
					<div className='booking_form'>
						<select
							name='number_of_guests'
							id='number'
							required
							onChange={handleChange}
						>
							<option disabled>Виберіть кількість гостей</option>
							<option defaultValue value='1'>
								1
							</option>
							<option value='2'>2</option>
							<option value='3'>3</option>
							<option value='4'>4</option>
						</select>
						<span className='validity'></span>
					</div>
				</div>
				<br />
				<button
					className='change_button'
					onClick={() => setActivechange(true)}
					disabled={!activeButton}
					type='button'
				>
					Обрати номер
				</button>
				<div className={activechange ? 'change_nomer active' : 'change_nomer'}>
					<div className='change_nomer_modal'>
						<button
							className='close_change_nomer'
							onClick={() => setActivechange(false)}
							type='button'
						>
							X
						</button>
						<div className='nomer_change'>
							<HotelRoomPicker
								departureDate={bookings.check_out_date}
								arrivalDate={bookings.check_in_date}
								guest={bookings.number_of_guests}
								onRoomSelect={changeRoom}
							/>
						</div>
						<div className='booking_button'>
							<input
								onClick={() => changeRoom}
								type='submit'
								value='Забронювати'
							/>
						</div>
					</div>
				</div>
			</form>
			<div
				className={active ? 'modal_thx active' : 'modal_thx'}
				onClick={() => setActive(false)}
			>
				<div className='modal_content' onClick={e => e.stopPropagation()}>
					Дякую {name} за бронювання номеру в нашому готелі.
					<br />
					Очікуйте дзвінок від нашого менеджера для підтвердження.
				</div>
			</div>
		</div>
	)
}
