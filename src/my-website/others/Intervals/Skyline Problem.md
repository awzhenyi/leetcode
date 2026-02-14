---
tags:
 - Hard
---

https://leetcode.com/problems/the-skyline-problem

```python
class Solution:
    def getSkyline(self, buildings: List[List[int]]) -> List[List[int]]:
        events = []
        for l, r, h in buildings:
            events.append((l, -h, r)) #Add start events, L, -H, R. This arrange is because u want to process the smallest x coordinate first, and for the same x coordinate, you want to process the highest building first, because only the highest building will contribute to the skyline.
            events.append((r, 0, 0)) #Add end events, R, 0, 0. 
        events = sorted(events)
        res = []
        max_heap = [(0,inf)] #initialise a heap with a [0, inf] event representing the [height, end_point] so it will never be popped. With a height of 0, when there are no active buildings, it forms a skyline at the height 0. 
        for l, h, r in events:
            while max_heap[0][1] <= l: #pop the events that have "ended". (ie R is < L)
                heapq.heappop(max_heap)
            if h < 0:
                heapq.heappush(max_heap, (h, r)) #pop start event to track "highest height"
            if not res or res[-1][1] != -max_heap[0][0]: # Add the contour. This is also to add the end_event height after popping.
                res.append([l, -max_heap[0][0]])
        return res

# Time Complexity: O(N log N)
# Space Complexity: O(N)
```
