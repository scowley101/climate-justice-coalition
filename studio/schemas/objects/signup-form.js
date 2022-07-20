import { Question } from 'phosphor-react'

export default {
  title: 'Sign Up Form',
  name: 'signUpForm',
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
        title: 'Sign Up Form'
      }
    }
  }
}
