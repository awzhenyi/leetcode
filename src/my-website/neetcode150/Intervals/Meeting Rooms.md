---
sidebar_position: 1
tags:
 - Easy
---

https://leetcode.com/problems/meeting-rooms

Just sort and check for overlaps

```python
class Solution:
    def canAttendMeetings(self, intervals: List[List[int]]) -> bool:
        intervals.sort()
        for i in range(len(intervals) - 1):
            if intervals[i][1] > intervals[i+1][0]:
                return False
        return True

# Time Complexity: O(N log N)
# Space Complexity: O(1)
```