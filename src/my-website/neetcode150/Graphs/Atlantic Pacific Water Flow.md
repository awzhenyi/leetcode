---
sidebar_position: 9
tags:
 - Medium
---

https://leetcode.com/problems/pacific-atlantic-water-flow/

1. Standard BFS but more tedious.
2. Small trick to BFS from the dest to src instead of the usual src to dest

```python
class Solution:
    def pacificAtlantic(self, heights: List[List[int]]) -> List[List[int]]:
        ROWS = len(heights)
        COLS = len(heights[0])
        pacific = set()
        atlantic = set()
        for r in range(ROWS):
            pacific.add((r, 0))
            atlantic.add((r,COLS-1))
        for c in range(COLS):
            pacific.add((0, c))
            atlantic.add((ROWS-1, c))

        def bfs(initial_set):
            visited = set()
            queue = collections.deque(list(initial_set))
            while queue:
                r, c = queue.popleft()
                visited.add((r,c))
                for _r, _c in [(r+1, c), (r-1, c), (r, c+1), (r, c-1)]:
                    if 0 <= _r < ROWS and 0 <= _c < COLS and (_r,_c) not in visited and heights[_r][_c] >= heights[r][c]:
                        visited.add((_r, _c))
                        queue.append((_r, _c))
            return visited
        pacific = pacific.union(bfs(pacific))
        atlantic = atlantic.union(bfs(atlantic))
        return pacific.intersection(atlantic)
        # add border coordinates to pacific and atlantic respectively
        # bfs to see which other coordinates can be reached, maintain a visited 2D array to prevent repeat visits
        # maintain 2 sets, pacific & atlantic -> hold the coordinates that can be reached
        # set intersection -> return the list

# Time Complexity: O(N), where N == number of elements in the grid
# Space Complexity: O(N)
```