import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Form() {
	const [name, setName] = React.useState('')
	const [active, setActive] = React.useState(false)

	const [data, setData] = useState([])
	useEffect(() => {
		fetch('http://localhost:8080/nomers')
			.then(res => res.json())
			.then(data => setData(data))
			.catch(err => console.log(err))
	}, [])
	const [values, setValues] = useState({
		name: '',
		phone: '',
		arrival_date: '',
		date_eviction: '',
		number_of_guests: '',
		nomer: '',
	})

	const handleChange = event => {
		setValues({ ...values, [event.target.name]: [event.target.value] })
		if (event.target.name === 'name') setName(event.target.value)
	}

	const handleSubmit = event => {
		event.preventDefault()
		axios
			.post('http://localhost:8080/hotel', values)
			.then(res => console.log(values))
			.catch(err => console.log(err))
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
					<label className='booking_text'>Заїзд</label>
					<div className='booking_form'>
						<input
							type='date'
							name='arrival_date'
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
							name='departure_date'
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
							<option disabled defaultValue>
								Виберіть кількість гостей
							</option>
							<option value='1'>1</option>
							<option value='2'>2</option>
							<option value='3'>3</option>
							<option value='4'>4</option>
							<option value='5'>5</option>
						</select>
						<span className='validity'></span>
					</div>
				</div>
				<div className='booking_block'>
					<label className='booking_text'>Номер</label>
					<div className='booking_form'>
						<select
							name='nomer'
							id='name_nomer'
							required
							onChange={handleChange}
						>
							<option disabled defaultValue>
								Виберіть номер
							</option>
							{data.map(b => (
								<option key={b.id} value={b.id}>
									{b.nomers_name}
								</option>
							))}
						</select>
						<span className='validity'></span>
					</div>
				</div>
				<div className='line'></div>
				<div className='booking_button'>
					<input type='submit' value='Забронювати' />
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
