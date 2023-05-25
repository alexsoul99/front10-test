import { useState, useMemo } from 'react'

export function useAmountPassangers({ passengersArr }) {
	const [passengers, setPassengers] = useState(
		passengersArr.map((value) => {
			return value.amount
		})
	)

	const amount = useMemo(() => {
		return passengers.reduce((acc, curr) => acc + curr, 0)
	}, [passengers])

	return { passengers, setPassengers, amount }
}
