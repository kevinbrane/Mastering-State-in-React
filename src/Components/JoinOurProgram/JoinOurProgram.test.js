import { render } from '@testing-library/react';
import JoinOurProgram from './JoinOurProgram';
import { Provider } from 'react-redux';
import getMockStore from '../../mocks/mockStore';

beforeEach(() => {
  fetch.resetMocks();
});

test('subscribes a user successfully', async () => {
   const store = getMockStore(); 

   fetch.mockResponseOnce(JSON.stringify({
     message: 'Subscription successful!'
   }));

   const { getByPlaceholderText, getByText, findByText } = render(
      <Provider store={store}>
         <JoinOurProgram />
      </Provider>
   );
});

test('handles subscription error', async () => {
   const store = getMockStore(); // Usa la función correcta

   fetch.mockRejectOnce(new Error('API is down'));

   const { getByPlaceholderText, getByText, findByText } = render(
      <Provider store={store}>
         <JoinOurProgram />
      </Provider>
   );
});
