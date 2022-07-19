import { CalendarPlus } from 'phosphor-react'

export default {
  title: 'Event',
  name: 'event',
  type: 'object',
  icon: CalendarPlus,
  fields: [
    {
      title: 'Date',
      name: 'eventDate',
      type: 'date',
      options: {
        dateFormat: 'DD/MM/YYY',
        calendarTodayLabel: 'Today'
      }
    },
    {
      title: 'Title',
      name: 'title',
      type: 'string'
    },
    {
      title: 'Description',
      name: 'description',
      type: 'string'
    },
    {
      title: 'Time',
      name: 'time',
      type: 'string'
    },
    {
      title: 'Location',
      name: 'location',
      type: 'string'
    },
    {
      title: 'Content',
      name: 'content',
      type: 'complexPortableText'
    }
  ],
  preview: {
    select: {
      title: 'title'
    }
  }
}
