import { FC } from 'react'
import { format, startOfMonth, endOfMonth, eachDayOfInterval, startOfWeek, endOfWeek, isSameDay, isToday } from 'date-fns'
import { useCalendarStore } from '../stores/useCalendarStore'
import { CalendarEvent } from '../types'
import { cn } from '@/utils'

export const CalendarGrid: FC = () => {
  const { selectedDate, events } = useCalendarStore()
  
  const monthStart = startOfMonth(selectedDate)
  const monthEnd = endOfMonth(selectedDate)
  const calendarStart = startOfWeek(monthStart)
  const calendarEnd = endOfWeek(monthEnd)
  
  const days = eachDayOfInterval({ start: calendarStart, end: calendarEnd })

  const getEventsForDay = (date: Date): CalendarEvent[] => {
    return events.filter((event: any) => {
      const eventDate = new Date(event.startTime)
      return isSameDay(eventDate, date)
    })
  }

  const isCurrentMonth = (date: Date) => {
    return format(date, 'M') === format(selectedDate, 'M')
  }

  const isSelected = (date: Date) => {
    return isSameDay(date, selectedDate)
  }

  const handleEventClick = (event: CalendarEvent) => {
    // Navigate to dummy URL based on event type
    const baseUrl = 'https://example.com'
    const url = event.type === 'appointment' 
      ? `${baseUrl}/appointments/${event.id}`
      : `${baseUrl}/webinars/${event.id}`
    
    window.open(url, '_blank')
  }

  return (
    <div className={cn("grid grid-cols-7 gap-px bg-gray-200 rounded-lg overflow-hidden")}>
      {/* Weekday headers */}
      {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map(day => (
        <div 
          key={day} 
          className={cn("bg-white p-2 text-center text-xs text-gray-500 font-medium")}
        >
          {day}
        </div>
      ))}
      
      {/* Calendar days */}
      {days.map(day => {
        const dayEvents = getEventsForDay(day)
        
        return (
          <div 
            key={format(day, 'yyyy-MM-dd')}
            className={cn(
              'min-h-[120px] p-1',
              'transition-colors duration-200',
              {
                'bg-white': !isToday(day),
                'bg-calendar-tile': isToday(day),
                'opacity-50': !isCurrentMonth(day),
                'hover:bg-gray-50': !isToday(day) && !isSelected(day),
              }
            )}
          >
            <div className={cn("flex justify-center items-start p-1")}>
              <span className={cn(
                'text-sm font-medium w-[20px] h-[20px] rounded-full flex items-center justify-center',
                {
                  'bg-primary-blue-light text-white': isToday(day)
                }
              )}>
                {format(day, 'd')}
              </span>
            </div>
            
            <div className={cn("mt-1 space-y-1")}>
              {dayEvents.slice(0, 2).map(event => (
                <button
                  key={event.id}
                  onClick={() => handleEventClick(event)}
                  className={cn(
                    'w-full text-left text-xs p-1 rounded relative pl-3',
                    'transition-transform duration-150 hover:scale-[1.02]',
                    'cursor-pointer hover:shadow-sm',
                    {
                      'bg-primary-orange-light': event.type === 'appointment',
                      'bg-primary-blue-light text-white': event.type === 'webinar'
                    }
                  )}
                >
                  {/* Left border accent */}
                  <div className={cn(
                    'absolute left-0 top-0 bottom-0 w-[2px]',
                    {
                      'bg-primary-blue-dark': event.type === 'appointment',
                      'bg-primary-orange-dark': event.type === 'webinar'
                    }
                  )} />

                  <div className={cn("truncate")}>
                    {event.title}
                  </div>
                  <div className={cn("text-[10px]")}>
                    {format(new Date(event.startTime), 'HH:mm')}
                  </div>
                </button>
              ))}
              {dayEvents.length > 2 && (
                <button 
                  onClick={() => window.open(`https://example.com/day/${format(day, 'yyyy-MM-dd')}`, '_blank')}
                  className={cn(
                    "text-[10px] text-primary-blue-light px-1",
                    "hover:underline cursor-pointer"
                  )}
                >
                  {dayEvents.length - 2} more
                </button>
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
} 