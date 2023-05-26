import { useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'

export default function SelectClass({
	travelClassArr,
	selectedClass,
	setSelectedClass,
}) {
	const [showDropdown, setShowDropdown] = useState(false)

	return (
		<div
			role='button'
			tabIndex={0}
			title='Trip class selection'
			onClick={() => {
				setShowDropdown(!showDropdown)
			}}
			onKeyDown={(e) => {
				if (e.key === 'Enter') {
					setShowDropdown(true)
				} else if (e.key === 'Escape') setShowDropdown(false)
			}}
			onBlur={() => setShowDropdown(!showDropdown)}
			className='relative w-72 rounded-xl'
		>
			<div className='flex justify-between place-items-center p-3 text-2xl'>
				{selectedClass}
				<IoIosArrowDown size={15} />
			</div>
			{showDropdown && (
				<ul
					id='idref'
					className='absolute top-0 left-0 bg-gray-50 text-xl w-72 shadow-sm shadow-gray-500 rounded-xl'
				>
					{travelClassArr.map((value) => {
						return (
							<li
								className={`hover:bg-gray-300 p-3 text-2xl ${
									selectedClass === value ? 'bg-gray-300 font-bold' : ''
								}`}
								key={value}
								onClick={() => setSelectedClass(value)}
								title={value}
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
