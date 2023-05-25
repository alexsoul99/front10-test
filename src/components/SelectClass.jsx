import { useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'

export default function SelectClass({ classesArr }) {
	const [showDropdown, setShowDropdown] = useState(false)
	const [selected, setSelected] = useState(classesArr[0])

	return (
		<div
			tabIndex={0}
			title='Trip class selection'
			onClick={() => {
				setShowDropdown(!showDropdown)
			}}
			onBlur={() => setShowDropdown(!showDropdown)}
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
				>
					{classesArr.map((value) => {
						return (
							<li
								className={`hover:bg-gray-300 p-3 text-2xl ${
									selected === value ? 'bg-gray-300 font-bold' : ''
								}`}
								key={value}
								onClick={() => setSelected(value)}
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
