import { createContext, useState } from 'react'

export const TripTypeContext = createContext()

export function TripTypeProvider({ children }) {
	const [tripType, setTripType] = useState('One-way')

	return (
		<TripTypeContext.Provider value={{ tripType, setTripType }}>
			{children}
		</TripTypeContext.Provider>
	)
}
