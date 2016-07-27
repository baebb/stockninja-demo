/*
 * Customized jQuery Highlight plugin
 *
 * Based on highlight v3 by Johann Burkard
 * http://johannburkard.de/blog/programming/javascript/highlight-javascript-text-higlighting-jquery-plugin.html
 *
 * Code a little bit refactored and cleaned (in my humble opinion).
 * Most important changes:
 *  - has an option to highlight only entire words (wordsOnly - false by default),
 *  - has an option to be case sensitive (caseSensitive - false by default)
 *  - highlight element tag and class names can be specified in options
 *
 * Usage:
 *   // wrap every occurrance of text 'lorem' in content
 *   // with <span class='highlight'> (default options)
 *   $('#content').highlight('lorem');
 *
 *   // search for and highlight more terms at once
 *   // so you can save some time on traversing DOM
 *   $('#content').highlight(['lorem', 'ipsum']);
 *   $('#content').highlight('lorem ipsum');
 *
 *   // search only for entire word 'lorem'
 *   $('#content').highlight('lorem', { wordsOnly: true });
 *
 *   // don't ignore case during search of term 'lorem'
 *   $('#content').highlight('lorem', { caseSensitive: true });
 *
 *   // wrap every occurrance of term 'ipsum' in content
 *   // with <em class='important'>
 *   $('#content').highlight('ipsum', { element: 'em', className: 'important' });
 *
 *   // remove default highlight
 *   $('#content').unhighlight();
 *
 *   // remove custom highlight
 *   $('#content').unhighlight({ element: 'em', className: 'important' });
 *
 *
 * Copyright (c) 2009 Bartek Szopka
 *
 * Licensed under MIT license.
 *
 */

jQuery.extend({
    highlight: function (node, re, nodeName, className) {
        var wholeText = node.wholeText;
        if (node.nodeType === 3) {
            var match = node.data.replace('é', 'e').match(re);
            var match = node.data.match(re);
            if (match) {
                var highlight = document.createElement(nodeName || 'span');
                highlight.className = className || 'highlight';
                var wordNode = node.splitText(match.index);
                var matchedWord = match[0];
                var charOffset = wholeText.indexOf(matchedWord + "'") == match.index ? 1 : 0;
                wordNode.splitText(match[0].length + charOffset);
                var wordClone = wordNode.cloneNode(true);
                highlight.appendChild(wordClone);
                var dataMatch = $(wordClone).text();
                dataMatch = dataMatch.replace(/'s?|’s?/, '');
                setAttr(highlight, dataMatch);// counting dataMatches and giving them ids
                highlight.setAttribute('data-match', dataMatch);
                wordNode.parentNode.replaceChild(highlight, wordNode);
                return 1; //skip added node in parent
            }
        } else if ((node.nodeType === 1 && node.childNodes) && // only element nodes that have children
            !/(script|style)/i.test(node.tagName) && // ignore script and style nodes
            !(node.tagName === nodeName.toUpperCase() && node.className === className)) { // skip if already highlighted
            for (var i = 0; i < node.childNodes.length; i++) {
                i += jQuery.highlight(node.childNodes[i], re, nodeName, className);
            }
        }
        return 0;
    }
});


//counting dataMatches
var hashCount = {};

function setAttr(object, dataMatch) {

    if (!hashCount[dataMatch]) {
        hashCount[dataMatch] = 0;
    }

    object.setAttribute('data-match-id', dataMatch + hashCount[dataMatch]);

    hashCount[dataMatch] ++;

}
//done counting dataMatches

jQuery.fn.unhighlight = function (options) {
    var settings = {
        className: 'highlight',
        element: 'span'
    };
    jQuery.extend(settings, options);

    return this.find(settings.element + "." + settings.className).each(function () {
        var parent = this.parentNode;
        parent.replaceChild(this.firstChild, this);
        parent.normalize();
    }).end();
};

jQuery.fn.highlight = function (words, options) {
//    console.log('highlight for', arguments);
    var settings = {
        className: 'highlight',
        element: 'span',
        caseSensitive: false,
        wordsOnly: false,
        fullMatch: false
    };
    jQuery.extend(settings, options);

    if (words.constructor === String) {
        words = [words];
    }
    words = jQuery.grep(words, function (word, i) {
        return word != '';
    });
    words = jQuery.map(words, function (word, i) {
        return word.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
    });
    if (words.length == 0) {
        return this;
    }

    var flag = settings.caseSensitive ? "" : "i";
    /*-----------------------------------------
     * Update by Cyril for taking into consideration name like "Andrew W.K."
     *-----------------------------------------
     */
    var pattern = "";
    if (settings.wordsOnly) {
        pattern = words.join("(?![a-zA-Z0-9])|");
    } else {
        pattern = words.join("|");
    }
    pattern = pattern.replace(/\|/gi, "[’']?s?|");
    pattern = "(" + pattern + "[’']?s?" + ")";
    //if (settings.wordsOnly) {
    //    pattern = "\\b" + pattern + "\\b";
    //}

    if (settings.fullMatch) { //fullMatch SNop
        pattern = "^" + pattern + "$";
    }
    pattern = pattern.replace("é", "e"); //beyonce stuff
    var re = new RegExp(pattern, flag);

    return this.each(function () {
        jQuery.highlight(this, re, settings.element, settings.className);
    });
};