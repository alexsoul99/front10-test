import data from '../mocks/data.json'
import SelectClass from './SelectClass'
import Passengers from './Passengers'
import SelectTrip from './SelectTrip'

export default function SelectSection() {
	const { flightType, passengers, travelClass } = data

	return (
		<section className='flex gap-4'>
			<div className='bg-gray-50 text-gray-600 text-xl rounded-lg p-2'>
				<SelectTrip tripsArr={flightType} />
			</div>
			<div className='bg-gray-50 text-gray-600 text-xl rounded-lg p-2'>
				<Passengers passengersArr={passengers} />
			</div>
			<div className='bg-gray-50 text-gray-600 text-xl rounded-lg p-2'>
				<SelectClass classesArr={travelClass} />
			</div>
		</section>
	)
}
