/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function(items, ruleKey, ruleValue) {
    console.log(items, ruleKey, ruleValue)
    return items
    .map(([type, color, name]) => ({ type, color, name }))
    .filter(obj => obj[ruleKey] === ruleValue).length
};