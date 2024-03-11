import React from 'react'
import nomer6 from '../img/nomer6.png'

function Nomer6() {
	return (
		<>
			<section id='nomers_2'>
				<div className='container'>
					<div className='nomerses_2'>
						<span>Президентський номер</span>
						<div className='nomer_2'>
							<img src={nomer6} alt='' />
							<div className='nomer_block_2'>
								<div className='nomer_text'>
									<h2>Площа номера</h2>
									166-166 кв. м/1787-1787 кв. футів
									<h2>Розмір ліжка</h2>
									Одна двуспальная кровать (размера 2х2)
									<h2>Вид із номеру</h2>
									Панорамний вид на Дніпро Зображення вище наведено як приклад
									категорії номера. Насправді номери можуть відрізнятися від
									зображених на фотографіях. <hr />
									<div className='default'>
										<h2>Стандартні зручності та послуги</h2>
										Кондиціонер з індивідуальним клімат-контролем РК-телевізор
										HD діагоналлю 42 дюйми Кавоварка з асортиментом кави
										Бездротовий та кабельний високошвидкісний доrступ до
										Інтернету Сейф для ноутбука
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default Nomer6
