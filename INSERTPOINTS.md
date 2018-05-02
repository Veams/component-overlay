## Usage

### Include: JavaScript

#### Initializing in Veams

``` js
// @INSERT :: START @tag: js-init-once //
/**
 * Init Overlay
 */
const overlay = new Overlay({
	context: Veams
});

overlay.create(); 
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
