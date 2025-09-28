---
sidebar position: 5
tags: 
 - Hard
---

https://leetcode.com/problems/minimum-window-substring/

```python
class Solution:
    def minWindow(self, s: str, t: str) -> str:
        bounds = [-1, -1]
        max_len = inf
        l = 0
        count = Counter(t)
        n = len(count)
        contain = 0

        for r, c in enumerate(s):
            if c in count:
                count[c] -= 1
                if count[c] == 0:
                    contain += 1
            
            while contain == n:
                if r - l + 1 < max_len:
                    bounds = [l, r]
                    max_len = r - l + 1
                if s[l] in count:
                    count[s[l]] += 1
                    if count[s[l]] == 1:
                        contain -= 1
                l += 1

        l, r = bounds
        if l == -1:
            return ""
        return s[l:r+1]
        
# Time Complexity: O(N)
# Space Complexity: O(26) == O(1)
```