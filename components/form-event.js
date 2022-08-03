import { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';

import { m, AnimatePresence } from 'framer-motion';
import cx from 'classnames';

import BlockContent from './block-content';
import Icon from './icon';
import { fadeAnim } from '../lib/animate';

const EventForm = () => {
  const [message, setMessage] = useState(''); // This will be used to show a message if the submission is successful

  const [submitted, setSubmitted] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const encode = (data) => {
    Object.keys(data)
      .map(
        (key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
      )
      .join('&');
  }

  const formik = useFormik({
    initialValues: {
      email: '',
      name: '',
      groupName: '',
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
        body: encode({ 'form-name': 'event', ...values }),
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
      groupName: yup.string().trim().required('Group name is required'),
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
          name="event"
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
                  Your name
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
                className={`control ${
                  formik.values.groupName ? 'is-filled' : ''
                }`}
              >
                <label htmlFor="groupName" className="control--label">
                  What is the name of your group?
                </label>
                <input
                  type="text"
                  name="groupName"
                  id="groupName"
                  value={formik.values.groupName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.groupName && formik.errors.groupName ? (
                  <span role="alert" className="control--error">
                    {formik.errors.groupName}
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
                  Please tell us about the event. Including the date, time and
                  any web links
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

export default EventForm;
