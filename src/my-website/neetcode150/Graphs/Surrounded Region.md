---
tags:
 - Medium
---

https://leetcode.com/problems/surrounded-regions
1. queue all the possible starting points
2. Modify during BFS
3. Anything that is left over cant be surrounded

```python
class Solution:
    def solve(self, board: List[List[str]]) -> None:
        """
        Do not return anything, modify board in-place instead.
        """
        cant_surround = set()
        ROWS = len(board)
        COLS = len(board[0])
        queue = collections.deque()
        for r in range(ROWS):
            if board[r][0] == 'O':
                queue.append((r,0))
            if board[r][COLS-1] == 'O':
                queue.append((r,COLS-1))
        for c in range(1, COLS-1):
            if board[0][c] == 'O':
                queue.append((0,c))
            if board[ROWS-1][c] == 'O':
                queue.append((ROWS-1,c))
        while queue:
            r, c = queue.popleft()
            cant_surround.add((r,c))
            for _r, _c in [(r+1, c), (r-1, c), (r, c+1), (r, c-1)]:
                if 0 <= _r < ROWS and 0 <= _c < COLS and board[_r][_c] == 'O' and (_r,_c) not in cant_surround:
                    cant_surround.add((_r,_c))
                    queue.append((_r,_c))
        for r in range(ROWS):
            for c in range(COLS):
                if (r,c) not in cant_surround:
                    board[r][c] = 'X'
# Time Complexity: O(N), where N = number of elements in the grid
# Space Complexity: O(N), queue size
```