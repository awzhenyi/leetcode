---
tags:
 - Easy
---

https://leetcode.com/problems/two-sum

just keep a map where key = num and val = index

```python
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        num_to_idx_map = {}
        for i, num in enumerate(nums):
            if target - num in num_to_idx_map:
                return [i, num_to_idx_map[target-num]]
            num_to_idx_map[num] = i
# Time Complexity: O(N)
# Space Complexity: O(N)
```