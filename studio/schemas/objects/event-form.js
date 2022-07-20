import { Question } from 'phosphor-react'

export default {
  title: 'Event Form',
  name: 'eventForm',
  type: 'object',
  icon: Question,
  fields: [
    {
      title: 'Submit Text',
      name: 'submit',
      type: 'string'
    },
    {
      title: 'Success Message',
      name: 'successMsg',
      type: 'complexPortableText'
    },
    {
      title: 'Error Message',
      name: 'errorMsg',
      type: 'complexPortableText'
    },
  
  ],
  preview: {
    prepare() {
      return {
        title: 'Event Form'
      }
    }
  }
}
