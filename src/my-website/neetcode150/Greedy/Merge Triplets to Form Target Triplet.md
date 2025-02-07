---
tags:
 - Medium
---

https://leetcode.com/problems/merge-triplets-to-form-target-triplet/

valid pick if none of the elements is greater than target. use 3 booleans to represent if target is matched.

```python
class Solution:
    def mergeTriplets(self, triplets: List[List[int]], target: List[int]) -> bool:
        l, m, r = False, False, False
        for x, y, z in triplets:
            # invalid pick
            if x > target[0] or y > target[1] or z > target[2]:
                continue    
            # valid pick
            if x == target[0]:
                l = True
            if y == target[1]:
                m = True
            if z == target[2]:
                r = True
        return l and m and r
# Time Complexity: O(N)
# Space Complexity: O(1)
```