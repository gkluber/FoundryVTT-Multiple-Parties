/**
 * (c) 2020 Grant Kluber
 * Software License: MIT License (see LICENSE for details)
 */

// Import TypeScript modules
import { registerSettingsInit, registerSettingsReady } from './module/settings.js';
import { preloadTemplates } from './module/preloadTemplates.js';

/* ------------------------------------ */
/* Initialize module					*/
/* ------------------------------------ */
Hooks.once('init', async function() {
	console.log('MultipleParties | Initializing MultipleParties');

	// Assign custom classes and constants here
	
	// Register custom module settings
	registerSettingsInit();
	
	// Preload Handlebars templates
	await preloadTemplates();

	// Register custom sheets (if any)
});

/* ------------------------------------ */
/* Setup module							*/
/* ------------------------------------ */
Hooks.once('setup', function() {
	// Do anything after initialization but before
	// ready
});

/* ------------------------------------ */
/* When ready							*/
/* ------------------------------------ */
Hooks.once('ready', function() {
	// Do anything once the module is ready
	registerSettingsReady();
});

Hooks.on('createChatMessage', function(msg: ChatMessage, data: {temporary: boolean, renderSheet: boolean}, userId: string) {

});