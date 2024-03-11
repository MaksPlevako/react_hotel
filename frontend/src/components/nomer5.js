import React from 'react'
import nomer5 from '../img/nomer5.png'

function Nomer5() {
	return (
		<>
			<section id='nomers'>
				<div className='container'>
					<div className='nomerses'>
						<span>Преміум номер</span>
						<div className='nomer'>
							<div className='nomer_block'>
								<div className='nomer_text'>
									<h2>Площа номера</h2>
									45-65 кв. м/484-700 кв. футів
									<h2>Розмір ліжка</h2>
									Одне велике ліжко king-size або два ліжка queen-size
									<h2>Вид із номеру</h2>
									Вид у внутрішній дворик або місто На фотографії вище
									представлений інтер`єр номерів цієї категорії в цілому.
									Насправді номери можуть відрізнятися від зображених на
									фотографіях. <hr />
									<div className='default'>
										<h2>Стандартні зручності та послуги</h2>
										Кондиціонер з індивідуальним клімат-контролем РК-телевізор
										HD діагоналлю 42 дюйми Кавоварка з асортиментом кави
										Бездротовий та кабельний високошвидкісний доrступ до
										Інтернету Сейф для ноутбука
									</div>
								</div>
							</div>
							<img src={nomer5} alt='' />
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default Nomer5
