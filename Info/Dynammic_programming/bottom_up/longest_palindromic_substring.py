# https://leetcode.com/problems/longest-palindromic-substring

# In this dp, you are solving diagonals by diagonals, starting from the substring length. By this way, it guarantees that any palindromic result from a shorter substring length has already been computed.
class Solution:
    def longestPalindrome(self, s: str) -> str:
        ans = [0, 0]
        n = len(s)
        dp = [[0] * n for _ in range(n)]

        for i in range(n):  # substr of len 1
            dp[i][i] = 1

        for i in range(n-1):  # substr of len 2
            if s[i] == s[i+1]:
                dp[i][i+1] = 1
                ans = [i, i+1]

        for substring_len in range(2, n):  # substr of len 3
            # terminate before last 2 rows, which will not have any substr of len > 2
            for i in range(n - substring_len):
                # starts processing from s[0 : 2] .. the first substring of length 3
                j = i + substring_len
                if s[i] == s[j] and dp[i+1][j-1]:
                    dp[i][j] = 1
                    ans = [i, j]
        i, j = ans
        return s[i:j+1]
