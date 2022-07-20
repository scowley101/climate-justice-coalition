import React from 'react';
import ContactForm from './modules/contact-form';

function Forms({ data }) {
  const type = data?.types[0]._type;
  console.log(type);

  switch (type) {
    case 'contactForm':
      return <ContactForm data={data} />;
    case 'eventForm':
      return <h2>event form</h2>;
    case 'signUpForm':
      return <h2>sign up form</h2>;
    default:
      return null;
  }
}

export default Forms;
