import { useState, useMemo } from 'react'

export function useAmountPassangers({ passengersArr }) {
	const [passengers, setPassengers] = useState(
		passengersArr.map((value) => {
			return value.amount
		})
	)
	const [amount, setAmount] = useState(1)

	useMemo(() => {
		const newAmount = passengers.reduce((acc, curr) => acc + curr, 0)
		setAmount(newAmount)
	}, [passengers])

	return { passengers, setPassengers, amount, setAmount }
}
