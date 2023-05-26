import { useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import { GrAdd, GrSubtract } from 'react-icons/gr'

export default function Passengers({
	passengersTypes,
	passengersAmount,
	passengersTypesAmount,
	setPassengersTypesAmount,
}) {
	// state to controll if the passenger dropdown shows or not
	const [showDropdown, setShowDropdown] = useState(false)
	const [passengerError, setPassengerError] = useState(null)

	return (
		<div
			role='button'
			tabIndex={0}
			title='Passanger selection'
			onClick={() => setShowDropdown(!showDropdown)}
			onBlur={() => setShowDropdown(false)}
			onKeyDown={(e) => {
				if (e.key === 'Enter') {
					setShowDropdown(true)
				} else if (e.key === 'Escape') setShowDropdown(false)
			}}
			className='relative w-72 rounded-xl'
		>
			<div className='flex justify-between place-items-center p-3 text-2xl'>
				{passengersAmount === 1
					? passengersAmount + ` adult`
					: passengersAmount + ` passengers`}
				<IoIosArrowDown size={15} />
			</div>
			{showDropdown && (
				<ul
					className='absolute top-0 left-0 flex flex-col p-4 bg-gray-50 text-xl w-[40rem] shadow-sm shadow-gray-500 z-50 border-none rounded-xl'
					onClick={(e) => {
						e.stopPropagation()
					}}
				>
					{passengersTypes.map((value, index) => {
						return (
							<li
								key={value.type}
								className='flex items-center justify-between m-2'
								title={value.type}
							>
								<div className={' text-2xl font-semibold p-3'}>
									{value.type}
								</div>
								<div className='flex gap-4'>
									<div
										role='button'
										className='border border-gray-400 p-1 rounded-lg shadow-md shadow-gray-400'
										onClick={() => {
											const newArr = passengersTypesAmount.map(
												(passengerValue, ind) => {
													if (ind === index) {
														if (passengerValue === 0) return passengerValue
														if (passengersAmount === 1) {
															setPassengerError('Must be at least 1 passenger')
															return passengerValue
														}
														setPassengerError(null)
														return passengerValue - 1
													} else {
														return passengerValue
													}
												}
											)
											setPassengersTypesAmount(newArr)
										}}
									>
										<GrSubtract />
									</div>

									<h2 className='font-extrabold text-2xl'>
										{passengersTypesAmount[index]}
									</h2>

									<div
										role='button'
										className='border border-gray-400 text-sky-500 p-1 rounded-lg shadow-md shadow-gray-400'
										onClick={() => {
											const newArr = passengersTypesAmount.map(
												(passengerValue, ind) => {
													if (ind === index) {
														if (passengersAmount === 16) {
															setPassengerError('No more than 16 passengers')
															return passengerValue
														}
														setPassengerError(null)
														return passengerValue + 1
													} else {
														setPassengerError(null)
														return passengerValue
													}
												}
											)
											setPassengersTypesAmount(newArr)
										}}
									>
										<GrAdd />
									</div>
								</div>
							</li>
						)
					})}
					{passengerError ? (
						<span className='text-red-500 font-bold text-xl self-center'>
							{passengerError}
						</span>
					) : (
						<span></span>
					)}
				</ul>
			)}
		</div>
	)
}
