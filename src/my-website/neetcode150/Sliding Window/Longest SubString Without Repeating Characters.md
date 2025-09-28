---
tags: 
 - Medium
---

https://leetcode.com/problems/longest-substring-without-repeating-characters/

Standard sliding window with a certain condition

```python
class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        l = 0
        longest_substr_len = 0
        char_set = set()
        for r in range(len(s)):
            while s[r] in char_set: # Important condition to make logic clean
                char_set.remove(s[l])
                l += 1
            char_set.add(s[r])
            longest_substr_len = max(longest_substr_len, r - l + 1)
        return longest_substr_len

# Time Complexity: O(N)
# Space Complexity: O(26) == O(1)
```