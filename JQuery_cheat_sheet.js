// ***SUPER IMPORTANT***

$(document).ready(function() { })

// Always wrap your entire JQuery file in this funtion.
// This will make it so that event listeners will only begin to be placed
// once the document is ready to receive them.  It's difficult, but not
// impossible, to attach an event listener to something that isn't there.
// Wrapping your file in this will prevent that from happening.

// ***THE JQUERY SELECTOR***

$('element')

// This allows you to hone in on (select) a particular element to
// change, or to listen to events on.

// ***EVENT LISTENERS***

$('element').on('event', function() {

});
// Where 'element' is a CSS selector, or a tag name,
// 'event' is the event you're listening for (eg click, scroll, typing...),
// and the code in the block is what you want executed on that event.

$('#temp-up').on('click', function(){
  thermostat.increaseTemperature();
});

// Here, #temp-up is a button id (in our html file), click is the event and
// inside the block is the js function we call upon that click.

// ***UPDATING THE VIEW***

$('element').someKeyword(someFunction());

// Where 'element' is as before, the keyword tells the file what kind
// of output you want (essentially) and the function is what you want the
// output from to end up in that element.

$('#energy>p').text(thermostat.currentEnergyUsage());

// Here, '#energy>p' locates the div with an id of 'energy', finds the first
// <p> tag within that div, calls thermostat.currentEnergyUsage() and replaces
// the text output from that function into the specified element (energy>p)
