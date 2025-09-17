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
# Time Complexity: O(N + M)
# Space Complexity: O(U), U is the number of unique elements in nums1 and nums2
```

if the lists are sorted, use 2 pointers instead of having to store in map
```python
class Solution:
    def intersect(self, nums1: List[int], nums2: List[int]) -> List[int]:
        nums1, nums2 = sorted(nums1), sorted(nums2)
        i = j = 0
        res = []
        while i < len(nums1) and j < len(nums2):
            if nums1[i] == nums2[j]:
                res.append(nums1[i])
                i += 1
                j += 1
            elif nums1[i] < nums2[j]:
                i += 1
            else:
                j += 1
        return res
# Time Complexity: O(N + M), sorting ignored
# Space Complexity: O(1)
```

