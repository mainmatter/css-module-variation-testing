'use strict';

const StaticSiteJson = require('broccoli-static-site-json');

module.exports = {
  name: require('./package').name,

  isDevelopingAddon() {
    return true;
  },

  treeForPublic() {
    return new StaticSiteJson(`demos`, {
      contentFolder: `demos`,
      collate: true,
      type: `demos`,
    });
  },
};
