import { rest } from 'msw';

export const handlers = [
  // Handler para POST /subscribe
  rest.post('/subscribe', (req, res, ctx) => {
    const { email } = req.body;

    if (!email) {
      return res(
        ctx.status(400),
        ctx.json({ error: "Wrong payload" })
      );
    }

    if (email === 'forbidden@email.com') {
      return res(
        ctx.status(422),
        ctx.json({ error: "Email is already in use" })
      );
    }

    // Si todo va bien, responde con éxito.
    return res(
      ctx.json({ success: true })
    );
  }),

  // Handler para POST /unsubscribe
  rest.post('/unsubscribe', (req, res, ctx) => {
    // Simula la eliminación y creación de archivos.

    // Responde con éxito si todo va bien.
    return res(
      ctx.json({ success: true })
    );
  }),
];