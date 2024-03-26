const express = require('express')
const mysql = require('mysql')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())

const db = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'root',
	database: 'hotel',
})

app.get('/nomers', (req, res) => {
	const sql = 'SELECT * FROM `nomers` ORDER BY `number of booked` ASC, `id` ASC'
	db.query(sql, (err, data) => {
		if (err) return res.json(err)
		return res.json(data)
	})
})

app.post('/hotel', (req, res) => {
	const sql =
		'INSERT INTO `clients`(`name`, `phone`, `arrival_date`, `departure_date`, `number_of_guests`, `nomer`) VALUES (?)'

	const values = [
		req.body.name,
		req.body.phone,
		req.body.arrival_date,
		req.body.departure_date,
		req.body.number_of_guests,
		req.body.nomer,
	]

	db.query(sql, [values], (err, data) => {
		if (err) {
			// Если произошла ошибка при добавлении клиента, вернуть ее
			return res.json(err)
		} else {
			// Если клиент успешно добавлен, выполнить запрос на обновление количества забронированных номеров
			const num =
				'UPDATE `nomers` SET `number of booked` = `number of booked` + 1 WHERE `id`= ?'

			// Выполнение запроса на обновление количества забронированных номеров
			db.query(num, [req.body.nomer], (err, data) => {
				if (err) {
					// Если произошла ошибка при обновлении количества забронированных номеров, вернуть ее
					return res.json(err)
				} else {
					// Если оба запроса выполнены успешно, вернуть данные
					return res.json(data)
				}
			})
		}
	})
})

app.listen(8080, () => {
	console.log('listening')
})
