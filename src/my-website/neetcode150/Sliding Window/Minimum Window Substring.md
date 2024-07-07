---
tags: 
 - Hard
---

```python
class Solution:
    def minWindow(self, s: str, t: str) -> str:
        def is_matched(s, t):
            for c in t:
                if c in s and s[c] >= t[c]:
                    continue
                return False
            return True
        count_t = Counter(t)
        count_s = defaultdict(int)
        l = 0
        min_str = ""
        for r in range(len(s)):
            if s[r] in count_t:
                count_s[s[r]] += 1

            if is_matched(count_s, count_t):
                while l < r:
                    if s[l] not in count_s:
                        l += 1
                    elif s[l] in count_s:
                        if count_s[s[l]] > count_t[s[l]]:
                            count_s[s[l]] -= 1
                            l += 1
                        else:
                            break
                if min_str == "":
                    min_str = s[l:r+1]
                elif len(min_str) > r - l + 1:
                    min_str = s[l:r+1]
                
        return min_str
# Time Complexity: O(N)
# Space Complexity: O(N)
```