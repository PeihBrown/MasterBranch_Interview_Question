import { CalendarEvent } from '../types'

export const mockEvents: CalendarEvent[] = [
  {
    id: '1',
    title: 'First Session with Alex Stan',
    type: 'appointment',
    startTime: '2025-02-18T09:00:00+08:00',
    endTime: '2025-02-18T09:30:00+08:00',
    timezone: 'GMT+8',
    clientInfo: {
      name: 'Alex Stan',
      avatar: 'https://ui-avatars.com/api/?name=Alex+Stan'
    }
  },
  {
    id: '2',
    title: 'Webinar: How to cope with trauma in professional life',
    type: 'webinar',
    startTime: '2025-02-18T14:00:00+08:00',
    endTime: '2025-02-18T15:30:00+08:00',
    timezone: 'GMT+8',
    description: 'Learn how to manage professional stress and trauma'
  },
  {
    id: '3',
    title: 'Chemistry Session with Alex Stan',
    type: 'appointment',
    startTime: '2025-02-18T16:00:00+08:00',
    endTime: '2025-02-18T16:30:00+08:00',
    timezone: 'GMT+8',
    clientInfo: {
      name: 'Alex Stan',
      avatar: 'https://ui-avatars.com/api/?name=Alex+Stan'
    }
  },

  // Other events in February
  {
    id: '4',
    title: 'First Session with Lisa Wong',
    type: 'appointment',
    startTime: '2025-02-20T10:00:00+08:00',
    endTime: '2025-02-20T10:30:00+08:00',
    timezone: 'GMT+8',
    clientInfo: {
      name: 'Lisa Wong',
      avatar: 'https://ui-avatars.com/api/?name=Lisa+Wong'
    }
  },
  {
    id: '5',
    title: 'Webinar: Mental Health Awareness',
    type: 'webinar',
    startTime: '2025-02-21T15:00:00+08:00',
    endTime: '2025-02-21T16:30:00+08:00',
    timezone: 'GMT+8',
    description: 'Understanding mental health in the workplace'
  },
  {
    id: '6',
    title: 'Follow-up with John Doe',
    type: 'appointment',
    startTime: '2025-02-22T11:00:00+08:00',
    endTime: '2025-02-22T11:30:00+08:00',
    timezone: 'GMT+8',
    clientInfo: {
      name: 'John Doe',
      avatar: 'https://ui-avatars.com/api/?name=John+Doe'
    }
  },
  {
    id: '7',
    title: 'Group Therapy Session',
    type: 'webinar',
    startTime: '2025-02-25T13:00:00+08:00',
    endTime: '2025-02-25T14:30:00+08:00',
    timezone: 'GMT+8',
    description: 'Weekly group therapy session'
  },
  {
    id: '8',
    title: 'Consultation with Sarah Smith',
    type: 'appointment',
    startTime: '2025-02-26T09:00:00+08:00',
    endTime: '2025-02-26T09:30:00+08:00',
    timezone: 'GMT+8',
    clientInfo: {
      name: 'Sarah Smith',
      avatar: 'https://ui-avatars.com/api/?name=Sarah+Smith'
    }
  },
  {
    id: '9',
    title: 'Stress Management Workshop',
    type: 'webinar',
    startTime: '2025-02-28T14:00:00+08:00',
    endTime: '2025-02-28T15:30:00+08:00',
    timezone: 'GMT+8',
    description: 'Learn effective stress management techniques'
  }
] 