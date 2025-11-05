---
tags:
 - Medium
---

https://leetcode.com/problems/partition-labels/

track last occurence of each letter, a partition is formed when i == end.

```python
class Solution:
    def partitionLabels(self, s: str) -> List[int]:
        res = []
        last_occurence = {c : i for i, c in enumerate(s)}
        start = 0
        end = 0
        for i, c in enumerate(s):
            # what is the furthest index i have to go when i include this letter
            end = max(end, last_occurence[c])
            if i == end:
                # reached the furthest last occurrence of all letters in current partition
                res.append(end - start + 1)
                start = end = i + 1
        return res
# Time Complexity: O(N)
# Space Complexity: O(K), unique keys
```

2 pointers, have a dict to track the letter and freq. at every iteration, check if this dict satisfies the condition of having every letter against the total freq dict.

```python
class Solution:
    def partitionLabels(self, s: str) -> List[int]:
        res = []
        count = Counter(s)
        window = {}
        l = 0
        for r, c in enumerate(s):
            window[c] = window.get(c, 0) + 1
            if all(count[k] == window[k] for k in window):
                window.clear()
                res.append(r - l + 1)
                l = r + 1
        return res# Time Complexity: O(N * 26)
# Space Complexity: O(N)
```