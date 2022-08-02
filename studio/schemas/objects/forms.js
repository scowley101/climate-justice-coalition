import { Question } from 'phosphor-react'

export default {
  title: 'Form',
  name: 'form',
  type: 'object',
  icon: Question,
  fields: [
    
{
  title: 'Form Type',
  name: 'formType',
  type: 'string',
  options: {
    list: [
      { title: 'Contact', value: 'contactForm' },
      { title: 'Event submit', value: 'eventForm' },
      { title: 'Sign Up', value: 'signUpForm' }
    ]
  },
  initialValue: 'contactForm',
  validation: Rule => Rule.required()
},
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
        title: 'Form'
      }
    }
  }
}



