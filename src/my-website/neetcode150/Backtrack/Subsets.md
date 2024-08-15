---
tags:
 - Medium
---

https://leetcode.com/problems/subsets/

Get all possible subsets solution #1
```python
class Solution:
    def subsets(self, nums: List[int]) -> List[List[int]]:        
        def dfs(nums, index, path, res):
            res.append(path)
            for i in range(index, len(nums)):
                dfs(nums, i+1, path+[nums[i]], res)
        res = []
        dfs(sorted(nums), 0, [], res)
        return res

#Time Complexity: O(n * 2^n)
#Space Complexity: O(n * 2^n)
```

```python
class Solution:
    def subsets(self, nums: List[int]) -> List[List[int]]:        
        ans = []
        def dfs(idx, accum):
            nonlocal ans
            ans.append(accum[:])
            for i in range(idx, len(nums)):
                accum += [nums[i]]
                dfs(i+1, accum)
                accum.pop()
        dfs(0, [])
        return ans
# Time Complexity: O()
# Space Complexity: O()
```

Solution #2 with backtracking. Explore both choices of pick and not pick.

```python
class Solution:
    def subsets(self, nums: List[int]) -> List[List[int]]:
        res = []

        subset = []

        def dfs(i):
            if i >= len(nums):
                res.append(subset.copy())
                return
            subset.append(nums[i])
            dfs(i + 1)
            subset.pop()
            dfs(i + 1)

        dfs(0)
        return res

#Time Complexity: O(n * 2^n)
```
