import { setupServer } from 'msw/node';
import { handlers } from './handlers'; 
import { rest } from 'msw';

const mockedCommunityData = [
    // ...tu data mockeada, como el JSON que me mostraste anteriormente
  ];
  
  const handlers = [
    // ...otros handlers que ya podrías tener
  
    rest.get('http://localhost:3000/community', (req, res, ctx) => {
      return res(ctx.json(mockedCommunityData));
    }),
  ];
  

export const server = setupServer(...handlers);