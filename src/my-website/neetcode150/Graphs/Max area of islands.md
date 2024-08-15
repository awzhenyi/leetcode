---
tags:
 - Medium
---

https://leetcode.com/problems/max-area-of-island/
1. have a dfs function that will return the area of 1 island
2. variable max_area = 0, max_area = max(max_area, dfs(r,c))

```python
class Solution:
    def maxAreaOfIsland(self, grid: List[List[int]]) -> int:
        ROWS = len(grid)
        COLS = len(grid[0])
        copy_grid = [row[:] for row in grid]
        def dfs(r, c, visited):        
            if 0 <= r < ROWS and 0 <= c < COLS and (r,c) not in visited and copy_grid[r][c] == 1:
                visited.add((r,c))
                copy_grid[r][c] = 2
                return 1 + dfs(r+1, c, visited) + dfs(r-1, c, visited) + dfs(r, c+1, visited) + dfs(r, c-1, visited)
            return 0

        max_area = 0
        for r in range(ROWS):
            for c in range(COLS):
                if copy_grid[r][c] == 1:
                    max_area = max(max_area, dfs(r,c,set()))
        return max_area

# Time Complexity: O(MN)
# Space Complexity: O(MN)
```
