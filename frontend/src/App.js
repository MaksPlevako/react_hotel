import './style/App.css'
import React from 'react'
import Header from './components/header'
import Contacts from './components/contacts'
import HomePage from './pages/HomePage'
import NomersPage from './pages/NomersPage'
import { Routes, Route } from 'react-router-dom'
import PoslygiPage from './pages/PoslygiPage'
import ContactPage from './pages/ContactPage'

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/nomers' element={<NomersPage />} />
				<Route path='/poslygi' element={<PoslygiPage />} />
				<Route path='/contact' element={<ContactPage />} />
				<Route path='*' element={<HomePage />} />
			</Routes>
			<Contacts />
		</>
	)
}

export default App
