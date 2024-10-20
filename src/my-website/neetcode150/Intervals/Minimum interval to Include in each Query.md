---
tags:
 - Hard
---

https://leetcode.com/problems/minimum-interval-to-include-each-query/

```python
class Solution:
    def minInterval(self, intervals: List[List[int]], queries: List[int]) -> List[int]:
        intervals = sorted(intervals, reverse=True)
        heap = []
        queries_to_res_map = {}
        for query in sorted(queries):
            while intervals and intervals[-1][0] <= query:
                start, end = intervals.pop()
                if end >= query:
                    heapq.heappush(heap, (end - start + 1, end))
                
            while heap and heap[0][1] < query:
                heapq.heappop(heap)

            queries_to_res_map[query] = heap[0][0] if heap else -1
                
        return [queries_to_res_map[query] for query in queries]
# Time Complexity: O(n log n + m log m), where n is the number of intervals and m is the number of queries.
# Space Complexity: O()
```
