---
tags:
 - Medium
 - Tiktok
---

https://leetcode.com/problems/longest-substring-with-at-least-k-repeating-characters

Brute force O(N^2)

```python
class Solution:
    def longestSubstring(self, s: str, k: int) -> int:
        def isValid(s):
            count = Counter(s)
            return all(v >= k for v in count.values())
        res = 0
        for i in range(len(s)):
            for j in range(i, len(s)):
                if isValid(s[i:j+1]):
                    res = max(res, j - i + 1)
        return res

# Time Complexity: O(N ^ 2)
# Space Complexity: O(N)
```

Divide and Conquer


Sliding Window