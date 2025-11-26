---
sidebar_position: 5
tags:
 - Medium
---

https://leetcode.com/problems/search-a-2d-matrix/

## Problem Understanding
Given a 2D matrix where each row is sorted and the first element of each row is greater than the last element of the previous row, find if a target value exists in the matrix.

## Approach 1: Flatten to 1D Binary Search
Treat the 2D matrix as a flattened 1D sorted array and use standard binary search.

**Key Insight**: Since the matrix is sorted both row-wise and column-wise, we can convert 2D indices to 1D indices:
- 1D index `i` maps to row `i // COLS` and column `i % COLS`
- This lets us use regular binary search on the "flattened" array

**Binary Search Logic**:
- If current value ≤ target → search right (target might be ahead)
- If current value > target → search left (target must be before)
```python
class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        ROWS, COLS = len(matrix), len(matrix[0])
        l, r = 0, ROWS * COLS - 1
        while l < r:
            m = (l + r) // 2
            row = m // COLS 
            col = m % COLS
            if matrix[row][col] >= target:
                r = m
            else:
                l = m + 1
        return matrix[l // COLS][l % COLS] == target
# Time Complexity: O(log(ROWS * COLS)) - binary search on flattened array
# Space Complexity: O(1) - only using constant extra space
```

## Approach 2: Two-Step Binary Search
First find which row might contain the target, then search within that row.

**Step 1 - Find the row**:
- Binary search on the first column to find the row where target might be
- Compare target with the first element of each row
- After the loop, we need one more check: if target is smaller than the first element of `top`, the target is in the previous row

**Step 2 - Search the row**:
- Once we know which row, do a standard binary search within that row
```python
class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        top, bottom = 0, len(matrix) - 1
        while top < bottom:
            mid = (top + bottom) // 2
            if matrix[mid][0] >= target:
                bottom = mid
            else:
                top = mid + 1
        
        #This is important because we need to do 1 more check to know which row the target lies in
        row = top if matrix[top][0] <= target else top - 1
        
        left, right = 0, len(matrix[0]) - 1
        while left < right:
            mid = (left + right) // 2
            if matrix[row][mid] >= target:
                right = mid
            else:
                left = mid + 1

        return matrix[row][left] == target
# Time Complexity: O(log(ROWS) + log(COLS)) - binary search on rows, then on columns
# Space Complexity: O(1) - only using constant extra space
```