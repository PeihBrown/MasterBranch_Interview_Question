import { FC } from 'react'
import { format, startOfMonth, endOfMonth, eachDayOfInterval, startOfWeek, endOfWeek, isToday, isSameMonth } from 'date-fns'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/button'
import { useCalendarStore } from '../stores/useCalendarStore'
import { cn } from '@/utils'

export const MiniCalendar: FC = () => {
  const { selectedDate, setSelectedDate } = useCalendarStore()

  const monthStart = startOfMonth(selectedDate)
  const monthEnd = endOfMonth(selectedDate)
  const calendarStart = startOfWeek(monthStart)
  const calendarEnd = endOfWeek(monthEnd)
  
  const days = eachDayOfInterval({ start: calendarStart, end: calendarEnd })

  const handlePrevMonth = () => {
    setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() - 1, 1))
  }

  const handleNextMonth = () => {
    setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 1))
  }

  return (
    <div className="p-4 border-b border-gray-200">
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm font-medium text-gray-900">
          {format(selectedDate, 'MMM yyyy')}
        </span>
        <div className="flex items-center gap-2">
          <Button
            variant="text"
            size="sm"
            onClick={handlePrevMonth}
            className="p-1 hover:bg-gray-100 rounded-full"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button
            variant="text"
            size="sm"
            onClick={handleNextMonth}
            className="p-1 hover:bg-gray-100 rounded-full"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-1">
        {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day) => (
          <div
            key={day}
            className="h-6 text-[10px] font-medium text-gray-500 flex items-center justify-center"
          >
            {day}
          </div>
        ))}

        {days.map((day) => {
          const isSelected = format(day, 'yyyy-MM-dd') === format(selectedDate, 'yyyy-MM-dd')
          
          return (
            <button
              key={day.toString()}
              onClick={() => setSelectedDate(day)}
              className={cn(
                'h-6 text-xs rounded-full flex items-center justify-center',
                'hover:bg-gray-100 transition-colors',
                {
                  'text-gray-400': !isSameMonth(day, selectedDate),
                  'bg-primary-blue-dark text-white': isSelected,
                  'text-primary-blue-dark font-bold': isToday(day) && !isSelected,
                }
              )}
            >
              {format(day, 'd')}
            </button>
          )
        })}
      </div>
    </div>
  )
} 