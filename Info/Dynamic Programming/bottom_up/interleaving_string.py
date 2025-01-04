# https://leetcode.com/problems/interleaving-string/

class Solution:
    def isInterleave(self, s1: str, s2: str, s3: str) -> bool:
        n = len(s1)
        m = len(s2)
        l = len(s3)
        dp = [[False] * (n+1) for _ in range(m+1)]
        if n + m != l:
            return False

        for i in range(m+1):
            for j in range(n+1):
                if i == 0 and j == 0:
                    dp[i][j] = True
                elif i == 0:
                    dp[i][j] = dp[i][j-1] and s3[j-1] == s1[j-1]
                elif j == 0:
                    dp[i][j] = dp[i-1][j] and s3[i-1] == s2[i-1]
                else:
                    dp[i][j] = (dp[i-1][j] and s2[i-1] == s3[i+j-1]
                                ) or (dp[i][j-1] and s1[j-1] == s3[i+j-1])
        print(dp)
        return dp[m][n]

# Time Complexity: O(n * m)
# Space Complexity: O(n * m)
