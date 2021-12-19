import 'zone.js/dist/zone-node';
import {enableProdMode} from '@angular/core';
import 'reflect-metadata';
// Express Engine
import {ngExpressEngine} from '@nguniversal/express-engine';
// Import module map for lazy loading
import {provideModuleMap} from '@nguniversal/module-map-ngfactory-loader';
import * as express from 'express';
import {join} from 'path';
import 'localstorage-polyfill';
import { APP_BASE_HREF } from '@angular/common';
import { AppServerModule } from 'src/main.server';
// Express server
const app = express();
const PORT = process.env.PORT || 3000;
const DIST_FOLDER = join(process.cwd(), 'dist/plor-ng');

// const jsdom = require('jsdom');
// const $ = require('jquery')(new jsdom.JSDOM().window);


const domino = require('domino');
const fs = require('fs');
const templateA = fs.readFileSync(join(DIST_FOLDER, 'index.html')).toString();
const win = domino.createWindow(templateA);
win.Object = Object;
win.Math = Math;

global['window'] = win;
global['document'] = win.document;
global['branch'] = null;
global['object'] = win.object;
global['HTMLElement'] = win.HTMLElement;
global['navigator'] = win.navigator;
global['localStorage'] = localStorage;
global['sessionStorage'] = localStorage;

global['CSS'] = null;
// global['$'] = $;
// global['jQuery'] = $;
global['Node'] = win.Node;
global['Text'] = win.Text;
global['Event'] = win.Event;
global['KeyboardEvent'] = win.Event;
global['MouseEvent'] = win.Event;
global['FocusEvent'] = win.Event;
global['location'] = win.Location;
global['Event']['prototype'] = win.Event.prototype;

// global['getComputedStyle'] = () => {
//   return {
//     getPropertyValue() {
//       return '';
//     }
//   };
// };
// Faster server renders w/ Prod mode (dev mode never needed)
enableProdMode();
// * NOTE :: leave this as require() since this file is built Dynamically from webpack
const {
  AppServerModuleNgFactory,
  LAZY_MODULE_MAP
} = require('./dist/server/main');
// Our Universal express-engine (found @ https://github.com/angular/universal/tree/master/modules/express-engine)
app.engine(
  'html',
  ngExpressEngine({
    bootstrap: AppServerModuleNgFactory,
    providers: [provideModuleMap(LAZY_MODULE_MAP)]
  })
);
app.set('view engine', 'html');
app.set('views', DIST_FOLDER);
// Example Express Rest API endpoints
// app.get('/api/**', (req, res) => { });
// Serve static files from /browser
app.get(
  '*.*',
  express.static(DIST_FOLDER, {
    maxAge: '1y'
  })
);
// All regular routes use the Universal engine
app.get('*', (req, res) => {
  res.render('index', {req});
});
// app.get('*', (req, res) => {
//   res.render('index', { req, providers: [{ provide: APP_BASE_HREF, useValue: req.baseUrl }] });
// });
// Start up the Node server
app.listen(PORT, () => {
  console.log(`Node Express server listening on http://localhost:${PORT}`);
});
