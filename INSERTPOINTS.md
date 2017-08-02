### Include: SCSS

``` scss
// @INSERT :: START @tag: scss-self-contained-import //
@import "../components/overlay/scss/_c-overlay";
// @INSERT :: END //
```

### Include: JavaScript

#### Import
``` js
/ @INSERT :: START @tag: js-self-contained-import //
import Overlay from '../components/overlay/js/overlay';
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