import React from 'react'

function Map() {
	return (
		<>
			<div className='map'>
				<iframe
					src='https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2539.9518770590175!2d30.523706478264568!3d50.46062080391779!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1zMTMgTmFiZXJlemhubyBLaHJlc2hjaGF0eXRza2EgU3RyLCDQmtC40ZfQsiwgMDQwNzAg!5e0!3m2!1sru!2sua!4v1644331364957!5m2!1sru!2sua'
					width='900px'
					height='450px'
					allowFullScreen=''
					loading='eager'
					title='large map'
				/>
			</div>
			<div className='map_for1024'>
				<iframe
					src='https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2539.9518770590175!2d30.523706478264568!3d50.46062080391779!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1zMTMgTmFiZXJlemhubyBLaHJlc2hjaGF0eXRza2EgU3RyLCDQmtC40ZfQsiwgMDQwNzAg!5e0!3m2!1sru!2sua!4v1644331364957!5m2!1sru!2sua'
					width='500'
					height='450'
					allowFullScreen=''
					loading='eager'
					title='middle map'
				></iframe>
			</div>
			<div className='map_for768'>
				<iframe
					src='https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2539.9518770590175!2d30.523706478264568!3d50.46062080391779!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1zMTMgTmFiZXJlemhubyBLaHJlc2hjaGF0eXRza2EgU3RyLCDQmtC40ZfQsiwgMDQwNzAg!5e0!3m2!1sru!2sua!4v1644331364957!5m2!1sru!2sua'
					width='400'
					height='350'
					allowFullScreen=''
					loading='eager'
					title='small map'
				></iframe>
			</div>
		</>
	)
}

export default Map
