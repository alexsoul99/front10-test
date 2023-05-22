import SelectSection from './components/SelectSection'
import FlightSection from './components/FlightSection'
import { useContext } from 'react'
import { TripTypeContext } from './context/TripType'

function App() {
	const { tripType } = useContext(TripTypeContext)

	return (
		<main className='flex items-start h-full w-full flex-col'>
			<header>
				<h1 className='text-5xl font-black py-10'>
					Search hundreds of travel sites at once
				</h1>
				<SelectSection />
			</header>
			<section>
				<FlightSection />
				{tripType === 'Multi-Destination' && (
					<>
						<FlightSection />
						<FlightSection />
					</>
				)}
			</section>
		</main>
	)
}

export default App
