---
tags:
 - Easy
---

https://leetcode.com/problems/valid-anagram/

Use Counter to get a dictionary of counts
```python
class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        return Counter(s) == Counter(t)
#Time Complexity: O(N)
#Space Complexity: O(N)
```