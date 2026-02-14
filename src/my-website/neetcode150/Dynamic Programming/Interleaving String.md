---
tags:
 - Medium
---

https://leetcode.com/problems/interleaving-string

```python
class Solution:
    def isInterleave(self, s1: str, s2: str, s3: str) -> bool:
        n = len(s1)
        m = len(s2)
        l = len(s3)
        if n + m != l:
            return False

        @cache
        def dp(i, j):
            if i == n and j == m:
                return True
            res = False
            if i < n and s1[i] == s3[i + j]:
                res |= dp(i + 1, j)
            if j < m and s2[j] == s3[i + j]:
                res |= dp(i, j + 1)
            return res
    
        return dp(0, 0)
# Time Complexity: O()
# Space Complexity: O()
```

```python

# Time Complexity: O()
# Space Complexity: O()
```