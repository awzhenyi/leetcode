---
tags:
 - Medium
---

https://leetcode.com/problems/insert-interval/

Process Intervals by the start up till the merge, handle the merging and then process the rest

```python
class Solution:
    def insert(self, intervals: List[List[int]], newInterval: List[int]) -> List[List[int]]:
        if not intervals:
            return [newInterval]
        final_intervals = []
        i = 0
        n = len(intervals)
        #Process everything until the merging of intervals
        while i < n and intervals[i][1] < newInterval[0]:
            final_intervals.append(intervals[i])
            i += 1
        
        #Process the merge
        merged_interval = [newInterval[0], newInterval[1]]
        while i < n and intervals[i][0] <= merged_interval[1]:
            merged_interval[0] = min(merged_interval[0], intervals[i][0])
            merged_interval[1] = max(merged_interval[1], intervals[i][1])
            i += 1

        final_intervals.append(merged_interval)

        #Process the rest
        while i < n:
            final_intervals.append(intervals[i])
            i += 1

        return final_intervals
# Time Complexity: O(N)
# Space Complexity: O(N)
```