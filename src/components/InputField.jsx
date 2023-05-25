import { FaPlaneArrival, FaPlaneDeparture } from 'react-icons/fa'

export default function InputField({ isOrigin, value, onChangeValue }) {
	return (
		<div
			className='flex text-xl gap-2 items-center bg-gray-200 rounded-xl p-4 hover:bg-slate-300'
			title={isOrigin ? 'Origin field' : 'Destination field'}
		>
			{isOrigin ? (
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
				tabIndex={0}
				className='bg-transparent focus:outline-none text-2xl'
				type='text'
				value={value}
				placeholder={`${isOrigin ? 'Origin' : 'Destination'}`}
				onChange={(e) => {
					onChangeValue(e.target.value)
				}}
			/>
		</div>
	)
}
