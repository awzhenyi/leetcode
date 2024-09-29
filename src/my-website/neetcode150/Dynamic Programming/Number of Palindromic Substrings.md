
1. N^3, check each substring
```python
    def countSubstrings(self, s: str) -> int:
        def isPalindrome(a):
            return a == a[::-1]
        n = len(s)
        dp = [1] * n
        for i in range(n):
            for j in range(i):
                if isPalindrome(s[j:i+1]):
                    dp[i] += 1

        return sum(dp)
# Time Complexity: O(N^3)
# Space Complexity: O(N)
```

2. 