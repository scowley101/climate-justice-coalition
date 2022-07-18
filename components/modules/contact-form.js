// Render Prop
import React from 'react';
import { Formik, Form, Field, ErrorMessage, getIn } from 'formik';
// import styled from 'styled-components';
// import { ButtonStyles } from './CTALink';

// const ContactFormStyles = styled.div`
//         form {
//                 display: flex;
//                 flex-direction: column;
//                 align-items: flex-start;
//                 justify-content: center;                
//                 position: relative;
//                 bottom: 1rem;
//         }

//         input,
//         textArea {
//                 border: 1px solid var(--cmBlue);
//                 background-color: var(--cmGrey);
//                 width: 100%;
//                 ::placeholder {
//                         color: var(--cmLightGrey);
//                         font-family: var(--dmSans);
//                         padding: 0.75rem;
//                 }
//         }
//         input {
//                 height: 2.5rem;
//         }
//         textArea {
//                 height: 30vh;
//         }
//         button {
//                 margin-top: 1.75rem;
//         }

//         .error {
//                 color: red;
//         }
// `;

const ContactForm = () => {
        // function getFieldStyles(errors, fieldName) {
        //         if (getIn(errors, fieldName)) {
        //                 return {
        //                         border: '1px solid red',
        //                 };
        //         }
        // }
        // function getTitleStyles(errors, fieldName) {
        //         if (getIn(errors, fieldName)) {
        //                 return {
        //                         color: 'red',
        //                 };
        //         }
        // }

        const encode = (data) =>
                Object.keys(data)
                        .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
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
                                                .then(
                                                        () => {
                                                                alert('Success');
                                                                actions.resetForm();
                                                        }

                                                        // (
                                                        //         // alert('Success');
                                                        //         <div className="submit-success">
                                                        //                 <h6>Enquiry successfully Submitted</h6>
                                                        //                 <p>We will be in touch soon.</p>

                                                        //                 <button type="button" onClick={actions.resetForm()}>
                                                        //                         Reset form
                                                        //                 </button>
                                                        //         </div>
                                                        // )
                                                )
                                                .catch(() => {
                                                        alert('Error');
                                                })
                                                .finally(() => actions.setSubmitting(false));
                                }}
                        >
                                {({ isSubmitting, errors }) => (
                                        <div className="grid grid-cols-1">
                                            <div className="justify-self-center">


                                        <Form className="form" name="contact" data-netlify>
                                                <div className="form--fields">
                                                        <div className="control--group is-inline">
                                                                <div className="control">
                                                <label className="control--label" htmlFor="fullName"  onFocus={(e) => {
                    e.target.parentNode.classList.add('is-filled')
                  }}
                  onBlur={(e) => {
                    const value = e.target.value
                    email.onBlur(e)
                    e.target.parentNode.classList.toggle('is-filled', value)
                  }}
                  onChange={(e) => {
                    const value = e.target.value
                    email.onChange(e)
                    e.target.parentNode.classList.toggle('is-filled', value)
                  }}>
                                                        <h7>Full Name</h7>
                                                </label>
                                                <Field
                                                className="input"
                                                       
                                                        id="fullName"
                                                        name="fullName"
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
                                                        <h7 >Email</h7>
                                                </label>
                                                <Field
                                                      
                                                        id="email"
                                                        name="email"
                                                        type="email"
                                                        className="input"

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
                                                        <h7 >Message</h7>
                                                </label>
                                                <Field
                                                        
                                                        id="message"
                                                        component="textarea"
                                                        name="message"
                                                        type="message"
                                                        className="input"

                                                />
                                                <ErrorMessage
                                                        className="control--error"
                                                        name="message"
                                                        component="div"
                                                />
                                                </div>
</div>
                                                </div>
                                                <div className="contact-form--attachments"></div>
                                                <div className="contact-form--submit">
                                                <button className="btn is-text" type="submit" disabled={isSubmitting}>
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
