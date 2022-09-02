/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    const arrLength = height.length;
        let lheight = 0, rheight = 0, water = 0;
        let leftB = [];
        let rightB = [];

        for(let i = 0; i < arrLength; i++) {
            if(lheight > height[i]) {
                leftB.push(lheight);
            } else {
                lheight = height[i];
                leftB.push(0);
            }

            if(rheight > height[arrLength-i-1]) {
                rightB.unshift(rheight);
            } else {
                rheight = height[arrLength-i-1];
                rightB.unshift(0);
            }
        }
        for(let i = 0; i < arrLength; i++) {
            if(leftB[i] && rightB[i]) {
                water  += Math.min(leftB[i], rightB[i]) - height[i];
            }
        }
        return water;
    
};