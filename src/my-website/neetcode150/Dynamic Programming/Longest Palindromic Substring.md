---
tags:
 - Medium
---

https://leetcode.com/problems/longest-palindromic-substring/

1. Solution 1: DP. dp[i][j] -> represents if s[i:j+1] is palindrome. 
2. Solve for base case all strings of len 1 are palindrome, len 2 if s[i] == s[i+1]
3. Solve for len 3, 4 , 5, ... , N. 

```python
class Solution:
    def longestPalindrome(self, s: str) -> str:
        n = len(s)
        bounds = [0, 0]

        dp = [[0] * n for _ in range(n)] #dp[i][j] -> if s[i:j+1] is a palindrome

        for i in range(n):
            dp[i][i] = True
        
        for i in range(n-1):
            if s[i] == s[i+1]:
                dp[i][i+1] = True
                bounds = [i, i+1]
            
        for diff in range(2, n):
            for i in range(n - diff): #start bound
                j = i + diff #end bound                
                if s[i] == s[j] and dp[i+1][j-1]:
                    dp[i][j] = True
                    bounds = [i, j]

        return s[bounds[0]:bounds[1]+1]
# Time Complexity: O(N^2)
# Space Complexity: O(N^2)
```
1. Solution 2: expand from centre.
2. Have an expand function (i, j) that starts expanding from i and j until no palindrome found.
3. loop through N centres, each centres have 2 possible expansion (i, i) and (i, i+1) for odd, even length palindrome
4. Check if the expand function returns a larger bound than current, if so update the bounds
5. slice the string with the bounds. 

```python
class Solution:
    def longestPalindrome(self, s: str) -> str:
        def expand(left, right):
            while left >= 0 and right < len(s) and s[left] == s[right]:
                left -= 1
                right += 1
            return [left+1, right-1]
        
        left_bound, right_bound = 0, 0

        for i in range(len(s)):
            odd_l, odd_r = expand(i, i)
            print(odd_l, odd_r)
            if (odd_r - odd_l) > (right_bound - left_bound):
                left_bound, right_bound = odd_l, odd_r    

            even_l, even_r = expand(i, i+1)
            if (even_r - even_l) > (right_bound - left_bound):
                left_bound, right_bound = even_l, even_r    

        return s[left_bound:right_bound+1]
# Time Complexity: O(N^2)
# Space Complexity: O(1)
```