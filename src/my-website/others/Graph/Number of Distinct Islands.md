---
tags:
 - Medium
 - Tiktok
---

https://leetcode.com/problems/number-of-distinct-islands

1. record unique shape using a trace of path, add 'b' during backtracking
2. note that mutable variable can be referenced outside of inner function without the use of nonlocal keyword

```python
from typing import List

class Solution:
    def numDistinctIslands(self, grid: List[List[int]]) -> int:
        def dfs(r, c, direction):
            if 0 <= r < ROWS and 0 <= c < COLS and grid[r][c] == 1:
                grid[r][c] = 0
                path.append(direction)  # Record movement
                dfs(r+1, c, 'd')  # Move down
                dfs(r, c+1, 'r')  # Move right
                dfs(r-1, c, 'u')  # Move up
                dfs(r, c-1, 'l')  # Move left
                path.append('b')  # Mark backtracking

        ROWS, COLS = len(grid), len(grid[0])
        distinct_islands = set()
        for r in range(ROWS):
            for c in range(COLS):
                if grid[r][c] == 1:
                    path = []
                    dfs(r, c, 'o')
                    distinct_islands.add(''.join(path))  # Convert list to string

        return len(distinct_islands)

# Time Complexity: O(m*n)
# Space Complexity: O(m*n) stack recursion size, worst case trace path size
```

2. normalize the coordinates to the same plane