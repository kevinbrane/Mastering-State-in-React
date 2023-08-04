import { useState } from 'react'
import '../Styles/JoinOurProgram.css'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export default function JoinOurProgram() {

  const validationSchema = Yup.object().shape({
    email: Yup.string()
              .email('Invalid email address')
              .required('Required field')
              .test('hasDot', 'Email must contain a dot', (value) => {
                return value.includes('.');
              }),
  });

  const [loading, setLoading] = useState(false);

  const handleSubscribe = (values) => {
    setLoading(true);
    fetch('http://localhost:3000/subscribe')
      .then((response) => response.json())
      .then((data) => {
        const subscriber = data.find(subscriber => subscriber.email === values.email);

        if (values.email === 'forbidden@gmail.com') {
          const error = new Error('This email is forbidden.');
          error.code = 422;
          throw error;
        }

        if (subscriber) {
          const error = new Error('This email is already subscribed.');
          error.code = 422;
          throw error;
        }

        const postData = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: values.email })
        };

        fetch('http://localhost:3000/subscribe', postData)
          .then(response => {
            setLoading(false);
            if (response.status !== 200 && response.status !== 201) {
              throw new Error(response.statusText)
            }
            return response.json()
          })
          .then(data => {
            window.alert('Subscription successful!', data);
          })
          .catch(() => {
            setLoading(false);
            window.alert('Subscription failed');
          });  
      })
      .catch((error) => {
        console.log(error.code)
        setLoading(false);
        window.alert(`${error} error: ${error.code}`);
      });
  };

  const handleUnsubscribe = (email) => {
    setLoading(true);
    fetch('http://localhost:3000/subscribe')
      .then((response) => response.json())
      .then((data) => {
        const subscriber = data.find(subscriber => subscriber.email === email);
  
        if (subscriber) {
          const deleteData = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
          };
  
          fetch(`http://localhost:3000/subscribe/${subscriber.id}`, deleteData)
            .then(response => {
              setLoading(false);
              if (!response.ok) {
                throw new Error(response.statusText)
              }
              return response.json()
            })
            .then(() => {
              window.alert('Unsubscription successful!')
            })
            .catch(() => {
              window.alert('Unsubscription failed');
            });
        } else {
          setLoading(false);
          const error = new Error('No subscriber with this email found.');
          error.code = 422;
          throw error;
        }
      })
      .catch((error) => {
        setLoading(false);
        window.alert(error);
      });
  };

  return (
    <Formik
      initialValues={{ email: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubscribe}
    >
      {({ values, isValid }) => (
        <Form className='joinOurProgram-container'>
            <h1 className='joinOurProgram-title'>Join Our Program</h1>
            <p className='joinOurProgram-parraph'>Sed do eiusmod tempor incididunt <br /> ut labore et dolore magna aliqua.</p>
            <div className='submit-container'>
              <Field type="email" name="email" placeholder='Email' className="input" />
              <button type="submit" className={`subscribe-button ${loading && 'loading'}`} disabled={!isValid || loading}>SUBSCRIBE</button>
            </div>
            <div>
              <ErrorMessage name="email" component="div" className='erorrMessage' />
              <button type='button' className={`unSuscribe-btn ${loading && 'loading'}`} onClick={() => handleUnsubscribe(values.email)} disabled={!isValid || loading}>
              Click here if you are already an user and want to cancel your Subscription
              </button>
            </div>
        </Form>
      )}
    </Formik>
  )
}

