const deleteAlumnoSchema = {
  tags: ['Solicitudes'],
  description: 'Given an SolicitudId delete an Solicitud in the database',
  params: {
    title: 'delete solicitud',
    type: 'object',
    properties: {
      id: { type: 'integer' },
    },
    required: ['solicitudId'],
  },
  response: {
    200: {
      type: 'object',
      properties: {
        success: { type: 'boolean', example: true },
        message: { type: 'string', example: 'Solicitud eliminada correctamente' },
      },
    },
  },
};

module.exports = deleteAlumnoSchema;
