---
tags:
 - Hard
---

https://leetcode.com/problems/minimum-cost-path-with-teleportations

## Problem Understanding

You need to find the minimum cost to travel from the top-left corner `(0, 0)` to the bottom-right corner `(m-1, n-1)` of an `m × n` grid. You have two types of moves:

1. **Normal moves**: Move right or down, paying the cost of the destination cell
2. **Teleportation**: Teleport for free to any cell with a value ≤ your current cell's value (you can use this up to `k` times)

## Key Insight: Layered Processing with Sorted Value Grouping

The challenge is that teleportation adds complexity, but we can process it efficiently by grouping cells by their values.

**Core Idea**: Process the problem in layers (one for each teleport count 0 to k), but use a clever optimization:
1. **Sort all cells by value** - this allows efficient teleportation processing
2. **For each layer**: First apply teleportation (grouping by sorted values), then compute normal moves using bottom-up DP
3. **Reuse 2D array** - we don't need to track teleport count explicitly in state, just process layers sequentially

## Algorithm

The solution uses **bottom-up DP with sorted value grouping**:

1. **Preprocess**: Sort all grid cells by their value (ascending). This allows efficient teleportation processing.

2. **Initialize**: Create a 2D cost array `costs[i][j]` that will be reused for each teleport layer.

3. **For each teleport count** (0 to k):
   - **Phase 1 - Teleportation**: 
     - Process cells in sorted order (by value)
     - Track the minimum cost seen so far
     - When encountering a new value, update all cells with the same or lower values with this minimum cost
     - This efficiently handles: "If I can reach any cell with value v, I can teleport to all cells with value ≤ v"
   
   - **Phase 2 - Normal Moves**: 
     - Use bottom-up DP from destination `(m-1, n-1)` to start `(0, 0)`
     - For each cell, update from right and down neighbors (moving backwards)
     - Set destination cost to 0 at the start of each layer

4. **Return**: The cost at `(0, 0)` after processing all k+1 layers.

## Why This Works

- **Sorted Value Grouping**: By sorting cells by value, we can process teleportation in one pass. When we encounter cells with value v, we've already seen all cells with lower values, so we can propagate the minimum cost efficiently.

- **Layered Processing**: Processing teleport layers sequentially (0, 1, 2, ..., k) ensures we build optimal solutions incrementally. Each layer builds on the previous one.

- **Bottom-Up DP**: Starting from the destination and working backwards is natural for this problem since we know the destination cost (0). This avoids the need for a priority queue.

- **2D State Reuse**: Instead of storing a 3D array `dist[i][j][t]`, we reuse a 2D array across layers. This saves space and simplifies the code.

- **Efficient Teleportation**: The sorted grouping means teleportation is O(m×n) per layer - we just need one pass through the sorted cells, updating groups as we encounter new values.

```python
class Solution:
    def minCost(self, grid: List[List[int]], k: int) -> int:
        m, n = len(grid), len(grid[0])
        
        # Sort all points by their grid value (ascending)
        points = [(i, j) for i in range(m) for j in range(n)]
        points.sort(key=lambda p: grid[p[0]][p[1]])
        
        # 2D cost array (reused for each teleport layer)
        costs = [[float('inf')] * n for _ in range(m)]
        
        # Process each teleport layer
        for t in range(k + 1):
            # Phase 1: Teleportation
            # Group cells by value and propagate minimum cost
            # Key insight: If we can reach any cell with value v, we can teleport
            # to all cells with value <= v with the same cost
            min_cost_so_far = float('inf')
            group_start = 0
            
            for i in range(len(points)):
                r, c = points[i]
                min_cost_so_far = min(min_cost_so_far, costs[r][c])
                
                # Check if we've reached a new value (or end of array)
                is_new_value = (i + 1 == len(points) or 
                               grid[points[i][0]][points[i][1]] != 
                               grid[points[i + 1][0]][points[i + 1][1]])
                
                if is_new_value:
                    # Update all cells in current group (same or lower values)
                    # with the minimum cost we've seen so far
                    for idx in range(group_start, i + 1):
                        r, c = points[idx]
                        costs[r][c] = min(costs[r][c], min_cost_so_far)
                    group_start = i + 1
            
            # Phase 2: Normal moves (bottom-up DP from destination to start)
            # Process from bottom-right to top-left
            for i in range(m - 1, -1, -1):
                for j in range(n - 1, -1, -1):
                    # Destination cell has cost 0
                    if i == m - 1 and j == n - 1:
                        costs[i][j] = 0
                        continue
                    
                    # Update from right neighbor (moving left)
                    if i != m - 1:
                        costs[i][j] = min(
                            costs[i][j], 
                            costs[i + 1][j] + grid[i + 1][j]
                        )
                    
                    # Update from bottom neighbor (moving up)
                    if j != n - 1:
                        costs[i][j] = min(
                            costs[i][j], 
                            costs[i][j + 1] + grid[i][j + 1]
                        )
        
        return costs[0][0]

# Time Complexity: O(m × n × log(m × n) + k × m × n)
#   - Sorting points: O(m × n × log(m × n)) - one-time cost
#   - For each teleport layer (0 to k):
#     - Phase 1 (Teleportation): O(m × n) - single pass through sorted points
#     - Phase 2 (Normal moves): O(m × n) - bottom-up DP
#   - Total: O(m × n × log(m × n) + k × m × n)
#   - Note: If grid values are bounded/small, sorting can be O(m × n) with counting sort
# Space Complexity: O(m × n)
#   - 2D cost array: O(m × n)
#   - Sorted points array: O(m × n)
#   - Total: O(m × n)
# Key improvements over Dijkstra approach:
#   - No heap operations: O(m × n) per layer instead of O(m × n × log(m × n))
#   - 2D instead of 3D state: O(m × n) space instead of O(k × m × n)
```

## Simplified Explanation

Imagine you're navigating a grid where each cell has a cost. You can:
- Walk right or down (paying the destination cost)
- Teleport for free to cheaper cells (limited uses)

The solution works by processing the problem in layers (one per teleport count). For each layer:

1. **Teleportation phase**: Sort all cells by value. As we go through them, if we can reach any cell with value v, we can teleport to all cells with value ≤ v. We efficiently propagate the minimum cost to all eligible cells.

2. **Normal moves phase**: Work backwards from the destination (which has cost 0) to the start, updating each cell's cost based on its right and down neighbors.

The key insight is that sorting by value makes teleportation processing very efficient - we can handle all teleportation in one pass through the sorted cells, rather than checking every possible teleport destination.
