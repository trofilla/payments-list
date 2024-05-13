const replace = require('replace-in-file');
const optionsFr = {
  files: 'apps/accessgroup-app/src/locale/messages.fr-FR.xlf',
  from: /new">([^<]{2,})/g,
  to: 'new">**$1**',
};

replace(optionsFr).then();

const options = {
  files: ['apps/accessgroup-app/src/locale/messages.fr-FR.xlf'],
  from: /INTERPOLATION_1>/g,
  to: 'INTERPOLATION',
};

replace(options).then();
