import { useState } from 'react'
import Calendar from 'react-calendar'
import { IoIosCalendar } from 'react-icons/io'

export default function CalendarSection({ initialDate, changeDate, title }) {
	// state to control the if the calendar shows
	const [isOpenCalendar, setIsOpenCalendar] = useState(false)

	return (
		<div
			className='flex flex-col text-xl gap-2 items-start bg-gray-200 rounded-xl p-4 w-72 hover:bg-slate-300'
			onClick={() => setIsOpenCalendar(!isOpenCalendar)}
			onBlur={() => setIsOpenCalendar(false)}
			onKeyDown={(e) => {
				if (e.key === 'Enter') {
					setIsOpenCalendar(true)
				} else if (e.key === 'Escape') {
					setIsOpenCalendar(false)
				}
			}}
			title={title}
			tabIndex={0}
		>
			{/* field with the initial date, and to open the calendar */}
			<div className='flex flex-row bg-transparent text-2xl gap-2'>
				<IoIosCalendar
					className='bg-transparent'
					size={28}
				/>
				{initialDate}
			</div>

			{isOpenCalendar && (
				<div
					className='w-full'
					onClick={(e) => {
						e.stopPropagation()
					}}
				>
					<Calendar
						onChange={(value) =>
							changeDate(() => `${value.getDate()}/${value.getMonth() + 2}`)
						}
					/>
				</div>
			)}
		</div>
	)
}
