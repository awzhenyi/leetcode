---
tags:
 - Easy
---

https://leetcode.com/problems/intersection-of-two-arrays-ii

```python
class Solution:
    def intersect(self, nums1: List[int], nums2: List[int]) -> List[int]:
        count1 = Counter(nums1)
        count2 = Counter(nums2)
        if len(count1) > len(count2):
            count1, count2 = count2, count1
        intersection = []
        for num, freq in count1.items():
            if num in count2:
                min_freq = min(freq, count2[num])
                intersection.extend([num] * min_freq)
        return intersection
# Time Complexity: O(N)
# Space Complexity: O(N)
```
