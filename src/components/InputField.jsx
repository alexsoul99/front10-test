import { FaPlaneArrival, FaPlaneDeparture } from 'react-icons/fa'
import data from '../mocks/data.json'
import { useState } from 'react'
import Autocomplete from './Autocomplete'

export default function InputField({ isOrigin, value, setValue }) {
	const { cities } = data
	const [showAutocomplete, setShowAutocomplete] = useState(false)

	const onChange = (e) => {
		setValue(e.target.value)
		e.target.value ? setShowAutocomplete(true) : setShowAutocomplete(false)
	}

	return (
		<div className='flex flex-col relative'>
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
					onChange={onChange}
				/>
			</div>

			{showAutocomplete && (
				<Autocomplete
					value={value}
					cities={cities}
					setValue={setValue}
					setShowAutocomplete={setShowAutocomplete}
				/>
			)}
		</div>
	)
}
