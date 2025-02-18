import { FC } from 'react'
import { format } from 'date-fns'
import { Video } from 'lucide-react'
import { useCalendarStore } from '../stores/useCalendarStore'
import { Button } from '@/components/button'
import { MiniCalendar } from './MiniCalendar'
import { cn } from '@/utils'
import { Typography } from '@/components/typography'

export const UpcomingEvents: FC = () => {
  const { events, selectedDate } = useCalendarStore()
  
  const todayEvents = events.filter((event: any) => {
    const eventDate = new Date(event.startTime)
    return format(eventDate, 'yyyy-MM-dd') === format(selectedDate, 'yyyy-MM-dd')
  })

  return (
    <div>
      {/* Mini Calendar */}
      <MiniCalendar />

      {/* Events List */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <div>
            <Typography variant="h3">
              Upcoming Events
            </Typography>
            <Typography 
              variant="subtitle2" 
              color="text-gray-500"
              className="mt-1"
            >
              {format(selectedDate, 'd MMM')}
            </Typography>
          </div>
          <Button 
            variant="primary"
            size="sm"
            className="rounded-full px-2 py-1"
          >
            View All
          </Button>
        </div>

        <div className="space-y-2">
          {todayEvents.map((event: any) => (
            <div
              key={event.id}
              className={cn("relative rounded-lg overflow-hidden", {
                'bg-primary-orange-light': event.type === 'appointment',
                'bg-primary-blue-light text-white': event.type === 'webinar'
              })}
            >
              {/* Left border accent */}
              <div className={cn(
                'absolute left-0 top-0 bottom-0 w-1',
                {
                  'bg-primary-blue-dark': event.type === 'appointment',
                  'bg-primary-orange-dark': event.type === 'webinar'
                }
              )} />
              
              <div className="p-4 pl-5">
                <div className="flex items-start justify-between">
                  <div>
                    <Typography 
                      variant="subtitle2"
                      className="font-medium"
                    >
                      {event.title}
                    </Typography>
                    <Typography 
                      variant="body2"
                      className="mt-1 opacity-90"
                    >
                      {format(new Date(event.startTime), 'HH:mm')} - 
                      {format(new Date(event.endTime), 'HH:mm')} 
                      {event.timezone}
                    </Typography>
                  </div>
                  
                  {event.type === 'appointment' && (
                    <button 
                      className="p-2 rounded-full bg-white text-primary-blue-dark hover:bg-opacity-90"
                      aria-label="Start video call"
                    >
                      <Video className="w-4 h-4" />
                    </button>
                  )}
                </div>

                {event.type === 'appointment' && event.clientInfo && (
                  <div className="mt-3 flex items-center gap-2">
                    {event.clientInfo.avatar && (
                      <img
                        src={event.clientInfo.avatar}
                        alt="avatar"
                        className="w-6 h-6 rounded-full"
                      />
                    )}
                    <Button
                      variant="text"
                      size="xs"
                      className="text-primary-blue-dark"
                    >
                      <Typography variant="caption">
                        View Client Profile
                      </Typography>
                    </Button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 