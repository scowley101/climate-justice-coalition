import { CalendarPlus } from 'phosphor-react'

export default {
  title: 'Event List',
  name: 'events',
  type: 'object',
  icon: CalendarPlus,
  fields: [
    {
      title: 'Events',
      name: 'items',
      type: 'array',
      of: [{ type: 'event' }]
    }
  ],
  preview: {
    select: {
      items: 'items'
    },
    prepare({ items }) {
      return {
        title: 'Event List',
        subtitle: `${items.length} item(s)`
      }
    }
  }
}
