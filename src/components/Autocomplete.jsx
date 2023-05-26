export default function Autocomplete({
	value,
	cities,
	setValue,
	setShowAutocomplete,
}) {
	return (
		<section className='bg-white rounded-xl shadow-md shadow-black max-h-80 w-[23rem] overflow-y-auto absolute top-16'>
			<ul className='flex flex-col gap-4 py-4'>
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
							className='flex flex-row gap-4 px-3 rounded-xl'
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
	)
}
