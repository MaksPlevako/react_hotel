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
	const sql = 'SELECT `id`, `nomers_name` FROM `nomers`'
	db.query(sql, (err, data) => {
		if (err) return res.json(err)
		return res.json(data)
	})
})

app.post('/hotel', (req, res) => {
	const sql =
		'INSERT INTO `clients`(`name`, `phone`, `arrival_date`, `departure_date`, `number_of_guests`, `nomer`) VALUES (?)'

	const num =
		'UPDATE `nomers` SET `number of booked` = `number of booked` + 1 WHERE `id`=(?)'

	const values = [
		req.body.name,
		req.body.phone,
		req.body.arrival_date,
		req.body.departure_date,
		req.body.number_of_guests,
		req.body.nomer,
	]

	db.query(sql, [values], (err, data) => {
		if (err) return res.json(err)
		return res.json(data)
	})
	db.query(num, [values[req.body.nomer]], (err, data) => {
		if (err) return res.json(err)
		return res.json(data)
	})
})

app.listen(8082, () => {
	console.log('listening')
})
