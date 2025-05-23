---
tags:
 - Medium
---

https://leetcode.com/problems/add-two-numbers/

Since the linked list are provided in reversed, we do not need to do additional processing. Else we can reverse the linked list first
Use a variable 'carry' to track the number to be formed. carry over if it is bigger than 10.

```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def addTwoNumbers(self, l1, l2):
        carry = 0
        dummy = head = ListNode(0)
        while l1 or l2 or carry:
            if l1:
                carry += l1.val
                l1 = l1.next
            if l2:
                carry += l2.val
                l2 = l2.next
            carry, val = divmod(carry, 10)
            head.next = ListNode(val)
            head = head.next
        return dummy.next
# Time Complexity: O(N + M)
# Space Complexity: O(N + M)
```
