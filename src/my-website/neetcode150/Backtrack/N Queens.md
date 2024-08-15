---
tags:
 - Hard
---

https://leetcode.com/problems/n-queens/
1. Only care about Cols, Pos_diags(row + col) and Neg_diags(row - col) to track where u can place the queen

```python
class Solution:
    def solveNQueens(self, n: int) -> List[List[str]]:
        output = []
        def dfs(cols, pos_diags, neg_diags):
            if len(cols) == n:
                board = []
                for col in cols:
                    row = ["."] * n
                    row[col] = "Q"
                    board.append(''.join(row))
                output.append(board)
                return
            row = len(cols) # which row am i working on?
            for col in range(n):
                if col not in cols and row + col not in pos_diags and row - col not in neg_diags:
                    cols.append(col)
                    pos_diags.add(row + col)
                    neg_diags.add(row - col)
                    dfs(cols, pos_diags, neg_diags)
                    cols.pop()
                    pos_diags.remove(row + col)
                    neg_diags.remove(row - col)
            
        dfs([], set(), set())
        return output
# Time Complexity: O(N!) first row N slots, second row N-1 slots ... N!
# Space Complexity: O(N^2)
```