---
tags:
 - Medium
---

https://leetcode.com/problems/partition-labels/

2 pointers, have a dict to track the letter and freq. at every iteration, check if this dict satisfies the condition of having every letter against the total freq dict.

```python
class Solution:
    def partitionLabels(self, s: str) -> List[int]:
        res = []
        l = 0
        total_count = Counter(s)
        freq = {}
        for r in range(len(s)):
            char = s[r]
            freq[char] = freq.get(char, 0) + 1
            matched = 0
            for key in freq:
                matched += (freq[key] == total_count[key])
            if matched == len(freq):
                res.append(r-l+1)
                l = r + 1
                freq.clear()
        return res
# Time Complexity: O(N * 26)
# Space Complexity: O(N)
```