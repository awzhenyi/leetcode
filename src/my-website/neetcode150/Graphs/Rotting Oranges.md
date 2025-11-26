---
sidebar_position: 8
tags:
 - Medium
---

https://leetcode.com/problems/rotting-oranges

1. Standard BFS, but multisource. So at the start preprocess all the possible sources and put it into the queue

```python
class Solution:
    def orangesRotting(self, grid: List[List[int]]) -> int:
        fresh_oranges = set()
        visited = set()
        queue = collections.deque()
        ROWS = len(grid)
        COLS = len(grid[0])
        for i in range(ROWS):
            for j in range(COLS):
                if grid[i][j] == 1:
                    fresh_oranges.add((i,j))
                elif grid[i][j] == 2:
                    queue.append((i,j,0))
        while queue:
            r, c, mins = queue.popleft()
            if (r,c) in fresh_oranges:
                fresh_oranges.remove((r,c))
            if len(fresh_oranges) == 0:
                return mins
            visited.add((r,c))
            for _r, _c in [(r+1, c), (r-1, c), (r, c+1), (r, c-1)]:
                if 0 <= _r < ROWS and 0 <= _c < COLS and grid[_r][_c] == 1 and (_r,_c) not in visited:
                    visited.add((_r,_c))
                    queue.append((_r, _c, mins+1))
        return -1 if fresh_oranges else 0

# Time Complexity: O(N), where N == number of elements in grid
# Space Complexity: O(N)
```