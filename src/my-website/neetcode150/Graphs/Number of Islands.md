---
tags:
 - Medium
---

[Number of Islands - LeetCode](https://leetcode.com/problems/number-of-islands/)

1. Check with interviewer if u are allowed to overwrite inputs, else just copy array
DFS on every instance of island, check conditions: `0 <= r < ROWS and 0 <= c < COLS` and `grid[r][c] == "1"` and (r,c) not in visited:

```python
class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        ROWS = len(grid)
        COLS = len(grid[0])

        def dfs(r, c, visited):
            if 0 <= r < ROWS and 0 <= c < COLS and (r,c) not in visited and grid[r][c] == "1":
                grid[r][c] = "2"
                visited.add((r,c))
                dfs(r + 1, c, visited)
                dfs(r - 1, c, visited)
                dfs(r, c + 1, visited)
                dfs(r, c - 1, visited)

        islands = 0
        for r in range(ROWS):
            for c in range(COLS):
                if grid[r][c] == "1":
                    dfs(r, c, set())
                    islands += 1
        return islands

        # idea: loop the grid, find a starting point. every starting point = 1 island
        # for each starting point, we will apply a search algorithm to find the connected parts of the island

# Time Complexity: O(MN)
# Space Complexity: O(MN)
```

BFS on every instance of island, check conditions: `0 <= r < ROWS and 0 <= c < COLS` and `grid[r][c] == "1"` and (r,c) not in visited:

```python
class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        islands = 0
        ROWS = len(grid)
        COLS = len(grid[0])
        for r in range(ROWS):
            for c in range(COLS):
                if grid[r][c] == "1":
                    islands += 1
                    # start bfs
                    q = [(r,c)]
                    for x, y in q:
                        grid[x][y] = "2"
                        for _x, _y in [(x+1,y), (x-1,y), (x,y+1), (x,y-1)]:
                            if 0 <= _x < ROWS and 0 <= _y < COLS and grid[_x][_y] == "1":
                                q.append((_x,_y))
                                grid[_x][_y] = "2"
        return islands
        # idea: loop the grid, find a starting point. every starting point = 1 island
        # for each starting point, we will apply a search algorithm to find the connected parts of the island


# Time Complexity: O(MN)
# Space Complexity: O(MN)
```

Optimized space with queue, since queue is getting popped at each level, space complexity is less
```python
class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        islands = 0
        ROWS = len(grid)
        COLS = len(grid[0])
        for r in range(ROWS):
            for c in range(COLS):
                if grid[r][c] == "1":
                    islands += 1
                    # start bfs
                    q = collections.deque([(r,c)])
                    while q:
                        x, y = q.popleft()
                        grid[x][y] = "2"
                        for _x, _y in [(x+1,y), (x-1,y), (x,y+1), (x,y-1)]:
                            if 0 <= _x < ROWS and 0 <= _y < COLS and grid[_x][_y] == "1":
                                q.append((_x,_y))
                                grid[_x][_y] = "2"
        return islands
        # idea: loop the grid, find a starting point. every starting point = 1 island
        # for each starting point, we will apply a search algorithm to find the connected parts of the island


# Time Complexity: O(MN)
# Space Complexity: O(min (M, N))
```

Do not modify inputs I. add additional visited_grid bool list of list

```python
class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        islands = 0
        ROWS = len(grid)
        COLS = len(grid[0])
        visited_grid = [[0] * COLS for _ in range(ROWS)]

        for r in range(ROWS):
            for c in range(COLS):
                if grid[r][c] == "1" and visited_grid[r][c] == 0:
                    islands += 1
                    # start bfs
                    q = collections.deque([(r,c)])
                    while q:
                        x, y = q.popleft()
                        visited_grid[x][y] = 1
                        for _x, _y in [(x+1,y), (x-1,y), (x,y+1), (x,y-1)]:
                            if 0 <= _x < ROWS and 0 <= _y < COLS and visited_grid[_x][_y] == 0 and grid[_x][_y] == "1":
                                q.append((_x,_y))
                                visited_grid[_x][_y] = 1
        return islands
        # idea: loop the grid, find a starting point. every starting point = 1 island
        # for each starting point, we will apply a search algorithm to find the connected parts of the island
```

Do not modify inputs II. deepcopy the grid, ie `new_grid = [row[:] for row in grid]`
```python
class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        islands = 0
        ROWS = len(grid)
        COLS = len(grid[0])
        copy_grid = [row[:] for row in grid]

        for r in range(ROWS):
            for c in range(COLS):
                if copy_grid[r][c] == "1":
                    islands += 1
                    # start bfs
                    q = collections.deque([(r,c)])
                    while q:
                        x, y = q.popleft()
                        copy_grid[x][y] = "2"
                        for _x, _y in [(x+1,y), (x-1,y), (x,y+1), (x,y-1)]:
                            if 0 <= _x < ROWS and 0 <= _y < COLS and copy_grid[_x][_y] == "1":
                                q.append((_x,_y))
                                copy_grid[_x][_y] = "2"
        return islands
```

```java
class Solution {
    public int numIslands(char[][] grid) {
        int rows = grid.length;
        int cols = grid[0].length;
        int islands = 0;
        for (int r = 0; r < rows; r++) {
            for (int c = 0; c < cols; c++) {
                if (grid[r][c] == '1') {
                    islands += 1;
                    dfs(grid, r, c);
                }
            }
        }
        return islands;
    }

    private void dfs(char[][] grid, int r, int c) {
        if (r >= 0 && r < grid.length && c >= 0 && c < grid[0].length && grid[r][c] == '1') {
            grid[r][c] = 0;
            dfs(grid, r+1, c);
            dfs(grid, r-1, c);
            dfs(grid, r, c+1);
            dfs(grid, r, c-1);
        }
    }
}
```