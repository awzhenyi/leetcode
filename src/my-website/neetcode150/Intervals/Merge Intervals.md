---
tags:
 - Medium
---

https://leetcode.com/problems/merge-intervals/

same way to merge intervals, with the min and max if the intervals overlap

```python
class Solution:
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        intervals.sort(key = lambda x:x[0])
        res = []
        for interval in intervals:
            if not res:
                res.append(interval)
            elif res[-1][1] >= interval[0]:
                res[-1][0] = min(res[-1][0], interval[0])
                res[-1][1] = max(res[-1][1], interval[1])
            else:
                res.append(interval)
        return res
        


# Time Complexity: O(N)
# Space Complexity: O(N)
```