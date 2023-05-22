import { useState, useMemo, useContext } from 'react'
import { FaSearch } from 'react-icons/fa'
import { HiOutlineSwitchHorizontal } from 'react-icons/hi'
import 'react-calendar/dist/Calendar.css'
import { TripTypeContext } from '../context/TripType'
import CalendarSection from './CalendarSection'
import InputField from './InputField'

export default function FlightSection() {
	// states to save the value from the inputs
	const [departure, setDeparture] = useState('')
	const [destiny, setDestiny] = useState('')

	// states to default the flies dates and to save the selected value
	const [departureDate, setDepartureDate] = useState('')
	const [arrivalDate, setArrivalDate] = useState('')

	// initialize todays date
	const actualDate = new Date()

	// Extraction of the trip type context to optionally render
	const { tripType } = useContext(TripTypeContext)

	// here we initialize the values of the flys dates
	useMemo(() => {
		setDepartureDate(`${actualDate.getDate()}/${actualDate.getMonth() + 2}`)
	}, [])

	useMemo(() => {
		setArrivalDate(`${actualDate.getDate() + 5}/${actualDate.getMonth() + 2}`)
	}, [])

	return (
		<div className='flex my-4 gap-2 items-start'>
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
			<button className='bg-orange-600 rounded-xl p-4 focus:outline hover:bg-slate-300 outline-none'>
				<FaSearch
					size={28}
					className='bg-transparent text-white'
				/>
			</button>
		</div>
	)
}
