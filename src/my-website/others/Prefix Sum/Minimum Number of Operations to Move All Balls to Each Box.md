---
tags:
 - Medium
---

https://leetcode.com/problems/minimum-number-of-operations-to-move-all-balls-to-each-box

2 pass prefix sum (left to right) and (right to left)
track balls being moved + moves needed

```python
class Solution:
    def minOperations(self, boxes: str) -> List[int]:
        n = len(boxes)
        res = [0] * n
        moves = 0
        balls = 0
        for i in range(n):
            moves += balls
            res[i] += moves
            if boxes[i] == "1":
                balls += 1
        moves = 0
        balls = 0
        for i in range(n-1, -1, -1):
            moves += balls
            res[i] += moves
            if boxes[i] == '1':
                balls += 1
        return res
# Time Complexity: O(N)
# Space Complexity: O(N)
```