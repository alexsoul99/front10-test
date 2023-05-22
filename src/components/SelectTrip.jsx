import { useContext, useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import { TripTypeContext } from '../context/TripType'

export default function SelectTrip({ tripsArr }) {
	const [showDropdown, setShowDropdown] = useState(false)
	const { setTripType } = useContext(TripTypeContext)
	const [selected, setSelected] = useState(tripsArr[0])
	// const ulRef = useRef()

	return (
		<div
			onClick={() => {
				setShowDropdown(!showDropdown)
			}}
			className='relative w-72 rounded-xl'
		>
			<div className='flex justify-between place-items-center py-3 text-2xl'>
				{selected}
				<IoIosArrowDown size={15} />
			</div>
			{showDropdown && (
				<ul
					id='idref'
					className='absolute top-0 left-0 bg-gray-50 text-xl w-72 shadow-sm shadow-gray-500 rounded-xl'
					onMouseLeave={() => setShowDropdown(!showDropdown)}
				>
					{tripsArr.map((value) => {
						return (
							<li
								className={`hover:bg-gray-300 p-3 text-2xl ${
									selected === value ? 'bg-gray-300 font-bold' : ''
								}`}
								key={value}
								onClick={() => {
									setTripType(value)
									setSelected(value)
								}}
							>
								{value}
							</li>
						)
					})}
				</ul>
			)}
		</div>
	)
}
