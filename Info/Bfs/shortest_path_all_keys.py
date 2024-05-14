# https://leetcode.com/problems/shortest-path-to-get-all-keys/editorial/

# advanced bfs, bit manipulation to store states

from collections import defaultdict, deque


class Solution:
    def shortestPathAllKeys(self, grid: List[str]) -> int:
        r, c = len(grid), len(grid[0])
        queue = deque()

        # map of sets for each state
        visited = defaultdict(set)

        key_set, lock_set = set(), set()

        r_start, c_start = -1, -1
        all_keys = 0
        for i in range(r):
            for j in range(c):
                if grid[i][j] == '@':
                    r_start, c_start = i, j
                elif grid[i][j] in 'abcdef':  # 6 keys max constraint
                    key_set.add(grid[i][j])
                    # get final bitset state of all keys
                    all_keys += (1 << (ord(grid[i][j]) - ord('a')))
                elif grid[i][j] in 'ABCDEF':
                    lock_set.add(grid[i][j])

        # row, column, key_state, distance
        queue.append((r_start, c_start, 0, 0))
        visited[0].add((r_start, c_start))

        while queue:
            curr_r, curr_c, keys, distance = queue.popleft()
            for new_r, new_c in [(curr_r + 1, curr_c), (curr_r - 1, curr_c), (curr_r, curr_c + 1), (curr_r, curr_c - 1)]:
                if 0 <= new_r < r and 0 <= new_c < c and grid[new_r][new_c] != '#':
                    cell = grid[new_r][new_c]

                    # if it is a key that is not picked up yet
                    if cell in key_set and not ((1 << (ord(cell) - ord('a'))) & keys):
                        new_keys = (keys | (1 << (ord(cell) - ord('a'))))

                        # if we collect all keys: return distance + 1
                        if new_keys == all_keys:
                            return distance + 1
                        visited[new_keys].add((new_r, new_c))
                        queue.append((new_r, new_c, new_keys, distance + 1))

                    # if it is a lock and we have no key, we cant proceed further
                    elif cell in lock_set and not (keys & (1 << (ord(cell) - ord('A')))):
                        continue

                    elif (new_r, new_c) not in visited[keys]:
                        visited[keys].add((new_r, new_c))
                        queue.append((new_r, new_c, keys, distance + 1))
        return -1


# Time Complexity:
# Space Complexity:
