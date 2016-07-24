# Mc-modal

A modal window addon built with white labeling, BEM style syntax, testability, and ease of implementation in mind.

## Installation

* `git clone` this repository
* `npm install`
* `bower install`

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

- Simplify the id based toggling because its annoying. Probably some meta programming magic can make this work.

- Make the current theme not suck.

- Write acceptance tests against multiple modals running simultaneously.

- Test for backwards compatibility across older Ember versions.

## Usage

### Ember Component

**./app/templates/index.hbs**

```hbs
{{#mc-modal displayable=firstModalDisplayable
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

### Handling Multiple Modals

**./app/controllers/index.js**

```javascript
import Ember from 'ember';
import McModalToggle from 'mc-modal/mixins/mc-modal-toggle';

export default Ember.Controller.extend(McModalToggle, {
  firstModalDisplayable:  false,
  secondModalDisplayable: false
});
```

**./app/templates/index.hbs**
```hbs
{{#mc-modal displayable=firstModalDisplayable
            closable=true
            headerText='MC MODAL HEADER'
            footerText='MC MODAL FOOTER'}}

  <p>Stuff</p>
  <button {{ action 'disable' 'first' }}>Close</button>

{{/mc-modal}}

{{#mc-modal displayable=secondModalDisplayable
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
- **$mc-modal-background-color**: RGBA
- **$mc-modal-overlay-background-color**: RGBA
- **$mc-modal-content-background-color**: RGBA
- **$mc-modal-header-background-color**: Hex
- **$mc-modal-footer-background-color**: Hex
- **$mc-modal-shadow-color**: Hex

##### Font Colors
- **$mc-modal-header-text-color**: Hex
- **$mc-modal-content-text-color**: Hex
- **$mc-modal-footer-text-color**: Hex
