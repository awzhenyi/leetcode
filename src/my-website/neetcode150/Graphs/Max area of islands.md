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
        def dfs(r, c):
            grid[r][c] = 0
            area = 1
            for _r, _c in [(r + 1, c), (r - 1, c), (r, c - 1), (r, c + 1)]:
                if 0 <= _r < ROWS and 0 <= _c < COLS and grid[_r][_c] == 1:
                    area += dfs(_r, _c)
            return area

        max_area = 0
        for r in range(ROWS):
            for c in range(COLS):
                if grid[r][c] == 1:
                    max_area = max(max_area, dfs(r, c))
        return max_area
        # have a dfs function that will return the area of 1 island
        # variable max_area = 0, max_area = max(max_area, dfs(r,c))

# Time Complexity: O(MN), essentially the whole grid since each cell is visited at most once
# Space Complexity: O(MN)
```
