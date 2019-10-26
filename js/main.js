'use strict';
/* global Monogatari */
/* global monogatari */
const { $_ready, $_ } = Monogatari;
$_ready (() => {
	monogatari.init('#monogatari').then (() => {
		var textbox = document.getElementsByTagName('text-box')[0];

		// change text box html structure
	    textbox.innerHTML = `
	      <div id='customCharacterName'>
	          <span data-ui="who" data-content="character-name"></span>
	      </div>
	      <div data-content="wrapper">
	        <div data-content="side-image">
	          <img data-ui="face" alt="" data-content="character_expression">
	        </div>
	        <div data-content="text">
	          <p data-ui="say" data_content="dialog"></p>
	        </div>
	      </div> `;
	});
});
