import { FaPlaneArrival, FaPlaneDeparture } from 'react-icons/fa'

export default function InputField({ isDeparture, value, onChangeValue }) {
	return (
		<div className='flex text-xl gap-2 items-center bg-gray-200 rounded-xl p-4 hover:bg-slate-300'>
			{isDeparture ? (
				<FaPlaneDeparture
					className='bg-transparent'
					size={28}
				/>
			) : (
				<FaPlaneArrival
					className='bg-transparent'
					size={28}
				/>
			)}
			<input
				className='bg-transparent focus:outline-none text-2xl'
				type='text'
				value={value}
				placeholder={`${isDeparture ? 'Departure' : 'Arrival'}`}
				onChange={(e) => {
					onChangeValue(e.target.value)
				}}
			/>
		</div>
	)
}
