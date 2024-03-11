import React from 'react'
import nomer2 from '../img/nomer2.png'

function Nomer2() {
	return (
		<>
			<section id='nomers_2'>
				<div className='container'>
					<div className='nomerses_2'>
						<span>Стандартний номер</span>
						<div className='nomer_2'>
							<img src={nomer2} alt='' />
							<div className='nomer_block_2'>
								<div className='nomer_text'>
									<h2>Площа номера</h2>
									40-53 кв. м/431-570 кв. футів
									<h2>Розмір ліжка</h2>
									Одне двоспальне ліжко (розміру 2х2) або односпальне ліжко
									<h2>Вид із номеру</h2>
									Категорія з чудовим видом на річку. Насправді номери можуть
									відрізнятися від зображених на фотографіях. <hr />
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

export default Nomer2
