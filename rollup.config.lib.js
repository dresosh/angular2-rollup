// rollup.config.lib.js

const paths = require('./paths.config.js');

export default {
  entry: 'ngfactory/'+paths.libFilename+'.js',
  format: 'iife',
  moduleName: paths.libFilename,
  dest: paths.dist+'/'+paths.libFilename+'.js',
  onwarn: function ( message ) {

    return;

  }
}
