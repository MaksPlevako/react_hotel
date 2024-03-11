import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
	return (
		<>
			<header>
				<div className='container'>
					<div className='header'>
						<div className='logo'>
							<h2>LOGO</h2>
						</div>
						<div className='nav'>
							<div className='nav_link'>
								<Link to='/'>Головна</Link>
							</div>
							<div className='nav_link'>
								<Link to='/nomers'>Номери</Link>
							</div>
							<div className='nav_link'>
								<Link to='/'>Бронювання</Link>
							</div>
							<div className='nav_link'>
								<Link to='/poslygi'>Послуги</Link>
							</div>
							<div className='nav_link'>
								<Link to='/contact'>Контакти</Link>
							</div>
						</div>
					</div>
				</div>
			</header>
		</>
	)
}

export default Header
