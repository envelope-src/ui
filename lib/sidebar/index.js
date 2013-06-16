
/**
 * dependencies
 */

var template = require('./template')
  , domify = require('domify')
  , View = require('view');

/**
 * Export `SidebarView`
 */

module.exports = SidebarView;

/**
 * Initialize `SidebarView`
 */

function SidebarView(){
  var el = domify(template);
  View.call(this, {}, el.cloneNode(true));
}
