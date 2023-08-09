import { render } from '@testing-library/react';
import JoinOurProgram from './JoinOurProgram';
import { Provider } from 'react-redux';
import getMockStore from '../../mocks/mockStore'; // Importa la función correcta

beforeEach(() => {
  fetch.resetMocks();
});

test('subscribes a user successfully', async () => {
   const store = getMockStore();  // Usa la función correcta

   fetch.mockResponseOnce(JSON.stringify({
     message: 'Subscription successful!'
   }));

   const { getByPlaceholderText, getByText, findByText } = render(
      <Provider store={store}>
         <JoinOurProgram />
      </Provider>
   );

   // Continúa aquí simulando interacciones del usuario y verificando resultados
   // Por ejemplo, ingresar un email, hacer clic en el botón "SUBSCRIBE", etc.
});

test('handles subscription error', async () => {
   const store = getMockStore(); // Usa la función correcta

   fetch.mockRejectOnce(new Error('API is down'));

   const { getByPlaceholderText, getByText, findByText } = render(
      <Provider store={store}>
         <JoinOurProgram />
      </Provider>
   );

   // Similar al test anterior, pero aquí esperarías ver el mensaje de error
});

// Puedes añadir más tests basados en diferentes escenarios