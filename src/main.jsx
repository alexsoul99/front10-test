import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { TripTypeProvider } from './context/TripType.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
	<TripTypeProvider>
		<App />
	</TripTypeProvider>
)
