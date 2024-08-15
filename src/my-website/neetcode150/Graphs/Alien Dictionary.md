---
tags:
 - Hard
---

https://leetcode.com/problems/alien-dictionary/

```python
class Solution:
    def alienOrder(self, words: List[str]) -> str:
        graph = {}
        for word in words:
            for char in word:
                graph[char] = []
        for i in range(len(words) - 1):
            word1, word2 = words[i], words[i+1]
            prefix_len = min(len(word1), len(word2))
            if len(word1) > len(word2) and word1[:prefix_len] == word2[:prefix_len]:
                return ""
            for j in range(prefix_len):
                if word1[j] != word2[j]:
                    graph[word2[j]].append(word1[j])
                    break
        res = []
        visited = [0] * 26
        def isCyclic(char):
            if visited[ord(char) - ord('a')] == 1:
                return True
            visited[ord(char) - ord('a')] = 1
            for nei in graph[char]:
                if visited[ord(nei) - ord('a')] != 2 and isCyclic(nei):
                    return True
            visited[ord(char) - ord('a')] = 2
            res.append(char)
            return False
        
        for c in graph:
            if not visited[ord(c) - ord('a')] and isCyclic(c):
                return ""
        return ''.join(res)


# Time Complexity: O(C), C = len of all words added together
# Space Complexity: O(U + min(N, U^2)) adj list = V + E, U = number of unique letters -> number of vertices, N is total number of strings in input
```
