import { FC } from 'react'
import { format, addMonths, subMonths, addWeeks, subWeeks, addDays, subDays } from 'date-fns'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/button'
import { Select, SelectContent, SelectItem, SelectTrigger } from '@/components/select'
import { useCalendarStore } from '../stores/useCalendarStore'
import { ViewType } from '../types'
import { Typography } from '@/components/typography'

export const CalendarHeader: FC = () => {
  const { selectedDate, view, setView, setSelectedDate } = useCalendarStore()

  const handlePrevious = () => {
    switch (view) {
      case 'month':
        setSelectedDate(subMonths(selectedDate, 1))
        break
      case 'week':
        setSelectedDate(subWeeks(selectedDate, 1))
        break
      case 'day':
        setSelectedDate(subDays(selectedDate, 1))
        break
    }
  }

  const handleNext = () => {
    switch (view) {
      case 'month':
        setSelectedDate(addMonths(selectedDate, 1))
        break
      case 'week':
        setSelectedDate(addWeeks(selectedDate, 1))
        break
      case 'day':
        setSelectedDate(addDays(selectedDate, 1))
        break
    }
  }

  const handleToday = () => {
    setSelectedDate(new Date())
  }

  const getHeaderText = () => {
    switch (view) {
      case 'month':
        return format(selectedDate, 'MMMM yyyy')
      case 'week':
        const weekStart = format(selectedDate, 'MMM d')
        const weekEnd = format(addDays(selectedDate, 6), 'MMM d, yyyy')
        return `${weekStart} - ${weekEnd}`
      case 'day':
        return format(selectedDate, 'EEEE, MMMM d, yyyy')
    }
  }

  return (
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-4">
        <Button 
          variant="primary"
          size="md"
          className='rounded-lg'
          onClick={handleToday}
        >
          <Typography variant="body2" color="text-white">
            Today
          </Typography>
        </Button>
        <Typography variant="h2">
          {getHeaderText()}
        </Typography>
        <div className="flex items-center gap-2">
          <Button
            variant="text"
            size="sm"
            onClick={handlePrevious}
            className="p-1 hover:bg-gray-100 rounded-full"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </Button>
          <Button
            variant="text"
            size="sm"
            onClick={handleNext}
            className="p-1 hover:bg-gray-100 rounded-full"
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </Button>
        </div>
      </div>
      
      <Select value={view} onValueChange={(value) => setView(value as ViewType)}>
        <SelectTrigger>
          <Typography variant="body2" color="text-white">
            {view.charAt(0).toUpperCase() + view.slice(1)}
          </Typography>
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="month">
            <Typography variant="body2">Month</Typography>
          </SelectItem>
          <SelectItem value="week">
            <Typography variant="body2">Week</Typography>
          </SelectItem>
          <SelectItem value="day">
            <Typography variant="body2">Day</Typography>
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
} 