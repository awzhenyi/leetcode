---
tags:
 - Medium
---

https://leetcode.com/problems/word-search

1. hint of backtracking for visited set since the search will not be on shortest path. Hence usual bfs with only additions to visited will not work

```python

class Solution:
    def exist(self, board: List[List[str]], word: str) -> bool:
        ROWS = len(board)
        COLS = len(board[0])
        visited = set()
        def dfs(r, c, idx):
            if idx == len(word):
                return True
            if 0 <= r < ROWS and 0 <= c < COLS and (r,c) not in visited:
                if word[idx] != board[r][c]:
                    return False
                visited.add((r,c))
                res = dfs(r+1, c, idx+1) or dfs(r-1, c, idx+1) or dfs(r, c+1, idx+1) or dfs(r, c-1, idx+1)
                visited.remove((r,c))
                return res
            return False
            
        for r in range(ROWS):
            for c in range(COLS):
                if board[r][c] == word[0]:
                    if dfs(r, c, 0):
                        return True
        return False



# Time Complexity: O(N ^ (3 ^ L)), where L is the length of word to be searched and N is the number of cells on the board
# Space Complexity: O(L) recursion stack size
```