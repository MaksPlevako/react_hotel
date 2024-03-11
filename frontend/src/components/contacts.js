import React from 'react'
import facebook from '../img/facebook.png'
import telegram from '../img/telegram.png'
import instagram from '../img/instagram.png'

function Contacts() {
	return (
		<footer id='contact'>
			<div className='container'>
				<div className='contact'>
					<div className='contacts'>
						<div className='contacts_main_text'>Контакти</div>
						<div className='contacts_sec_text'>
							<a href='https://www.google.com.ua/maps/place/ул.+Набережно-Крещатицкая,+3,+Киев,+02000/@50.4611825,30.5239672,17z/data=!3m1!4b1!4m5!3m4!1s0x40d4ce471d281d2f:0xcfa5316fbb7b3543!8m2!3d50.4611797!4d30.5257944?hl=ru'>
								вул. Набережно-Хрещатицька 3, Київ
								<br />
							</a>
							Тел.: +38 (099) 999 9999
							<br />
							Факс: +38 (099) 999 9999 <br />
							E-mail: hotel.com
						</div>
					</div>
					<div className='follow_us'>
						<div className='contacts_main_text'>Слідкуйте за нами</div>
						<div className='follow_us_img'>
							<a href='https://www.facebook.com/FairmontGrandHotelKyiv/?locale=uk_UA'>
								<img src={facebook} alt='' />
							</a>
							<a href='https://www.instagram.com/fairmontgrandhotelkyiv/'>
								<img src={instagram} alt='' />
							</a>
							<a href='/'>
								<img src={telegram} alt='' />
							</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Contacts
