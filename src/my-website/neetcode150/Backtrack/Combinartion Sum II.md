---
tags:
 - Medium
---

https://leetcode.com/problems/combination-sum-ii/

```python
class Solution:
    def combinationSum2(self, candidates: List[int], target: int) -> List[List[int]]:
        candidates.sort()
        output = []
        used = [0] * len(candidates)
        def backtrack(i, accum, path):
            if accum == target:
                output.append(path[:])
                return
            if accum > target:
                return
            
            for idx in range(i, len(candidates)):
                if idx > 0 and candidates[idx] == candidates[idx-1] and not used[idx-1]:
                    continue
                used[idx] = True
                path.append(candidates[idx])
                backtrack(idx+1, accum + candidates[idx], path)
                used[idx] = False
                path.pop()

        backtrack(0, 0, [])
        return output


# Time Complexity: O(2^N) each candidate can either be in a subset, or not.
# Space Complexity: O(N) recursion stack, if considering output size used then same as time complexity
```