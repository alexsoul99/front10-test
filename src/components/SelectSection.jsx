import SelectClass from './SelectClass'
import Passengers from './Passengers'
import SelectTrip from './SelectTrip'

export default function SelectSection({
	selectedClass,
	setSelectedClass,
	selectedFlightType,
	setSelectedFlightType,
	passengersAmount,
	passengersTypes,
	passengersTypesAmount,
	setPassengersTypesAmount,
	flightTypeArr,
	travelClassArr,
}) {
	return (
		<section className='flex gap-4 z-50'>
			<div className='bg-gray-50 text-gray-600 text-xl rounded-lg p-2'>
				<SelectTrip
					flightTypeArr={flightTypeArr}
					selectedFlight={selectedFlightType}
					setSelectedFlightType={setSelectedFlightType}
				/>
			</div>
			<div className='bg-gray-50 text-gray-600 text-xl rounded-lg p-2'>
				<Passengers
					passengersTypes={passengersTypes}
					setPassengersTypesAmount={setPassengersTypesAmount}
					passengersAmount={passengersAmount}
					passengersTypesAmount={passengersTypesAmount}
				/>
			</div>
			<div className='bg-gray-50 text-gray-600 text-xl rounded-lg p-2'>
				<SelectClass
					travelClassArr={travelClassArr}
					selectedClass={selectedClass}
					setSelectedClass={setSelectedClass}
				/>
			</div>
		</section>
	)
}
