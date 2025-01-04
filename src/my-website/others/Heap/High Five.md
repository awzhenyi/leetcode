---
tags:
 - Easy
---

https://leetcode.com/problems/high-five

```python
class Solution:
    def highFive(self, items: List[List[int]]) -> List[List[int]]:
        count = defaultdict(list)
        for id, score in items:
            heapq.heappush(count[id], score)
            if len(count[id]) > 5:
                heapq.heappop(count[id])
        ans = []
        for id in sorted(count.keys()):
            ans.append([id, sum(count[id])//len(count[id])])
        return ans
# Time Complexity: O(N + k log k), k = number of unique ids
# Space Complexity: O(k)
```