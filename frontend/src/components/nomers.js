import React from 'react'
import nomer1 from '../img/nomer_1.png'
import nomer2 from '../img/nomer_2.png'
import nomer3 from '../img/nomer_3.png'
import nomer4 from '../img/nomer_4.png'
import nomer6 from '../img/nomer_6.png'

function Nomers() {
	return (
		<section id='nomers'>
			<div className='container'>
				<div className='nomers'>
					<div className='nomers_block'>
						<img src={nomer1} alt='' />
						<img src={nomer2} alt='' />
						<img src={nomer3} alt='' />
					</div>
					<div className='nomers_block'>
						<img src={nomer4} alt='' />
						<a href='/nomers' className='nomers_text'>
							<hr />
							<span> Всі номери </span>
							<hr />
						</a>
						<img src={nomer6} alt='' />
					</div>
				</div>
			</div>
		</section>
	)
}

export default Nomers
