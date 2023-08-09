import fetchMock from "jest-fetch-mock";
import mockAxios from 'jest-mock-axios';

fetchMock.enableMocks();

// Limpia todos los mocks después de cada prueba
afterEach(() => {
    mockAxios.reset();
});