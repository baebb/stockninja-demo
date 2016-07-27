/**
 * Created by Cyril on 11/01/2016.
 */

/**
 * Take a number and reduce it to its maximum multiple of 10 with a suffix
 * 123456 -> 123k, 1000000 -> 1m
 * @param number
 * @param precision
 * @returns {string}
 */
function stringifyNumberWithSuffix(number, precision) {
    var suffix = '';
    var round = 1.0;
    precision = precision | 0;
    if (number >= 1000000000){ // 1 billion
        round = 1000000000.0;
        suffix = 'B'
    }
    else if(number >= 1000000){ // 1 million
        round = 1000000.0;
        suffix = 'm'
    }
    else if (number >= 1000) { // thousands
        round = 1000.0;
        suffix = 'k'
    }
    return (number/round).toFixed(precision).toString() + suffix;
}