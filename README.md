<p align="right">
<a href="https://badge.fury.io/js/veams-component-overlay"><img src="https://badge.fury.io/js/veams-component-overlay.svg" alt="npm version" height="18"></a>
    <a href="https://gitter.im/Sebastian-Fitzner/Veams?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge"><img src="https://badges.gitter.im/Sebastian-Fitzner/Veams.svg" alt="Gitter Chat" /></a>
</p>

# Overlay

## Description

It represents an overlay module. This module is responsible to create an overlay without predefining any inner overlay template.

It should be used by other modules to display their content in an overlay.

-----------

## Requirements
- `Veams >= v5.0.0` - Veams Framework.

-----------

## Installation

### Installation with Veams

`veams install vc overlay`

-----------

## JavaScript Options

The module gives you the possibility to override default options:

- closeBtn {`String`} ['[data-js-item="overlay-close"]'] - _Define the element for close button._
- overlay {`String`} ['[data-js-item="overlay"]'] - _Define the element for overlay._
- regionContent {`String`} ['[data-js-item="overlay-content"]'] - _Define the element for region content._
- template {`Function`} [Template['OVERLAY']] - _Template function used to render overlay data._