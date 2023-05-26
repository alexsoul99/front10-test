import SelectSection from './components/SelectSection'
import FlightSection from './components/FlightSection'
import { useState } from 'react'
import { useAmountPassangers } from './hooks/useAmountPassengers'
import data from './mocks/data.json'
import { useDates } from './hooks/useDates'
import { FaSearch } from 'react-icons/fa'

export default function App() {
	// get the data from the json
	const { flightType, passengersTypes, travelClass } = data

	// getting values and setted methods from the custom hook
	const { passengerAmount, passengersTypesAmount, setPassengersTypesAmount } =
		useAmountPassangers({
			passengersTypes,
		})

	// Initializing the states of the flight types and travel class
	const [selectedClass, setSelectedClass] = useState(travelClass[0])
	const [selectedFlightType, setSelectedFlightType] = useState(flightType[0])
	const [origin, setOrigin] = useState('')
	const [destiny, setDestiny] = useState('')
	// const [flightState, setFlightState] = useState({
	// 	origin: '',
	// 	destiny: '',
	// 	class: travelClass[0],
	// 	flightType: flightType[0],
	// })

	// get all the date's setters and info from a custom hook
	const { arrivalDate, departureDate, setArrivalDate, setDepartureDate } =
		useDates()

	// function to send the data to the backend
	const handleSubmit = () => {
		if (origin | (destiny === '')) return alert('cant submit empty fields')
		if (selectedFlightType === 'One-way') {
			return alert(
				`Origin: ${origin} \n Destiny: ${destiny} \n Departure: ${departureDate} \n Flight Type: ${selectedFlightType} \n Trip Class: ${selectedClass} \n Passengers: ${passengerAmount}`
			)
		} else if (selectedFlightType === 'Round-trip') {
			return alert(
				`Origin: ${origin} \n Destiny: ${destiny} \n Departure: ${departureDate} \n Arrival: ${arrivalDate} \n Flight Type: ${selectedFlightType} \n Trip Class: ${selectedClass} \n Passengers: ${passengerAmount}`
			)
		}
	}

	return (
		<main className='flex items-start h-full w-full flex-col'>
			<header>
				<h1 className='text-5xl font-black py-10'>
					Search hundreds of travel sites at once
				</h1>
			</header>
			<form
				onSubmit={(e) => {
					e.preventDefault()
				}}
			>
				<SelectSection
					selectedClass={selectedClass}
					setSelectedClass={setSelectedClass}
					selectedFlightType={selectedFlightType}
					setSelectedFlightType={setSelectedFlightType}
					passengersAmount={passengerAmount}
					passengersTypes={passengersTypes}
					passengersTypesAmount={passengersTypesAmount}
					setPassengersTypesAmount={setPassengersTypesAmount}
					flightTypeArr={flightType}
					travelClassArr={travelClass}
				/>
				<section className='flex gap-2'>
					<div>
						<FlightSection
							tripType={selectedFlightType}
							origin={origin}
							destiny={destiny}
							setOrigin={setOrigin}
							setDestiny={setDestiny}
							arrivalDate={arrivalDate}
							departureDate={departureDate}
							setArrivalDate={setArrivalDate}
							setDepartureDate={setDepartureDate}
						/>
						{selectedFlightType === 'Multi-Destination' && (
							<>
								<FlightSection
									tripType={selectedFlightType}
									origin={origin}
									destiny={destiny}
									setOrigin={setOrigin}
									setDestiny={setDestiny}
									arrivalDate={arrivalDate}
									departureDate={departureDate}
									setArrivalDate={setArrivalDate}
									setDepartureDate={setDepartureDate}
								/>
								<FlightSection
									tripType={selectedFlightType}
									origin={origin}
									destiny={destiny}
									setOrigin={setOrigin}
									setDestiny={setDestiny}
									arrivalDate={arrivalDate}
									departureDate={departureDate}
									setArrivalDate={setArrivalDate}
									setDepartureDate={setDepartureDate}
								/>
							</>
						)}
					</div>
					{/* search button, it has no functionality 'cause it wasn't povided an API */}
					<button
						type='submit'
						tabIndex={0}
						className='bg-orange-600 rounded-xl p-4 my-4 h-16 hover:bg-slate-300 self-end'
						title='Search flight'
						onClick={handleSubmit}
					>
						<FaSearch
							size={28}
							className='bg-transparent text-white'
						/>
					</button>
				</section>
			</form>
		</main>
	)
}
