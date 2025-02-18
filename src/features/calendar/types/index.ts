export type EventType = 'appointment' | 'webinar'
export type ViewType = 'month' | 'week' | 'day'

export interface CalendarEvent {
  id: string
  title: string
  type: EventType
  startTime: string
  endTime: string
  timezone: string
  clientInfo?: {
    name: string
    avatar?: string
  }
  description?: string
}

export interface CalendarState {
  events: CalendarEvent[]
  selectedDate: Date
  view: ViewType
  isSmallScreen: boolean
} 