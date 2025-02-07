---
tags:
 - Easy
---

https://leetcode.com/problems/count-prefix-and-suffix-pairs-i

1. manual use string slice
2. or use startswith & endswith

```python
class Solution:
    def countPrefixSuffixPairs(self, words: List[str]) -> int:
        
        def isSuffixAndPrefix(word1, word2):
            if len(word1) > len(word2):
                word1, word2 = word2, word1
            n = len(word1)
            m = len(word2)
            isPrefix = word2[:n] == word1
            isSuffix = word2[m-n:] == word1
            return isPrefix and isSuffix
        
        n = len(words)
        pairs = 0
        for i in range(n):
            for j in range(i+1, n):
                if len(words[i]) <= len(words[j]):
                    pairs += (words[j].startswith(words[i]) and words[j].endswith(words[i]))
                    #pairs += isSuffixAndPrefix(words[i], words[j])
        return pairs
# Time Complexity: O(n^2 * k), k is len of word used to compare for prefix and suffix
# Space Complexity: O(1)
```