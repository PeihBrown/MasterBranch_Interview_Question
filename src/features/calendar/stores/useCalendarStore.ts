import { create } from 'zustand'
import { CalendarState, CalendarEvent } from '../types'
import { mockEvents } from '../data/mockEvents'

interface CalendarStore extends CalendarState {
  setSelectedDate: (date: Date) => void
  setView: (view: CalendarState['view']) => void
  addEvent: (event: CalendarEvent) => void
  removeEvent: (eventId: string) => void
  setIsSmallScreen: (isSmall: boolean) => void
}

export const useCalendarStore = create<CalendarStore>((set) => ({
  events: mockEvents,
  selectedDate: new Date(),
  view: 'month',
  isSmallScreen: false,
  
  setSelectedDate: (date) => set({ selectedDate: date }),
  setView: (view) => set({ view }),
  addEvent: (event) => set((state) => ({ 
    events: [...state.events, event] 
  })),
  removeEvent: (eventId) => set((state) => ({
    events: state.events.filter(event => event.id !== eventId)
  })),
  setIsSmallScreen: (isSmall) => set({ isSmallScreen: isSmall })
})) 