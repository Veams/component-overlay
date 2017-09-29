## Usage

### Include: JavaScript

#### Initializing in Veams V5
``` js
// @INSERT :: START @tag: js-init-once-v5 //
/**
 * Init Overlay
 */
new Overlay({
    appInstance: Veams
});
// @INSERT :: END //
```

#### Custom Events
``` js
// @INSERT :: START @tag: js-events //
/**
 * Events Overlay
 */
EVENTS.overlay = {
	open: 'overlay:open'
};
// @INSERT :: END //
```