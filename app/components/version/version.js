'use strict';

angular.module('projectGuac.version', [
  'projectGuac.version.interpolate-filter',
  'projectGuac.version.version-directive'
])

.value('version', '0.1');
