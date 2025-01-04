---
tags:
 - Medium
---

https://leetcode.com/problems/better-compression-of-string

```python
class Solution:
    def betterCompression(self, compressed: str) -> str:
        count = {}
        i = 1
        curr_letter = compressed[0]
        while i < len(compressed):
            if compressed[i].isalpha():
                curr_letter = compressed[i]
                i += 1
            else:
                freq = ""
                while i < len(compressed) and compressed[i].isdigit():
                    freq += compressed[i]
                    i += 1
                count[curr_letter] = count.get(curr_letter, 0) + int(freq)
        res = []
        for letter in sorted(count.keys()):
            res.append(letter)
            res.append(str(count[letter]))
        return ''.join(res)
# Time Complexity: O(N)
# Space Complexity: O(26) -> constant
```