const { diligencia } = require('./properties/diligencia');
const { responseProperties } = require('./properties/responseProperties');

const findGroupDiligencias = {
  tags: ['Diligence'],
  description: 'Given a solicitudId get their related diligences',
  params: {
    title: 'getOneDiligence',
    type: 'object',
    properties: {
      solicitudId: { type: 'integer' },
    },
    required: ['solicitudId'],
  },
  response: {
    200: {
      type: 'object',
      properties: {
        data: {
          type: 'array',
          items: {
            properties: {
              id: { type: 'integer' },
              ...diligencia,
              ...responseProperties,
            },
          },
        },
      },
    },
  },
};

module.exports = findGroupDiligencias;
