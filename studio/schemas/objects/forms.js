import { Question } from 'phosphor-react'

export default {
  title: 'Form list',
  name: 'forms',
  type: 'object',
  icon: Question,
  fields: [
    {
      title: 'Forms',
      name: 'types',
      type: 'array',
      of: [
        { type: 'contactForm' },
        { type: 'eventForm' },
        { type: 'signUpForm' },
      ]
    }
  ],
  preview: {
    select: {
      types: 'types'
    },
    prepare({ types }) {
      return {
        title: 'Forms',
        subtitle: `${types.length} type(s)`
      }
    }
  }
}

