import { useDispatch, useSelector } from 'react-redux';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../Styles/JoinOurProgram.css'
import { subscribeUser, unsubscribeUser } from '../redux/subscriptionSlice';
import { setUser } from '../redux/userSlice';

export default function JoinOurProgram() {
  const dispatch = useDispatch();
  const subscriptionState = useSelector(state => state.subscription);

  const validationSchema = Yup.object().shape({
    email: Yup.string()
              .email('Invalid email address')
              .required('Required field')
              .test('hasDot', 'Email must contain a dot', (value) => {
                return value.includes('.');
              }),
  });

  const handleSubscribe = async (values) => {
    if(values.email !== '') {
      const resultAction = await dispatch(subscribeUser(values.email));
      if (subscribeUser.fulfilled.match(resultAction)) {
        dispatch(setUser(values.email))
        alert(resultAction.payload.message);
      } else {
        if (resultAction.payload) {
          alert(resultAction.payload.message);
        } else {
          alert('Cannot connect to the server.');
        }
      }
    } else {
      alert('Please provide an email.');
    }
  };

  const handleUnsubscribe = async (email) => {
    if(email !== '') {
      const resultAction = await dispatch(unsubscribeUser(email));
      if (unsubscribeUser.fulfilled.match(resultAction)) {
        dispatch(setUser(''))
        alert(resultAction.payload.message);
      } else {
        if (resultAction.payload) {
          alert(resultAction.payload.message);
        } else {
          alert('Cannot connect to the server.');
        }
      }
    } else {
      alert('Please provide an email.');
    }
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
              <button type="submit" className={`subscribe-button ${subscriptionState.status === 'loading' && 'loading'}`} disabled={!isValid || subscriptionState.status === 'loading'}>SUBSCRIBE</button>
            </div>
            <div>
              <ErrorMessage name="email" component="div" className='erorrMessage' />
              <button type='button' className={`unSuscribe-btn ${subscriptionState.status === 'loading' && 'loading'}`} onClick={() => handleUnsubscribe(values.email)} disabled={!isValid || subscriptionState.status === 'loading'}>
              Click here if you are already an user and want to cancel your Subscription
              </button>
            </div>
        </Form>
      )}
    </Formik>
  );
}
