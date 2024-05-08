import React from 'react'
import Form from './form'

function Home() {
	return (
		<section id='home'>
			<div className='container'>
				<div className='home'>
					<div className='home_back'>
						<div className='home_text'>
							Ласкаво просимо в <br /> "Amethyst"
						</div>
						<div className='booking'>
							<Form />
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Home
