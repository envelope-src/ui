
/**
 * dependencies
 */

var SidebarView = require('sidebar');

/**
 * app
 */

var app = document.getElementById('app');

/**
 * Sidebar
 */

var sidebar = new SidebarView;

/**
 * add sidebar.
 */

app.appendChild(sidebar.el);
