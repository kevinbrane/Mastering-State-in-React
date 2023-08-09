import configureMockStore from 'redux-mock-store';

const mockStore = configureMockStore();

const getMockStore = (state) => {
  const initialState = {
    user: {
      email: "",
      // añade otros campos del user si es necesario
    },
    subscription: {
      status: 'idle',
      // añade otros campos del subscription si es necesario
    },
    visibility: {
      // añade campos iniciales para el slice de visibility aquí
    },
    ...state,  // esto permite sobreescribir el estado inicial en las pruebas si es necesario
  };

  return mockStore(initialState);
};

export default getMockStore;