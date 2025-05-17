---
tags:
 - Medium
 - Tiktok
---

https://leetcode.com/problems/find-peak-element

Binary search
1. Peak element lies at the end of some sorted sequence
2. take any number, if it is bigger than the right neighbour, we can eliminate the right half of the array, since the right element lies in the decreasing sequence.
3. Since this number could still be the peak element, we keep mid in our search space, so only shrink to `r = mid`.
4. Else, l = mid + 1, because if i am not bigger than my right neighbour, i lie somewhere on the increasing sequence but not peak element. so everything left is smaller and can be eliminated as well.

```python
class Solution:
    def findPeakElement(self, nums: List[int]) -> int:
        l, r = 0, len(nums) - 1
        while l < r:
            mid = (l + r) // 2
            if nums[mid] > nums[mid + 1]:
                r = mid
            else:
                l = mid + 1
        return l
# Time Complexity: O(log N)
# Space Complexity: O(1)
```
O(N) linear scan + preprocess

```python
class Solution:
    def findPeakElement(self, nums: List[int]) -> int:
        nums = [-inf] + nums + [-inf]
        for i, num in enumerate(nums):
            if i > 0 and i < len(nums)-1:
                if num > nums[i-1] and num > nums[i+1]:
                    return i-1
# Time Complexity: O(N)
# Space Complexity: O(1)
```
