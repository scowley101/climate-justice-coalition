import { Question } from 'phosphor-react'

export default {
  title: 'Contact Form',
  name: 'contactForm',
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
        title: 'Contact Form'
      }
    }
  }
}
