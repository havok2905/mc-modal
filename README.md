# Mc-modal

A modal window addon built with white labeling, BEM style syntax, testability, and ease of implementation in mind.

## Doc Generation

This package uses jsdoc.

`npm install jsdoc -g`

`jsdoc ./addon/**/*.js`

## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Successfull Ember Versions Tested Against

- 1.13.13
- 2.6.2
- 2.7.0-beta.4
- 2.7.0-canart+c63793d7

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://ember-cli.com/](http://ember-cli.com/).

## Todos
- Manually test against many page types and site layouts
- Minor styling tweaks across browsers

## Usage

### Ember Component

**./app/templates/index.hbs**

```hbs
{{#mc-modal displayable=true
            closable=true
            headerText='MC MODAL HEADER'
            footerText='MC MODAL FOOTER'}}

  <p>Stuff</p>

{{/mc-modal}}
```

#### Params

- **displayable**: Boolean responsible to toggling the modal instance
- **closable**: Boolean responsible for displaying the close button in the header
- **headerText**: String text to display in the header
- **footerText**: String text to display in the footer

#### Available Actions

- **closeModal** <Void> toggles the displayable property to false

#### Available Computed Properties

- **contentNeedsTopRounding** <String> provides class to round corners in case of a missing header
- **contentNeedsBottomRounding** <String> provides class to round corners in case of a missing footer

### Removing The Header and Footer

./app/templates/index.hbs

```hbs
{{#mc-modal displayable=true
            closable=null
            headerText=null
            footerText=null}}

  <p>Stuff</p>

{{/mc-modal}}
```

### Handling Multiple Modals

**./app/controllers/index.js**

```javascript
import Ember from 'ember';
import McModalToggle from 'mc-modal/mixins/mc-modal-toggle';

export default Ember.Controller.extend(McModalToggle, {
  first:  false,
  second: false
});
```

**./app/templates/index.hbs**
```hbs
{{#mc-modal displayable=first
            closable=true
            headerText='MC MODAL HEADER'
            footerText='MC MODAL FOOTER'}}

  <p>Stuff</p>
  <button {{ action 'disable' 'first' }}>Close</button>

{{/mc-modal}}

{{#mc-modal displayable=second
            closable=true
            headerText='MC MODAL HEADER'
            footerText='MC MODAL FOOTER'}}

  <p>Stuff</p>
  <button {{ action 'disable' 'second' }}>Close</button>

{{/mc-modal}}
```

### Overwriting Styles

#### Style Hooks

This component uses a BEM style naming convention for all selectors. The following classes are as such.

- .mc-modal: Establishes z-indexes, scrollability, and overlay
- .mc-modal__wrapper: The container that holds content, header, and footer
- .mc-modal__content: Container for your injected content
- .mc-modal__header: Container for header text and exit button
- .mc-modal__footer: Container for a blurb of text in the footer
- .mc-modal__close-icon: Icon that triggers a change on the display toggle for a modal

These selectors all have a specificity of 0010 and use no !importants.

#### Variables

For white labeling and more common customization, the following variables can be overwritten.

##### Heights
- **$mc-modal-z-index**: Number;

##### Radius
- **$mc-modal-border-radius**: Pixels;

##### Widths
- **$mc-modal-width**: Percent;

##### Padding
- **$mc-modal-padding**: Pixels

##### Background Colors
- **$mc-modal-overlay-background-color-a**: Color
- **$mc-modal-overlay-background-color-b**: Color
- **$mc-modal-content-background-color**: Color
- **$mc-modal-header-background-color**: Color
- **$mc-modal-footer-background-color**: Color
- **$mc-modal-shadow-color**: Color

##### Font Colors
- **$mc-modal-header-text-color**: Color
- **$mc-modal-content-text-color**: Color
- **$mc-modal-footer-text-color**: Color
