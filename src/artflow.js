'use strict';

let vrNamespace = require( './vr/vr' );
let controlsNamespace = require( './controls/controls' );
let modulesNamespace = require( './modules/modules' );
let viewNamespace = require( './view/view' );

let Artflow = module.exports;
Artflow.vr = vrNamespace;
Artflow.controls = controlsNamespace;
Artflow.modules = modulesNamespace;
Artflow.view = viewNamespace;