---
tags:
 - Medium
---

https://leetcode.com/problems/remove-nth-node-from-end-of-list/

2 pointers, 1 go to n first. then start iterating both, when the "fast" pointer reaches end of list, "slow" pointer will be at the node to be removed.

```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:
        slow = fast = head
        for _ in range(n):
            fast = fast.next

        # To account for linked list of length 2    
        if not fast:
            return slow.next
        
        while fast.next:
            slow = slow.next
            fast = fast.next
        
        slow.next = slow.next.next
        
        return head
        
        
# Time Complexity: O(N)
# Space Complexity: O(1)
```