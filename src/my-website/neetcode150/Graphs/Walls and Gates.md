```python
class Solution:
    def wallsAndGates(self, rooms: List[List[int]]) -> None:
        """
        Do not return anything, modify rooms in-place instead.
        """
        queue = collections.deque()
        ROWS = len(rooms)
        COLS = len(rooms[0])
        for r in range(ROWS):
            for c in range(COLS):
                if rooms[r][c] == 0:
                    queue.append((r,c,0))
        visited = [[0] * COLS for _ in range(ROWS)]
        while queue:
            r, c, dist = queue.popleft()
            visited[r][c] = 1
            rooms[r][c] = dist
            for _r, _c in [(r+1, c), (r-1, c), (r, c+1), (r, c-1)]:
                if 0 <= _r < ROWS and 0 <= _c < COLS and visited[_r][_c] == 0 and rooms[_r][_c] != -1 and rooms[_r][_c] != 0:
                    visited[_r][_c] = 1
                    queue.append((_r,_c,dist+1))


        # Find all Gates and add to queue
        # BFS distance 1 -> from gates, marked empty rooms
        # BFS distance 2 -> mark empty rooms
        # so no revisits, and since we are searching for d + 1 always, the moment we hit an empty room, gaurantee to be shortest dist from gates
# Time Complexity: O(MN)
# Space Complexity: O(MN)
```