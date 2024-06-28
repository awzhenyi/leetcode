https://leetcode.com/problems/maximum-total-importance-of-roads/description

Greedy plus loose in_degrees + out_degrees usage

```python
class Solution:
    def maximumImportance(self, n: int, roads: List[List[int]]) -> int:
        degrees = [0] * n
        for u, v in roads:
            degrees[u] += 1
            degrees[v] += 1
        degrees.sort()
        ans = 0
        i = 1
        for d in degrees:
            ans += (d * i)
            i += 1
        return ans
        
# Time Complexity: O()
# Space Complexity: O()
```