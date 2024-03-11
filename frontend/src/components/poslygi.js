import React from 'react'
import posluga1 from '../img/poslyg1_1.png'
import rest from '../img/rest.png'
import posluga2 from '../img/poslyg_2_2.png'
import cafe from '../img/cafe.png'
import posluga3 from '../img/poslyg_3_3.png'
import busines from '../img/busines.png'
import posluga4 from '../img/poslyg_4_4.png'
import fitnes from '../img/fitnes.png'
import posluga5 from '../img/poslyg_5_5.png'
import bar from '../img/bar.png'
import posluga6 from '../img/poslyg_6_6.png'
import spa from '../img/spa.png'

function Poslygi() {
	const [activerest, setActiverest] = React.useState(false)
	const [activecafe, setActivecafe] = React.useState(false)
	const [activebuis, setActivebuis] = React.useState(false)
	const [activefit, setActivefit] = React.useState(false)
	const [activebar, setActivebar] = React.useState(false)
	const [activespa, setActivespa] = React.useState(false)

	return (
		<>
			<section id='poslygi'>
				<div className='container'>
					<div className='poslygi'>
						<span>Наші послуги</span>
						<div className='poslygi_block'>
							<div className='poslyga'>
								<figure className='poslyga_img'>
									<img src={posluga1} alt='' />
									<figcaption>
										<button
											className='rest_text'
											onClick={() => setActiverest(true)}
										>
											Ресторан “Gipnotic”
										</button>
									</figcaption>
								</figure>
								<div
									className={activerest ? 'rest_more active' : 'rest_more'}
									onClick={() => setActiverest(false)}
								>
									<div
										className='poslygi_content'
										onClick={e => e.stopPropagation()}
									>
										<span>Ресторан “Gipnotic”</span>
										<button
											className='rest_close'
											onClick={() => setActiverest(false)}
										>
											X
										</button>
										<div className='poslygi_text'>
											<p>
												Ресторан "Gipnotic" - ікона найсмачнішої кухні та
												найкращого стилю Києва відкритий у 2020 році. Найкращий
												інтер'єр міста прикрасить вашу страву. Також для гостей
												які хочуть усамітнитися, ми представляємо шикарний
												VIP-зал. У меню є вегетаріанські позиції та авторські
												хіти. У закладі є безкоштовна парковка для відвідувачів
												ресторану.
											</p>
											<p>
												<b>Ми відкриті з 13:00 до 03:00</b>
											</p>
											<img src={rest} alt='' />
										</div>
									</div>
								</div>
							</div>
							<div className='poslyga'>
								<figure className='poslyga_img'>
									<img src={posluga2} alt='' />
									<figcaption>
										<button
											className='cafe_text'
											onClick={() => setActivecafe(true)}
										>
											Кафе “Гілея”
										</button>
									</figcaption>
								</figure>
								<div
									className={activecafe ? 'cafe_more active' : 'cafe_more'}
									onClick={() => setActivecafe(false)}
								>
									<div
										className='poslygi_content'
										onClick={e => e.stopPropagation()}
									>
										<span>Кафе “Гілея”</span>
										<button
											className='cafe_close'
											onClick={() => setActivecafe(false)}
										>
											X
										</button>
										<div className='poslygi_text'>
											<p>
												Відзначена нагородами спеціалізована кав’ярня,
												орієнтована на якість, “Гілея” була відкрита в 2016
												році. Побудований на основі унікальної кавомашини
												Victoria Arduino White Eagle з важелем для приготування
												кави ручної роботи. Класичне кавове меню та фірмові
												напої на основі місцевих інгредієнтів. Інновації в
												холодному варінні, соковий батончик, свіжоспечені
												круасани, крафтовий шоколад, десерти та корисні
												перекуси.
											</p>
											<p>
												<b>Ми відкриті з 08:00 до 22:00</b>
											</p>
											<img src={cafe} alt='' />
										</div>
									</div>
								</div>
							</div>
							<div className='poslyga'>
								<figure className='poslyga_img'>
									<img src={posluga3} alt='' />
									<figcaption>
										<button
											className='busines_text'
											onClick={() => setActivebuis(true)}
										>
											Бізнес зустрічі
										</button>
									</figcaption>
								</figure>
								<div
									className={
										activebuis ? 'busines_more active' : 'busines_more'
									}
									onClick={() => setActivebuis(false)}
								>
									<div
										className='poslygi_content'
										onClick={e => e.stopPropagation()}
									>
										<span>Бізнес зустрічі</span>
										<button
											className='busines_close'
											onClick={() => setActivebuis(false)}
										>
											X
										</button>
										<div className='poslygi_text'>
											<p>
												Переговорна кімната з великим столом, відокремлена від
												зони бару скляними стінами. Ідеально підходить для
												проведення бізнес-зустріч, переговорів або як vip-зал на
												приватному заході.
											</p>
											<p>
												<b>Доступно цілодобово</b>
											</p>
											<img src={busines} alt='' />
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className='poslygi_block'>
							<div className='poslyga'>
								<figure className='poslyga_img'>
									<img src={posluga4} alt='' />
									<figcaption>
										<button
											className='fitnes_text'
											onClick={() => setActivefit(true)}
										>
											Фітнес зал
										</button>
									</figcaption>
								</figure>
								<div
									className={activefit ? 'fitnes_more active' : 'fitnes_more'}
									onClick={() => setActivefit(false)}
								>
									<div
										className='poslygi_content'
										onClick={e => e.stopPropagation()}
									>
										<span>Фітнес зал</span>
										<button
											className='fitnes_close'
											onClick={() => setActivefit(false)}
										>
											X
										</button>
										<div className='poslygi_text'>
											<p>
												Ми – спорт простір в готелі "". Це цілком новий погляд
												на те, яким повинен бути спортивний клуб та шлях до
												здорового і досяжного способу життя. Ми розвиваємо
												мережу доступних, високоякісних та технологічних клубів,
												де кожен буде відчувати, що йому тут дійсно раді.
											</p>
											<p>
												<b>Доступно цілодобово</b>
											</p>
											<img src={fitnes} alt='' />
										</div>
									</div>
								</div>
							</div>
							<div className='poslyga'>
								<figure className='poslyga_img'>
									<img src={posluga5} alt='' />
									<figcaption>
										<button
											className='bar_text'
											onClick={() => setActivebar(true)}
										>
											Бар-більярд
										</button>
									</figcaption>
								</figure>
								<div
									className={activebar ? 'bar_more active' : 'bar_more'}
									onClick={() => setActivebar(false)}
								>
									<div
										className='poslygi_content'
										onClick={e => e.stopPropagation()}
									>
										<span>Бар-більярд</span>
										<button
											className='bar_close'
											onClick={() => setActivebar(false)}
										>
											X
										</button>
										<div className='poslygi_text'>
											<p>
												Заклад має 15 столів для російського більярду і 7 столів
												для американського пулу, великий асортимент барного
												меню, кавказьку та європейську кухню, авторські новинки
												від свого шеф-кухаря. Відвідувачам обіцяють невимушену
												атмосферу, приємне обслуговування, демократичні ціни, а
												завсідникам – програму лояльності.
											</p>
											<p>
												<b>Ми відкриті з 15:00 до 05:00</b>
											</p>
											<img src={bar} alt='' />
										</div>
									</div>
								</div>
							</div>
							<div className='poslyga'>
								<figure className='poslyga_img'>
									<img src={posluga6} alt='' />
									<figcaption>
										<button
											className='spa_text'
											onClick={() => setActivespa(true)}
										>
											Спа-салон
										</button>
									</figcaption>
								</figure>
								<div
									className={activespa ? 'spa_more active' : 'spa_more'}
									onClick={() => setActivespa(false)}
								>
									<div
										className='poslygi_content'
										onClick={e => e.stopPropagation()}
									>
										<span>Спа-салон</span>
										<button
											className='spa_close'
											onClick={() => setActivespa(false)}
										>
											X
										</button>
										<div className='poslygi_text'>
											<p>
												Правильна атмосфера салону SPA club з тихими спокійними
												звуками, хорошими запахами, приглушеним світлом, тільки
												природною гамою кольору в оформленні, відповідає всім
												концепціям SPA. Перебування в нашому Спа салоні та
												Хаммамі створює відчуття колиски, де панує спокій,
												турбота, тепло та відпочинок. У нашому спа салоні є
												різноманітні спа програми, всі можливі види масажу - від
												лікувальних до глибоко відновлювальних спа в зоні
												Хаммама.
											</p>
											<p>
												<b>Ми відкриті з 10:00 до 22:00</b>
											</p>
											<img src={spa} alt='' />
										</div>
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

export default Poslygi
