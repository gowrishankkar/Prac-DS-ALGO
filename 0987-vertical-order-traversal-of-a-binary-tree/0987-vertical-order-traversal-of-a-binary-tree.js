/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */var verticalTraversal = function(root) 
{
        let colMap = {}, min=0,max=0;
        
        const dfs = function(node,x=0,y=0)
        {
                if(node === null)
                        return;
                
                /* Push the item onto the appropriate x listing. */
                let item = colMap[x];
                if(item === undefined)
                {
                        item = [];
                        min = Math.min(min,x);
                        max = Math.max(max,x);
                }
                item.push({y,val:node.val});
                colMap[x] = item;
                dfs(node.left,x-1,y+1);
                dfs(node.right,x+1,y+1);
        }

        dfs(root);

        let result = [];
        for(let i=min; i<= max; i++)
        {
                colMap[i].sort((a,b)=>(a.y===b.y)?a.val-b.val:a.y-b.y);
                result.push(colMap[i].map(el=>el.val));
        }

        return result;
};