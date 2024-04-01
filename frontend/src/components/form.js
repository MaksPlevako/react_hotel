import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Form() {
	const [name, setName] = useState('')
	const [active, setActive] = useState(false)
	const [activechange, setActivechange] = useState(false)
	const [data, setData] = useState([])
	const [img, setImg] = useState([])
	const [currentNum, setCurrentNum] = useState(0)
	const [loading, setLoading] = useState(true)
	const [activeButton, setActiveButton] = useState(false)

	useEffect(() => {
		fetch('http://localhost:8080/nomers')
			.then(res => res.json())
			.then(data => {
				setData(data)
				const photo_arr = data.map(m => m.file_photo)
				setImg(photo_arr)
				setLoading(false)
			})
			.catch(err => console.log(err))
	}, [])

	const [values, setValues] = useState({
		name: '',
		phone: '',
		email: '',
		arrival_date: '',
		departure_date: '',
		number_of_guests: '',
		// nomer: '',
	})

	useEffect(() => {
		const isButton = () => {
			if (
				values.name !== '' &&
				values.phone !== '' &&
				values.email !== '' &&
				values.arrival_date !== '' &&
				values.departure_date !== ''
			) {
				return true
			} else {
				return false
			}
		}
		setActiveButton(isButton())
	}, [values])

	const handleChange = event => {
		setValues({ ...values, [event.target.name]: event.target.value })
		if (event.target.name === 'name') setName(event.target.value)
	}

	const prevNomer = () => {
		setCurrentNum(prevIndex =>
			prevIndex === 0 ? data.length - 1 : prevIndex - 1
		)
	}

	const nextNomer = () => {
		setCurrentNum(prevIndex =>
			prevIndex === data.length - 1 ? 0 : prevIndex + 1
		)
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
			{loading ? (
				<p>Loading...</p>
			) : (
				<>
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
						<br />
						<button
							className='change_button'
							onClick={() => setActivechange(true)}
							disabled={!activeButton}
							type='button'
						>
							Обрати номер
						</button>
						<div
							className={activechange ? 'change_nomer active' : 'change_nomer'}
						>
							<div className='change_nomer_modal'>
								<button
									className='close_change_nomer'
									onClick={() => setActivechange(false)}
								>
									X
								</button>
								<div className='nomer_name'>{data[currentNum].nomers_name}</div>
								<div className='nomer_photo'>
									<button onClick={() => prevNomer()} type='button'>
										Попередній номер
									</button>
									<img src={'/img/' + img[currentNum]} alt='' />
									<button onClick={() => nextNomer()} type='button'>
										Наступний номер
									</button>
								</div>
								<div className='booking_button'>
									<input type='submit' value='Забронювати' />
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
				</>
			)}
		</div>
	)
}
