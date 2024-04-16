/**
 * @param {number[]} bills
 * @return {boolean}
 */


var lemonadeChange = function(bills) {
    let dict = {
        '5': 0,
        '10': 0,
        '20': 0
    };
    let totalBillCount = 0;
    let keys = Object.keys(dict).reverse();
    
    function canProvideChange(bill) {
        if(bill === 0)
            return true;
        
        if(bill < 0)
            return false;
        
        for(let billKey of keys) {
            if((--dict[billKey]) >= 0 && (--totalBillCount >= 0) && canProvideChange(bill - parseInt(billKey)))
                return true;
            else {
                ++dict[billKey];
                ++totalBillCount;
            }
                
        } 
        
        return false;
    }    
    
    
    for(let i=0; i<bills.length; i++) {
        let bill = bills[i];
        
        if(bill === 5) {
            dict[bill]++;
            totalBillCount++;
        }
        else if(i !== 0 && canProvideChange(bill-5)) {
            dict[bill]++;
            totalBillCount++;
        } else {
            return false;
        }
    }
    
    return true;
};