---
tags:
 - Medium

sidebar_position: 2
---

https://leetcode.com/problems/combination-sum-ii/

- Unique combinations + each combination the number can only be used once
- 
```python
class Solution:
    def combinationSum2(self, candidates: List[int], target: int) -> List[List[int]]:
        candidates.sort()
        output = []
        n = len(candidates)
        def backtrack(i, accum, path):
            if accum > target:
                return

            if accum == target:
                output.append(path[:])

            for idx in range(i, n):
                if idx > i and candidates[idx] == candidates[idx - 1]: # similar to skipping duplicates for 3sum
                    continue
                path.append(candidates[idx])
                backtrack(idx+1, accum + candidates[idx], path)
                path.pop()

        backtrack(0, 0, [])
        return output

# Time Complexity: O(2^N) each candidate can either be in a subset, or not.
# Space Complexity: O(N) recursion stack, if considering output size used then same as time complexity
```