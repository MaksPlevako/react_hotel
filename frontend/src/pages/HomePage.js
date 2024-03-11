import '../style/Home.css'
import Home from '../components/home'
import About from '../components/about'
import Services from '../components/services'
import Nomers from '../components/nomers'

function HomePage() {
	return (
		<>
			<Home />
			<About />
			<Services />
			<Nomers />
		</>
	)
}

export default HomePage
