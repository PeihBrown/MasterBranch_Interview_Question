import { FC } from 'react'
import { CalendarHeader } from './CalendarHeader'
import { CalendarGrid } from './CalendarGrid'
import { UpcomingEvents } from './UpcomingEvents'

export const Calendar: FC = () => {
  return (
    <div className="min-h-screen p-4">
      <div className="max-w-7xl mx-auto">
        {/* Mobile View (< 768px) */}
        <div className="block md:hidden">
          <UpcomingEvents />
        </div>

        {/* Tablet View (768px - 1024px) */}
        <div className="hidden md:block lg:hidden">
          <main className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="p-4">
              <CalendarHeader />
              <CalendarGrid />
            </div>
          </main>
        </div>

        {/* Desktop View (> 1024px) */}
        <div className="hidden lg:grid lg:grid-cols-[320px,1fr] gap-4">
          <aside className="bg-white rounded-lg shadow-sm overflow-hidden">
            <UpcomingEvents />
          </aside>

          <main className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="p-4">
              <CalendarHeader />
              <CalendarGrid />
            </div>
          </main>
        </div>
      </div>
    </div>
  )
} 