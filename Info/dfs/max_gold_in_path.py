class Solution:
    def getMaximumGold(self, grid: List[List[int]]) -> int:
        ans = 0

        def findGold(i, j, curr_max):
            if 0 <= i < len(grid) and 0 <= j < len(grid[0]) and grid[i][j] > 0:
                temp = grid[i][j]
                grid[i][j] = 0
                for _i, _j in [(i+1,j),(i-1,j),(i,j+1),(i,j-1)]:
                    findGold(_i, _j, curr_max+temp)
                self.max_gold = max(self.max_gold, curr_max+temp)
                grid[i][j] = temp
            

        self.max_gold = 0
        for r in range(len(grid)):
            for c in range(len(grid[0])):
                if grid[r][c] > 0:
                    findGold(r,c,0)
        return self.max_gold

# Time Complexity: O((m*n)*(4^number of cells with gold))
# Space Complexity: O(m*n)
# Good soln for return vs self. variable
