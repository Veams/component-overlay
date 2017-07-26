### Include: SCSS

``` scss
// @INSERT :: START @tag: scss-import //
@import "blocks/_c-overlay";
// @INSERT :: END //

// @INSERT :: START @tag: scss-self-contained-import //
@import "../templating/partials/components/overlay/scss/_c-overlay";
// @INSERT :: END //
```

### Include: JavaScript

#### Import
``` js
// @INSERT :: START @tag: js-import //
import Overlay from './modules/overlay/overlay';
// @INSERT :: END //

/ @INSERT :: START @tag: js-self-contained-import //
import Overlay from '../templating/partials/components/overlay/js/overlay';
// @INSERT :: END //
```

#### Initializing
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