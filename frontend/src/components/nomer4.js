import React from 'react'
import nomer4 from '../img/nomer4.png'

function Nomer4() {
	return (
		<>
			<section id='nomers_2'>
				<div className='container'>
					<div className='nomerses_2'>
						<span>Люкс</span>
						<div className='nomer_2'>
							<img src={nomer4} alt='' />
							<div className='nomer_block_2'>
								<div className='nomer_text'>
									<h2>Площа номера</h2>
									205-205 кв. м/2 207-2207 кв. футів
									<h2>Розмір ліжка</h2>
									Одна двуспальная кровать (размера 2х2)
									<h2>Вид із номеру</h2>
									З люкса відкривається краєвид на Дніпро. Цей чарівний вигляд
									назавжди зачарує вас. На фотографії вище представлений
									інтер'єр номерів цієї категорії загалом. Насправді номери
									можуть відрізнятися від зображених на фотографіях. <hr />
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

export default Nomer4
