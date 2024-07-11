const { GenerarOFAD } = require('./OFAD');
const { GenerarFDP05 } = require('./FDP05');
const { GenerarFDP02 } = require('./FDP02');
const { GenerarFDP06 } = require('./FDP06');
const { GenerarFDA02 } = require('./FDA02');

module.exports = {
  GenerarFDA02,
  GenerarFDP05,
  GenerarFDP02,
  GenerarFDP06,
  GenerarOFAD,
};
