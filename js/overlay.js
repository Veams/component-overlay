/**
 * Represents an overlay module.
 *
 * This module is responsible to create an overlay
 * without predefining any inner overlay template.
 *
 * It should be used by other modules
 * to display their content in an overlay.
 *
 * @module Overlay
 * @version v3.0.0
 *
 * @author Sebastian Fitzner
 */
import {Veams} from 'app';
import VeamsComponent from 'veams/src/js/common/component';
const $ = Veams.$;
let Template = Veams.templater.templates;

class Overlay extends VeamsComponent {
	/**
	 * Constructor for our class
	 *
	 * @see module.js
	 *
	 * @param {Object} obj - Object which is passed to our class
	 * @param {Object} obj.el - element which will be saved in this.el
	 * @param {Object} obj.options - options which will be passed in as JSON object
	 */
	constructor(obj) {
		let options = {
			openClass: 'is-open',
			closeBtn: '[data-js-item="overlay-close"]',
			overlay: '[data-js-item="overlay"]',
			regionContent: '[data-js-item="overlay-content"]',
			template: Template['OVERLAY']
		};

		super(obj, options);
	}

	/** =================================================
	 * GETTER & SETTER
	 * ================================================ */

	/**
	 * Get module information
	 */
	static get info() {
		return {
			version: '3.0.0',
			vc: true,
			mod: false // set to true if source was modified in project
		};
	}

	// set and get overlay template
	get template() {
		return this._template;
	}

	set template(tpl) {
		this._template = tpl;
	}

	// set and get infos if overlay is created
	get overlayCreated() {
		return this._overlayCreated;
	}

	set overlayCreated(bol) {
		this._overlayCreated = bol;
	}

	// set and get infos if overlay is open
	get isOpen() {
		return this._isOpen;
	}

	set isOpen(bol) {
		this._isOpen = bol;
	}

	// set and get overlay element after creation
	get $overlay() {
		return this._$overlay;
	}

	set $overlay(el) {
		this._$overlay = el;
	}

	// set and get close button after creation
	get $closeBtn() {
		return this._$closeBtn;
	}

	set $closeBtn(el) {
		this._$closeBtn = el;
	}

	// set and get content region
	get $regionContent() {
		return this._$regionContent;
	}

	set $regionContent(el) {
		this._$regionContent = el;
	}

	/** =================================================
	 * EVENTS
	 * ================================================ */

	get subscribe() {
		return {
			'{{Veams.EVENTS.overlay.open}}': 'render'
		};
	}

	/**
	 * Bind global events
	 *
	 * Listen to open and close events
	 */
	bindEvents() {
		// Close overlay with ESC
		$(window).on(Veams.EVENTS.keyup, (e) => {
			if (e.keyCode == 27 && this.isOpen) {
				this.close();
			}
		});
	}

	/**
	 * Bind local events
	 */
	bindLocalEvents() {
		let fnClose = this.close.bind(this);

		// Local events
		this.$closeBtn.on(Veams.EVENTS.click, fnClose);
	}

	/** =================================================
	 * STANDARD METHODS
	 * ================================================= */

	/**
	 * Initialize the view and merge options
	 *
	 */
	initialize() {
		this.$body = $('body');
		this.template = this.options.template;

	}

	/**
	 * Pre-Render the overlay and save references
	 */
	preRender() {
		// Append FE template
		this.$body.append(this.template());

		// Set some references
		this.$overlay = $(this.options.overlay);
		this.$closeBtn = $(this.options.closeBtn, this.$overlay);
		this.$regionContent = $(this.options.regionContent, this.$overlay);

		this.overlayCreated = true;
		this.bindLocalEvents();
	}

	/**
	 * Render the overlay
	 */
	render(obj) {
		let data = obj.data || (obj.options && obj.options.data);

		// Check if data object is provided
		if (!data) {
			console.warn('Overlay: You have to provide an object with data (obj.data || obj.options.data)!');
			return;
		}

		// Append data to overlay region
		this.$regionContent.html(data);

		// Open overlay
		this.open();
	}

	/** =================================================
	 * CUSTOM OVERLAY METHODS
	 * ================================================= */

	/**
	 * Open Overlay
	 */
	open() {
		this.$overlay.addClass(this.options.openClass);
		this.isOpen = true;
	}

	/**
	 * Close overlay
	 */
	close() {
		this.$overlay.removeClass(this.options.openClass);
		this.isOpen = false;
	}
}

export default Overlay;