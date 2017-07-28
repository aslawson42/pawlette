'use strict';

var _mdcDrawer = require('mdc-drawer');

var drawer = new mdc.drawer.MDCPersistentDrawer(document.querySelector('.mdc-persistent-drawer'));
document.querySelector('.menu').addEventListener('click', function () {
  return drawer.open = true;
});