---
tags:
 - Medium
---

https://leetcode.com/problems/valid-sudoku/

3 pass check row, col and box
```python
class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        
        def validRows(board):
            for i in range(9):
                row = board[i]
                num_set = set()
                for num in row:
                    if num == '.':
                        continue
                    if num not in num_set:
                        num_set.add(num)
                    else:
                        return False
            return True
            
        def validColumns(board):
            for col in range(9):
                num_set = set()
                for row in board:
                    num = row[col]
                    if num == '.':
                        continue
                    if num not in num_set:
                        num_set.add(num)
                    else:
                        return False
            return True
        
        def validBoxes(board):
            def validBox(start_r, end_r, start_c, end_c, board):
                num_set = set()
                for r in range(start_r, end_r+1):
                    for c in range(start_c, end_c+1):
                        if board[r][c] == '.':
                            continue
                        if board[r][c] not in num_set:
                            num_set.add(board[r][c])
                        else:
                            return False
                return True
            valid = True
            for r in range(0,9,3):
                for c in range(0,9,3):
                    valid &= validBox(r, r+2, c, c+2, board)
            return valid
            
        
        return validRows(board) and validColumns(board) and validBoxes(board)

# Time Complexity: O(N)
# Space Complexity: O(1) ? O(9)
```


1 pass

