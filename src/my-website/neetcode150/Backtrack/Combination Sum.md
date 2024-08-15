---
tags:
 - Medium
---

https://leetcode.com/problems/combination-sum/

```python
class Solution:
    def combinationSum(self, candidates: List[int], target: int) -> List[List[int]]:
        output = []
        candidates.sort()
        def backtrack(i, accum, path):
            if accum == target:
                output.append(path[:])
                return
            if accum > target:
                return
            
            for idx in range(i, len(candidates)):
                if accum + candidates[idx] > target:
                    continue
                #path += [candidates[idx]]
                backtrack(idx, accum + candidates[idx], path + [candidates[idx]]) #can reuse so not idx + 1
                #path.pop()

        backtrack(0, 0, [])
        return output
# Time complexity is linear in the number of nodes in the tree. provide some loose upper bound       
# Time Complexity: O(N ^ (T / M))
# Space Complexity: O(T / M) where T = target, M = minimal value in candidates
```