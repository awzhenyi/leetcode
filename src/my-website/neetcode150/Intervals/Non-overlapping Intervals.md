---
tags:
 - Medium
---

https://leetcode.com/problems/non-overlapping-intervals

remove minimum overlapping intervals -> greedy select by end time (same as maximum meeting you can squeeze in)
so just have a curr interval to compare and count number to removed.

```python
class Solution:
    def eraseOverlapIntervals(self, intervals: List[List[int]]) -> int:
        intervals.sort(key=lambda x: x[1])
        curr = intervals[0]
        removed = 0
        for interval in intervals[1:]:
            if curr[1] > interval[0]:
                removed += 1
            else:
                curr = interval
        return removed
# Time Complexity: O(N)
# Space Complexity: O(N)
```