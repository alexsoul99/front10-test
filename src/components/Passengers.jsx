import { useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import { GrAdd, GrSubtract } from 'react-icons/gr'
import { useAmountPassangers } from '../hooks/useAmountPassengers'

export default function Passangers({ passengersArr }) {
	// state to controll if the passenger dropdown shows or not
	const [showDropdown, setShowDropdown] = useState(false)

	// getting the methodds and values from the custom hook
	const { amount, passengers, setPassengers } = useAmountPassangers({
		passengersArr,
	})

	return (
		<div
			onClick={() => setShowDropdown(!showDropdown)}
			className='relative w-72'
		>
			<div className='flex justify-between place-items-center py-3 text-2xl'>
				{amount === 1 ? amount + ` adult` : amount + ` passengers`}
				<IoIosArrowDown size={15} />
			</div>
			{showDropdown && (
				<ul
					className='absolute top-0 left-0 p-4 bg-gray-50 text-xl w-[40rem] shadow-sm shadow-gray-500 z-50 border-none rounded-xl'
					onMouseLeave={() => setShowDropdown(false)}
				>
					{passengersArr.map((value, ind) => {
						return (
							<li
								key={value.type}
								className='flex items-center justify-between m-2'
							>
								<div className={' text-2xl font-semibold p-3'}>
									{value.type}
								</div>
								<div className='flex gap-4'>
									<button
										className='border border-gray-400 p-1 rounded-lg shadow-md shadow-gray-400'
										onClick={(e) => {
											e.stopPropagation()
											const newArr = passengers.map((valu, indd) => {
												if (indd === ind) return valu - 1
												else return valu
											})
											setPassengers(newArr)
										}}
									>
										<GrSubtract />
									</button>

									<h2 className='font-extrabold text-2xl'>{passengers[ind]}</h2>

									<button
										className='border border-gray-400 text-sky-500 p-1 rounded-lg shadow-md shadow-gray-400'
										onClick={(e) => {
											e.stopPropagation()
											const newArr = passengers.map((valu, indd) => {
												console.log(valu)
												if (indd === ind) return valu + 1
												else return valu
											})
											setPassengers(newArr)
										}}
									>
										<GrAdd />
									</button>
								</div>
							</li>
						)
					})}
				</ul>
			)}
		</div>
	)
}
