---
tags:
 - Medium
---

https://leetcode.com/problems/find-the-duplicate-number/

Solution 1: O(1) space but modifiy array:
- use index to mark whether the number has been seen before or not
```python
class Solution:
    def findDuplicate(self, nums: List[int]) -> int:
        for num in nums:
            cur = abs(num)
            if nums[cur] > 0:
                nums[cur] = -nums[cur]
            else:
                return cur
# Time Complexity: O(N)
# Space Complexity: O(1)
```
