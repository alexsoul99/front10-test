import { useState, useMemo } from 'react'

export function useDates() {
	// states to default the flies dates and to save the selected value
	const [departureDate, setDepartureDate] = useState('')
	const [arrivalDate, setArrivalDate] = useState('')

	// initialize todays date
	const actualDate = new Date()

	// here we initialize the values of the flights dates
	useMemo(() => {
		setDepartureDate(`${actualDate.getDate()}/${actualDate.getMonth() + 2}`)
		setArrivalDate(`${actualDate.getDate() + 5}/${actualDate.getMonth() + 2}`)
	}, [])

	return { departureDate, arrivalDate, setDepartureDate, setArrivalDate }
}
