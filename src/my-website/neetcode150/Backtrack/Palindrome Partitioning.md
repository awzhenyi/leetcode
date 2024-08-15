---
tags:
 - Medium
---

https://leetcode.com/problems/palindrome-partitioning/

1. backtrack choose each index as a possible partition if it is a palindrome
2. If idx reached len(s), this partition is valid

```python
class Solution:
    def partition(self, s: str) -> List[List[str]]:
        output = []
        def dfs(start, partition):
            if start == len(s):
                output.append(partition[:])
                return
            for end in range(start, len(s)):
                if isPalindrome(s[start:end+1]):
                    partition.append(s[start:end+1])
                    dfs(end+1, partition)
                    partition.pop()

        def isPalindrome(s):
            return s == s[::-1]

        dfs(0, [])
        return output
# Time Complexity: O(N * (2^N)), 2^N possible recursions, each recursion is N (checking of palindrome)
# Space Complexity: O(N) recursion stack size, exclude output size, else same time complexity
```