
https://leetcode.com/problems/word-break/

use cache to cache indexes that will return false

```python
class Solution:
    def wordBreak(self, s: str, wordDict: List[str]) -> bool:
        cache = {}
        def dp(start):
            if start >= len(s):
                return True
            
            if start in cache:
                return False
            
            for word in wordDict:
                end = start + len(word)
                if s[start:end] == word and dp(end):
                    return True
            cache[start] = 1
            return False
                
        return dp(0)
# Time Complexity: O(n * m * k), n states with cahce = len(s), m = words in wordDict, k = average length of a word
# Space Complexity: O(n) recursion call stack
```