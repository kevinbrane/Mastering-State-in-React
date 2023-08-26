import { setupServer } from 'msw/node';
import { handlers as externalHandlers } from './handlers';
import { rest } from 'msw';
import mockedCommunityData from './mockedCommunityData'; // Asegúrate de ajustar este path si es necesario

const localHandlers = [
    rest.get('http://localhost:3000/community', (req, res, ctx) => {
      return res(ctx.json(mockedCommunityData));
    }),
];

const combinedHandlers = [...externalHandlers, ...localHandlers];

export const server = setupServer(...combinedHandlers);