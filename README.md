<p align="right">
<a href="https://badge.fury.io/js/%40veams%2Fcomponent-overlay"><img src="https://badge.fury.io/js/%40veams%2Fcomponent-overlay.svg" alt="npm version" height="18"></a>
    <a href="https://gitter.im/Sebastian-Fitzner/Veams?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge"><img src="https://badges.gitter.im/Sebastian-Fitzner/Veams.svg" alt="Gitter Chat" /></a>
</p>

# Overlay

## Description

It represents an overlay module. This module is responsible to create an overlay without predefining any inner overlay template.

It should be used by other modules to display their content in an overlay.

-----------

## Usage

The overlay component will be initialized without any markup reference. 
Next to that, it's only purpose is to open and close itself and display provided content. 

**How do you work with the overlay?**

It is really simple by using the publish/subscribe pattern. The overlay listens to:

- `EVENTS.overlay.open`
- `EVENTS.overlay.close`.

That means you only need to trigger the event and provide the content as a parameter. 

### Example

Let's display an image in our overlay component. As long as all requirements are fulfilled you can execute the following: 

``` js
Veams.Vent.publish(Veams.EVENTS.overlay.open, { content: '<img src="http://placehold.it/400x200" />' });
```

That's it.

### `overlay-usage.hbs`

Here you will find an `onclick` event which is just inlined to open the overlay. 
It is an easy way to show you a working example. 

But we suggest to use [@veams/component-cta](https://github.com/Veams/component-cta) for triggering global events out of the markup.

-----------

## Requirements

- [@veams/core](https://github.com/Veams/core) - Veams Core Framework.
- [@veams/query](https://github.com/Veams/query) or `jquery` - Veams Query or jQuery.
- [@veams/plugin-vent](https://github.com/Veams/plugin-vent) - Veams Events Plugin to provide a global publish/subscribe object.

-----------

## Installation

### Installation with Veams

``` bash
veams install component overlay
```
``` bash
veams -i c overlay
```

-----------

## JavaScript Options

The module gives you the possibility to override default options:

| Option | Type | Default | Description |
|:--- | :---: |:---: |:--- |
| openClass | String | `'is-open'` | Define the open class to open the overlay. |
| closeBtn | String | `'[data-js-item="overlay-close"]'` | Define the element for close button. |
| overlay | String | `'[data-js-item="overlay"]'` | Define the element for overlay. |
| regionContent | String | `'[data-js-item="overlay-content"]'` | Define the element for region content. |
