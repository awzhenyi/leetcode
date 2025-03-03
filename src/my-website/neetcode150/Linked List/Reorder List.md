---
tags:
 - Medium
---

https://leetcode.com/problems/reorder-list

```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reorderList(self, head: Optional[ListNode]) -> None:
        """
        Do not return anything, modify head in-place instead.
        """
        # go to middle
        second_half = end = head
        while end and end.next:
            second_half = second_half.next
            end = end.next.next
        
        # Disconnect the first half from the second half
        temp = second_half.next
        second_half.next = None
        second_half = temp
        # Step 2: Reverse the second half
        reversed_second_half = None
        while second_half:
            nxt = second_half.next
            second_half.next = reversed_second_half
            reversed_second_half = second_half
            second_half = nxt
        
        # Step 3: Merge the two halves
        first_half = head
        while reversed_second_half:
            first_half_next, reversed_second_half_next = first_half.next, reversed_second_half.next
            first_half.next = reversed_second_half
            reversed_second_half.next = first_half_next
            first_half, reversed_second_half = first_half_next, reversed_second_half_next

# Time Complexity: O(N)
# Space Complexity: O(1)
```

