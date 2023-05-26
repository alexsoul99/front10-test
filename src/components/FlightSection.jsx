import { HiOutlineSwitchHorizontal } from 'react-icons/hi'
import 'react-calendar/dist/Calendar.css'
import CalendarSection from './CalendarSection'
import InputField from './InputField'

export default function FlightSection({
	tripType,
	origin,
	destiny,
	setOrigin,
	setDestiny,
	arrivalDate,
	departureDate,
	setArrivalDate,
	setDepartureDate,
}) {
	const changeDestination = () => {
		const newDestiny = origin
		setOrigin(destiny)
		setDestiny(newDestiny)
	}

	return (
		<div className='flex my-4 gap-2 items-start'>
			{/* origin input */}
			<InputField
				isOrigin={true}
				value={origin}
				onChangeValue={setOrigin}
			/>
			<button
				className='bg-gray-200 rounded-xl p-4 focus:outline hover:bg-slate-300'
				title='Switch origin / destination'
				onClick={changeDestination}
				onKeyDown={(e) => {
					e.key === 'Enter' && changeDestination
				}}
			>
				<HiOutlineSwitchHorizontal
					size={28}
					className='bg-transparent'
				/>
			</button>

			{/* destiny input */}
			<InputField
				isOrigin={false}
				value={destiny}
				onChangeValue={setDestiny}
			/>

			<CalendarSection
				initialDate={departureDate}
				changeDate={setDepartureDate}
				title='Departure date selection'
			/>
			{tripType === 'One-way' ? (
				''
			) : (
				<CalendarSection
					initialDate={arrivalDate}
					changeDate={setArrivalDate}
					title='Arrival date selection'
				/>
			)}
		</div>
	)
}
