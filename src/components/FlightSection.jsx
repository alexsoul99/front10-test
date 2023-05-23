import { useState, useContext } from 'react'
import { FaSearch } from 'react-icons/fa'
import { HiOutlineSwitchHorizontal } from 'react-icons/hi'
import 'react-calendar/dist/Calendar.css'
import { TripTypeContext } from '../context/TripType'
import CalendarSection from './CalendarSection'
import InputField from './InputField'
import { useDates } from '../hooks/useDates'

export default function FlightSection() {
	// states to save the value from the inputs
	const [departure, setDeparture] = useState('')
	const [destiny, setDestiny] = useState('')

	// get all the date's setters and info from a custom hook
	const { arrivalDate, departureDate, setArrivalDate, setDepartureDate } =
		useDates()

	// Extraction of the trip type context to optionally render
	const { tripType } = useContext(TripTypeContext)

	return (
		<div className='flex my-4 gap-2 items-start'>
			{/* departures input */}
			<InputField
				isDeparture={true}
				value={departure}
				onChangeValue={setDeparture}
			/>
			<button className='bg-gray-200 rounded-xl p-4 focus:outline hover:bg-slate-300'>
				<HiOutlineSwitchHorizontal
					size={28}
					className='bg-transparent'
					onClick={() => {
						const newDestiny = departure
						setDeparture(destiny)
						setDestiny(newDestiny)
					}}
				/>
			</button>

			{/* destiny input */}
			<InputField
				isDeparture={false}
				value={destiny}
				onChangeValue={setDestiny}
			/>

			<CalendarSection
				initialDate={departureDate}
				changeDate={setDepartureDate}
			/>
			{tripType === 'One-way' ? (
				''
			) : (
				<CalendarSection
					initialDate={arrivalDate}
					changeDate={setArrivalDate}
				/>
			)}

			{/* search button, it has no functionality */}
			<button className='bg-orange-600 rounded-xl p-4 focus:outline hover:bg-slate-300 outline-none'>
				<FaSearch
					size={28}
					className='bg-transparent text-white'
				/>
			</button>
		</div>
	)
}
