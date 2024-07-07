---
tags: 
 - Medium
---

https://leetcode.com/problems/permutation-in-string/

Sliding window, account for 3 cases.
1. when s[r] in count but count[s[r]] > 0
2. when s[r] not in count, reset l = r, add back frequency
3. when s[r] in count but count[s[r]] == 0, move until s[l] adds back 1 frequency for s[r]

```python
class Solution:
    def checkInclusion(self, s1: str, s2: str) -> bool:
        count = Counter(s1)
        l = 0
        for r in range(len(s2)):
            if count[s2[r]] > 0:
                count[s2[r]] -= 1
            else:
                if s2[r] not in count:
                    while l < r:
                        if s2[l] in count:
                            count[s2[l]] += 1
                        l += 1
                elif count[s2[r]] <= 0:
                    while count[s2[r]] <= 0:
                        if s2[l] in count:
                            count[s2[l]] += 1
                        l += 1
                    count[s2[r]] -= 1
            if sum(count.values()) == 0:
                return True
        
        return False
# Time Complexity: O(N) count.values O(N) but max 26
# Space Complexity: O(N) maintain a count
```
