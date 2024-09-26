const { gradosAdapter } = require('../../../adapters');

const {
  findGroupGradosSchema,
} = require('./schema');

async function cicloEscolarRouter(fastify, opts, next) {
  await fastify.get(
    '/programas/:programaId',
    {
      schema: findGroupGradosSchema,
      onRequest: [fastify.authenticate],
    },
    gradosAdapter.findGroupGrados,
  );

  next();
}

module.exports = cicloEscolarRouter;
