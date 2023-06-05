var nextLargerNodes = function(head) {
    let ans = [];
    let stack = [];
    let curr = head;

    while(curr) {

        while(stack.length && stack[stack.length - 1].val < curr.val) {
            ans[stack.pop().idx] = curr.val;
        }

        stack.push({val: curr.val, idx: ans.length})
        curr = curr.next;
        ans.push(0);
    }
    
    return ans;
};