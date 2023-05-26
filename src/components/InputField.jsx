import { FaPlaneArrival, FaPlaneDeparture } from 'react-icons/fa'
import data from '../mocks/data.json'
import { useState } from 'react'

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
				<section className='bg-white rounded-xl shadow-md shadow-black max-h-80 w-[23rem] overflow-y-auto absolute top-16'>
					<ul className='flex flex-col gap-2'>
						{cities
							.filter((item) => {
								const searchTerm = value.toLowerCase()
								const city = item.city.toLocaleLowerCase()
								const country = item.country.toLocaleLowerCase()
								const airport = item.airport.toLocaleLowerCase()

								return (
									searchTerm &&
									city.startsWith(searchTerm) |
										country.startsWith(searchTerm) |
										airport.startsWith(searchTerm)
								)
							})
							.map((city, index) => (
								<li
									key={index}
									className='flex flex-row gap-4 px-3 my-2 rounded-xl'
									onClick={() => {
										setValue(city.city)
										setShowAutocomplete(false)
									}}
								>
									<img
										className='rounded-3xl h-24 w-24 shadow-md shadow-black'
										src={city.photo}
										alt={`Photograph of the city ${city.city}`}
									/>
									<div className='self-center'>
										<h1 className='font-bold text-lg'>
											{city.city} - {city.country}
										</h1>
										<p>{city.airport}</p>
									</div>
								</li>
							))}
					</ul>
				</section>
			)}
		</div>
	)
}
