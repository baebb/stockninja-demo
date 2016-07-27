// Create a custom function helper to check the event is close enough.
// distanceToEvent and threshold are parameters that come from the event.hbs file where
// this helper is called.
// the options param is some other object that contains two functions, fn() and inverse().
// These are both standard hbs template functions that return HTML.
// options.fn() is a hbs template for the body of this custom helper block
// from the hbs template. options.inverse() is the else clause.
// this is the context object given to the original template,
// so fn(this) will process the body of this clause within the templates context.
Handlebars.registerHelper('closeEvent', function (distanceToEvent, threshold, options){
    if (distanceToEvent < threshold) {
        return options.fn(this);
    } else {
        return options.inverse(this);
    }
});
