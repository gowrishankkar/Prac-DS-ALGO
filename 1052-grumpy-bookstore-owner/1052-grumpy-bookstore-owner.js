/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} minutes
 * @return {number}
 */
var maxSatisfied = function(customers, grumpy, X) {
    //1 means they are grumpy
    // find all the users who can not be satsified because the owner is grumpy
    let happycustomers = 0
    let happiableusers = []
    let happiest = 0
    let currentHappiable = 0
    for (let i =0; i<customers.length; i++){
        if(grumpy[i]===0){
            happycustomers+=customers[i]
            happiableusers.push(0)
            if(happiableusers.length===X){
                happiest= happiest>currentHappiable? happiest: currentHappiable
                let delta = happiableusers.shift()
                currentHappiable-=delta
            }
        }
        else {
            happiableusers.push(customers[i])
            currentHappiable+=customers[i]
            if(happiableusers.length===X){
                happiest= happiest>currentHappiable? happiest: currentHappiable
                let delta = happiableusers.shift()
                currentHappiable-=delta
            }
        }
    }
    return happiest+happycustomers
}