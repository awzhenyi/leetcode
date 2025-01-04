---
tags:
 - Medium
---

https://leetcode.com/problems/generate-parentheses

backtrack, generate all valid possibilies
1. keep track of left and right brackets added
2. if left == right == n, append current path
3. if left < n, add left bracket and backtrack by popping
4. if left > right, add right bracket and backtrack by popping

```python
class Solution:
    def generateParenthesis(self, n: int) -> List[str]:
        res = []
        def build(left, right, curr):
            if left == right == n:
                res.append(''.join(curr))
            
            if left < n:
                curr.append('(')
                build(left + 1, right, curr)
                curr.pop()

            if left > right:
                curr.append(')')
                build(left, right + 1, curr)
                curr.pop()
        build(0, 0, [])
        return res
# Time Complexity: O(4^n / (n^(3/2))) nth catalan number. all possible sequences 2^n but only valid ones based on the bounds left < n, left > right etc
# Space Complexity: O(N) recursion stack space, but total output -> O(4^n / n ^ (1 / 2))
```