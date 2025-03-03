---
tags: 
 - Medium
---

https://leetcode.com/problems/3sum/

1. 2 pointers to improve on brute force O(N^3)
2. skipping duplicates with index check since list is now sorted
3. When found 1 answer, append and continue moving left and right pointer while skipping duplicates to discover more pairs

```python
class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        nums.sort()
        n = len(nums)
        ans = []
        for i in range(n-2):
            if i > 0 and nums[i] == nums[i-1]:
                continue
            remaining = 0 - nums[i]
            start, end = i+1, n-1
            while start < end:
                total = nums[start] + nums[end]
                if total == remaining:
                    ans.append([nums[i], nums[start], nums[end]])
                    while (start < end and nums[start+1] == nums[start]):
                        start += 1
                    while (start < end and nums[end] == nums[end-1]):
                        end -= 1
                    start += 1
                    end -= 1
                elif total > remaining:
                    end -= 1
                else:
                    start += 1
        return ans
            
# Time Complexity: O(N^2)
# Space Complexity: O(1)
```