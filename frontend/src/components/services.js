import React from 'react'
import cam from '../img/services_cam.png'
import park from '../img/services_park.png'
import buis from '../img/services_buis.png'
import rest from '../img/services_rest.png'
import feat from '../img/services_feat.png'
import game from '../img/services_game.png'
import spa from '../img/services_spa.png'

function Services() {
	return (
		<section id='services'>
			<div className='container'>
				<div className='services'>
					<div className='services_text_main'>Послуги</div>
					<div className='services_view'>
						<div className='servicesss'>
							<div className='services_img'>
								<img src={cam} alt='' />
							</div>
							<div className='services_text'>Камери зберігання</div>
						</div>
						<div className='servicesss'>
							<div className='services_img'>
								<img src={park} alt='' />
							</div>
							<div className='services_text'>Безкоштовна парковка</div>
						</div>
						<div className='servicesss'>
							<div className='services_img'>
								<img src={buis} alt='' />
							</div>
							<div className='services_text'>Бізнес зустрічі</div>
						</div>
						<div className='servicesss'>
							<div className='services_img'>
								<img src={rest} alt='' />
							</div>
							<div className='services_text'>Ресторан та кафе</div>
						</div>
						<div className='servicesss'>
							<div className='services_img'>
								<img src={feat} alt='' />
							</div>
							<div className='services_text'>Фітнес зал</div>
						</div>
						<div className='servicesss'>
							<div className='services_img'>
								<img src={game} alt='' />
							</div>
							<div className='services_text'>Більярд</div>
						</div>
						<div className='servicesss'>
							<div className='services_img'>
								<img src={spa} alt='' />
							</div>
							<div className='services_text'>Спа-салон</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Services
