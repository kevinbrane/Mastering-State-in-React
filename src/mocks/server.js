import { setupServer } from 'msw/node';
import { handlers } from './handlers'; // Asume que tienes una exportación de handlers

export const server = setupServer(...handlers);