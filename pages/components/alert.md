---
layout: page
title: Alert
category: alert
permalink: "/alert/"
sidenav: side-navigation
---

## Overview of Component Group

Alerts are used to convey a message to the user about system status or validation of an action (like a form submission). The user may or may not have to respond to an alert, depending on the message. The message uses different icons and colors to display meaning (i.e. red error vs. green success). They appear near the top of the page in an prominent place, usually above the H1, so the user will not miss it.

**When not to use alerts**
- Destructive interactions - If a user's action may delete work or unsave something, a different component should be used where a user has to confirm the action before doing it (like an overlay).
- Long forms - they should be used together, but not in place on in-line error message next to the exact input boxes where the error occurred, so a user knows where to go and how to fix it.


## Design
SAMHSA has three different alert options: Error, Information and Success. These come with a "large" and "slim" options. See the specifications section for more details

{% include /patterns/alert/alert.md %}


## Authoring
The author should have the ability to select an alert type as the first option on the backend - two radio buttons would suffice between "Large Alert" and "Slim Alert" - this would populate the rest of the page with the fields for either Large Alert or Slim Alert. The only field difference is a heading for large alert, and the character count (140 for large, vs. 280 for slim) for the main alert text in the rich text input box.

## Implementation
The code below shows and example of how to implement. Notice that the **samhsa-alert** class has been added to the top level div for the component. Adding this class will allow usage of SAMHSA styles which extend the USWDS styles. 

For more information about the component functionality and guidance, please see the [Alert detail page](https://designsystem.digital.gov/components/alert/) on the USWDS.

## Code
### HTML
```html
  {% include /patterns/alert/alert.md %}
```

### SCSS
```scss
  {% include /patterns/alert/alert.scss %}
```

