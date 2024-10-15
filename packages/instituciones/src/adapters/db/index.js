// External dependencies
const { drivers, queries } = require('@siiges-services/core');

const {
  Institucion,
  TipoInstitucion,
  Plantel,
  Domicilio,
  RatificacionNombre,
  Director,
  Rector,
  Persona,
  Municipio,
  PlantelHigiene,
  PlantelInfraestructura,
  Higiene,
  EdificioNivel,
  PlantelEdificioNivel,
  SaludInstitucion,
  SeguridadSistema,
  PlantelSeguridadSistema,
  Formacion,
  FormacionRector,
  FormacionDirector,
  Nivel,
  UsuarioUsuario,
  Usuario,
  Estado,
  InstitucionDgp,
} = drivers.sequelize.models;

const {
  findOneQuery,
  findAllQuery,
  createQuery,
  updateQuery,
  updateAndFindQuery,
  deleteAndFindQuery,
} = queries;

module.exports = {
  findOneInstitucionQuery: findOneQuery(Institucion),
  findAllInstitucionesQuery: findAllQuery(Institucion),
  createInstitucionDgpQuery: createQuery(InstitucionDgp),
  findAllTipoInstitucionesQuery: findAllQuery(TipoInstitucion),
  createInstitucionQuery: createQuery(Institucion),
  updateInstitucionQuery: updateAndFindQuery(Institucion),
  deleteInstitucionQuery: deleteAndFindQuery(Institucion),
  findOnePlantelQuery: findOneQuery(Plantel),
  createPlantelQuery: createQuery(Plantel),
  updatePlantelQuery: updateQuery(Plantel),
  deletePlantelQuery: deleteAndFindQuery(Plantel),
  updateDomicilioQuery: updateQuery(Domicilio),
  findOneRatificacionQuery: findOneQuery(RatificacionNombre),
  createRatificacionQuery: createQuery(RatificacionNombre),
  updateRatificacionQuery: updateQuery(RatificacionNombre),
  deleteRatificacionQuery: deleteAndFindQuery(RatificacionNombre),
  findOneDirectorQuery: findOneQuery(Director),
  createDirectorQuery: createQuery(Director),
  updateDirectorQuery: updateQuery(Director),
  findOneRectorQuery: findOneQuery(Rector),
  createRectorQuery: createQuery(Rector),
  deleteRectorQuery: deleteAndFindQuery(Rector),
  updateRectorQuery: updateAndFindQuery(Rector),
  updatePersonaQuery: updateAndFindQuery(Persona),
  findAllMunicipiosQuery: findAllQuery(Municipio),
  findAllEstadosQuery: findAllQuery(Estado),
  findAllHigienesQuery: findAllQuery(Higiene),
  createPlantelHigieneQuery: createQuery(PlantelHigiene),
  updatePlantelHigieneQuery: updateAndFindQuery(PlantelHigiene),
  deletePlantelHigieneQuery: deleteAndFindQuery(PlantelHigiene),
  findOnePlantelHigieneQuery: findOneQuery(PlantelHigiene),
  findGroupPlantelHigieneQuery: findAllQuery(PlantelHigiene),
  findAllSeguridadQuery: findAllQuery(SeguridadSistema),
  createPlantelSeguridadQuery: createQuery(PlantelSeguridadSistema),
  updatePlantelSeguridadQuery: updateAndFindQuery(PlantelSeguridadSistema),
  findOnePlantelSeguridadQuery: findOneQuery(PlantelSeguridadSistema),
  findGroupPlantelSeguridadQuery: findAllQuery(PlantelSeguridadSistema),
  findPlantelInfraestructuraQuery: findAllQuery(PlantelInfraestructura),
  findAllEdificiosNivelesQuery: findAllQuery(EdificioNivel),
  findAllPlantelEdificioNivelesQuery: findAllQuery(PlantelEdificioNivel),
  findOnePlantelEdificioNivelQuery: findOneQuery(PlantelEdificioNivel),
  createPlantelEdificioNivelQuery: createQuery(PlantelEdificioNivel),
  deletePlantelEdificioNivelQuery: deleteAndFindQuery(PlantelEdificioNivel),
  createSaludInstitucionQuery: createQuery(SaludInstitucion),
  findAllSaludInstitucionesQuery: findAllQuery(SaludInstitucion),
  findOneSaludInstitucionesQuery: findOneQuery(SaludInstitucion),
  deleteSaludInstitucionQuery: deleteAndFindQuery(SaludInstitucion),
  updateSaludInstitucionQuery: updateAndFindQuery(SaludInstitucion),
  createFormacionRectorQuery: createQuery(FormacionRector),
  createFormacionDirectorQuery: createQuery(FormacionDirector),
  findOneNivelQuery: findOneQuery(Nivel),
  findAllFormacionQuery: findAllQuery(Formacion),
  findOneFormacionRectorQuery: findOneQuery(FormacionRector),
  findAllFormacionRectorQuery: findAllQuery(FormacionRector),
  findOneFormacionDirectorQuery: findOneQuery(FormacionDirector),
  findAllFormacionDirectorQuery: findAllQuery(FormacionDirector),
  updateFormacionQuery: updateAndFindQuery(Formacion),
  findOneUsuarioUsuarioQuery: findOneQuery(UsuarioUsuario),
  findOneUsuarioQuery: findOneQuery(Usuario),
};
