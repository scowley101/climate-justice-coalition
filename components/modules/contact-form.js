// Render Prop
import React from 'react';
import { Formik, Form, Field, ErrorMessage, getIn } from 'formik';

const ContactForm = () => {
  const encode = (data) =>
    Object.keys(data)
      .map(
        (key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
      )
      .join('&');
  return (
    <section className="section">
      <div className="section--content">
        <Formik
          initialValues={{ fullName: '', email: '', message: '' }}
          validate={(values) => {
            const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
            const errors = {};
            if (!values.fullName) {
              errors.fullName = 'Name Required';
            }
            if (!values.email || !emailRegex.test(values.email)) {
              errors.email = 'Valid Email Required';
            }
            if (!values.message) {
              errors.message = 'Message Required';
            }
            return errors;
          }}
          onSubmit={(values, actions) => {
            fetch('/', {
              method: 'POST',
              headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
              body: encode({ 'form-name': 'contact', ...values }),
            })
              .then(() => {
                alert('Success');
                actions.resetForm();
              })
              .catch(() => {
                alert('Error');
              })
              .finally(() => actions.setSubmitting(false));
          }} 
        >
          {({ isSubmitting, errors }) => (
            <div className="grid grid-cols-1">
              <div className="justify-self-center w-full sm:w-3/5 max-w-screen-md">
                <Form className="form" name="contact" data-netlify>
                  <div className="form--fields">
                    <div className="control--group is-inline">
                      <div className="control">
                        <label className="control--label" htmlFor="fullName">
                          <h7>Full Name</h7>
                        </label>
                        <Field
                          className="input"
                          id="fullName"
                          name="fullName"
                          onFocus={(e) => {
                            e.target.parentNode.classList.add('is-filled');
                          }}
                        />
                        <ErrorMessage
                          className="control--error"
                          name="fullName"
                          component="div"
                        />
                      </div>
                    </div>
                    <div className="control--group is-inline">
                      <div className="control">
                        <label className="control--label" htmlFor="email">
                          <h7>Email</h7>
                        </label>
                        <Field
                          id="email"
                          name="email"
                          type="email"
                          className="input"
                          onFocus={(e) => {
                            e.target.parentNode.classList.add('is-filled');
                          }}
                        />
                        <ErrorMessage
                          className="control--error"
                          name="email"
                          component="div"
                        />
                      </div>
                    </div>
                    <div className="control--group is-inline">
                      <div className="control">
                        <label className="control--label" htmlFor="message">
                          <h7>Message</h7>
                        </label>
                        <Field
                          id="message"
                          component="textarea"
                          name="message"
                          type="message"
                          className="input"
                          onFocus={(e) => {
                            e.target.parentNode.classList.add('is-filled');
                          }}
                        />
                        <ErrorMessage
                          className="control--error"
                          name="message"
                          component="div"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="contact-form--attachments" />
                  <div className="contact-form--submit">
                    <button
                      className="btn"
                      type="submit"
                      disabled={isSubmitting}
                    >
                      Submit
                    </button>
                  </div>
                </Form>
              </div>
            </div>
          )}
        </Formik>
      </div>
    </section>
  );
};

export default ContactForm;
