import { useState } from 'react'
import Calendar from 'react-calendar'
import { IoIosCalendar } from 'react-icons/io'

export default function CalendarSection({ initialDate, changeDate }) {
	const [isOpenCalendar, setIsOpenCalendar] = useState(false)

	return (
		<div
			className='flex flex-col text-xl gap-2 items-start bg-gray-200 rounded-xl p-4 w-72 hover:bg-slate-300'
			onClick={() => setIsOpenCalendar(!isOpenCalendar)}
			onMouseLeave={() => setIsOpenCalendar(false)}
		>
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
