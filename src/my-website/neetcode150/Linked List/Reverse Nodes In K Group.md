---
tags:
 - Hard
---

https://leetcode.com/problems/reverse-nodes-in-k-group/


```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseKGroup(self, head: Optional[ListNode], k: int) -> Optional[ListNode]:
        dummy = jump = ListNode(0)
        dummy.next = l = r = head
        while True:
            count = 0
            while r and count < k:
                r = r.next
                count += 1
            # r is now at the head of the next k group
            if count == k:
                prev, cur = r, l
                # reverse linked list for current k group
                for _ in range(k):
                    nxt = cur.next
                    cur.next = prev
                    prev = cur
                    cur = nxt
                # connect the previous tail to the head of current k group
                jump.next = prev
                # move the previous tail to the tail of current k group
                jump = l
                # move l and r pointers to the head of next k group
                l = r
            else:
                break
        return dummy.next


# Time Complexity: O(N)
# Space Complexity: O(1)
```