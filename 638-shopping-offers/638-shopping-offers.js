/**
 * @param {number[]} price
 * @param {number[][]} special
 * @param {number[]} needs
 * @return {number}
 */
var shoppingOffers = function(price, special, needs) {
      let ret = price.reduce((acc, e, i) => acc + price[i] * needs[i], 0);
    
    for (let s of special) {
        let sPrice = [...s].pop();
        let negativeFlag = false;
        let nextNeeds = needs.map((e, i) => {
            let val = e - s[i];
            if (val < 0) negativeFlag = true;
            return val;
        });
        if (!negativeFlag) {
            ret = Math.min(ret, sPrice + shoppingOffers(price, special, nextNeeds));
        }
    }
    
    return ret;
};