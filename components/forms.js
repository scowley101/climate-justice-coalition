import React from 'react';
import ContactForm from './form-contact';
import EventForm from './form-event';
import SignUpForm from './form-signup';

function Forms({ data }) {
  const type = data.formType;

  switch (type) {
    case 'contactForm':
      return <ContactForm data={data} />;
    case 'eventForm':
      return <EventForm data={data} />;
    case 'signUpForm':
      return <SignUpForm data={data} />;
    default:
      return null;
  }
}

export default Forms;
 