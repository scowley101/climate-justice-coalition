import { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';

import { m, AnimatePresence } from 'framer-motion';
import cx from 'classnames';

import BlockContent from './block-content';
import Icon from './icon';
import { fadeAnim } from '../lib/animate';

const ContactForm = () => {
  const [message, setMessage] = useState(''); // This will be used to show a message if the submission is successful

  const [submitted, setSubmitted] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const encode = (data) =>
    Object.keys(data)
      .map(
        (key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
      )
      .join('&');

  const formik = useFormik({
    initialValues: {
      email: '',
      name: '',
      message: '',
    },
    // onSubmit: () => {
    //   setMessage('Form submitted');
    //   setSubmitted(true);
    // },
    onSubmit: (values, actions) => {
      setIsSubmitting(true);
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'contact', ...values }),
      })
        .then(() => {
          setMessage('Form submitted');
          setSubmitted(true);
        })
        .catch(() => {
          alert('Error');
        })
        .finally(() => actions.setSubmitting(false));
    },
    validationSchema: yup.object({
      name: yup.string().trim().required('Name is required'),
      email: yup
        .string()
        .email('Must be a valid email')
        .required('Email is required'),
      message: yup.string().trim().required('Message is required'),
    }),
  });

  return (
    <>
      {submitted && (
        <div className="form--success mt-36">
          <div hidden={!submitted} className="form--success-content">
            {message}
          </div>
        </div>
      )}
      {!submitted && (
        <form
          name="contact"
          data-netlify
          className="form"
          onSubmit={formik.handleSubmit}
        >
          <div className="form--fields">
            <div className="control--group is-inline">
              <div
                className={`control ${formik.values.name ? 'is-filled' : ''}`}
              >
                <label htmlFor="name" className="control--label">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.name && formik.errors.name ? (
                  <span role="alert" className="control--error">
                    {formik.errors.name}
                  </span>
                ) : null}
              </div>
            </div>

            <div className="control--group is-inline">
              <div
                className={`control ${formik.values.email ? 'is-filled' : ''}`}
              >
                <label htmlFor="email" className="control--label">
                  Email address
                </label>

                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.email && formik.errors.email ? (
                  <span role="alert" className="control--error">
                    {formik.errors.email}
                  </span>
                ) : null}
              </div>
            </div>

            <div className="control--group is-inline">
              <div
                className={`control ${
                  formik.values.message ? 'is-filled' : ''
                }`}
              >
                <label htmlFor="message" className="control--label">
                  Your message
                </label>

                <textarea
                  name="message"
                  id="message"
                  value={formik.values.message}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.message && formik.errors.message ? (
                  <span role="alert" className="control--error">
                    {formik.errors.message}
                  </span>
                ) : null}
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn is-primary"
            >
              Send
            </button>
          </div>
        </form>
      )}
    </>
  );
};

export default ContactForm;
