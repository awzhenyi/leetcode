---
tags:
 - Medium
---
One pass, use constants to store required information for computation on the fly

```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def nodesBetweenCriticalPoints(self, head: Optional[ListNode]) -> List[int]:
        critical_vals = []
        prev_val = -1
        idx = 1
        first_crit_idx = -1
        prev_crit_idx = -1
        min_dist, max_dist = 10**5 + 1, -1
        while head.next:
            if prev_val == -1:
                prev_val = head.val
                idx += 1
                head = head.next
            else:
                if (head.val > prev_val and head.val > head.next.val) or (head.val < prev_val and head.val < head.next.val):
                    if first_crit_idx == -1:
                        first_crit_idx = idx
                    else:
                        min_dist = min(min_dist, idx - prev_crit_idx)
                        max_dist = max(max_dist, idx - first_crit_idx)
                    prev_crit_idx = idx
                prev_val = head.val
                head = head.next
                idx += 1
        if max_dist == -1:
            return [-1, -1]
        return [min_dist, max_dist]

# Time Complexity: O(N)
# Space Complexity: O(1) some constants
```