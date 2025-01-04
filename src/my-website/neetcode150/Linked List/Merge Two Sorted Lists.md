---
tags:
 - Easy
---

https://leetcode.com/problems/merge-two-sorted-lists

1. create 2 dummy pointer that has the same reference. move 1, the other is used to return the answer.

```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
        dummy = curr = ListNode(0)
        while list1 and list2:
            if list1.val <= list2.val:
                curr.next = list1
                curr = curr.next
                list1 = list1.next
            else:
                curr.next = list2
                curr = curr.next
                list2 = list2.next
                
        curr.next = list1 if list1 else list2
        return dummy.next

# Time Complexity: O(N)
# Space Complexity: O(1)
```