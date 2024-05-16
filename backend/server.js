const express = require('express')
const mysql = require('mysql')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())

const db = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'amethyst',
})

app.get('/rooms', (req, res) => {
	const sql =
		'SELECT `id`, `room`, `number_of_seats`, `file_photo` FROM `rooms` WHERE `booked`=0'
	db.query(sql, (err, data) => {
		if (err) return res.json(err)
		return res.json(data)
	})
})

app.post('/amethyst', (req, res) => {
	const sql =
		'INSERT INTO `bookings`(`name`, `phone`, `number_of_guest`, `room`, `room_number`, `check_in_date`, `check_out_date`, `total_price`) VALUES (?, ?, ?, ?, ?, ?, ?, ?)'

	const {
		name,
		phone,
		number_of_guests,
		room,
		room_number,
		check_in_date,
		check_out_date,
		total_price,
		email,
	} = req.body

	db.query(
		sql,
		[
			name,
			phone,
			number_of_guests,
			room,
			room_number,
			check_in_date,
			check_out_date,
			total_price,
		],
		(err, data) => {
			if (!err) {
				const client =
					'INSERT INTO `clients`(`name`, `phone`, `email`) VALUES (?, ?, ?)'

				db.query(client, [name, phone, email], (err, data) => {
					if (!err) {
						const num =
							'UPDATE `rooms` SET `number_of_booked` = `number_of_booked` + 1, `booked` = 1 WHERE `id`= ?'

						db.query(num, [room_number], (err, data) => {
							if (err) return res.json(err)
							return res.json(data)
						})
					} else return res.json(err)
				})
			} else return res.json(err)
		}
	)
})

app.listen(8080, () => {
	console.log('listening')
})
