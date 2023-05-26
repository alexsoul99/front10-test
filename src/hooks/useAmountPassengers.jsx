import { useState, useMemo } from 'react'

export function useAmountPassangers({ passengersTypes }) {
	const [passengersTypesAmount, setPassengersTypesAmount] = useState(
		passengersTypes.map((value) => {
			return value.amount
		})
	)

	const passengerAmount = useMemo(() => {
		return passengersTypesAmount.reduce((acc, curr) => acc + curr, 0)
	}, [passengersTypesAmount])

	return { passengersTypesAmount, setPassengersTypesAmount, passengerAmount }
}
