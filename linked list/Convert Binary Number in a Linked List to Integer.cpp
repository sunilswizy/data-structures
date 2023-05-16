class Solution {
public:
    int getDecimalValue(ListNode* head) {
        int sum = 0;
        while(head) {
            sum += head->val;
            sum *= 2;
            head = head->next;
        }
        return sum / 2;
    }
};