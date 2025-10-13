---
sidebar_position: 19
tags:
 - Hard
---

https://leetcode.com/problems/alien-dictionary/

- build ordering graph, key = letter, value = list of letters that come before key
- account for the edge case with prefix length. if word1 and word2 has same prefix, word1 is longer than word2 but comes before word2, return `""`
- else just do standard toposort for checking if the lexographical ordering is valid

```python
class Solution:
    def alienOrder(self, words: List[str]) -> str:
        graph = defaultdict(list)
        unique_letters = set(c for w in words for c in w)

        for i in range(len(words) - 1):
            word1, word2 = words[i], words[i + 1]
            # Find the case where its not lexographically sorted, word1 and word2 has same prefix, word1 is longer than word2 but comes before word2
            # word1 = abczzzz
            # word2 = abc
            prefix_len = min(len(word1), len(word2))
            if len(word1) > len(word2) and word1[:prefix_len] == word2[:prefix_len]:
                return ""

            # Else normal case, we build the dependency graph
            for j in range(prefix_len):
                if word1[j] != word2[j]:
                    graph[word2[j]].append(word1[j])
                    break
        
        def convertOrdinal(char):
            return ord(char) - ord('a')

        visited = 26 * [0]
        res = []

        def isCyclic(char):
            idx = convertOrdinal(char)
            if visited[idx] == 1:
                return True 

            visited[idx] = 1
            for neighbour in graph[char]:
                if visited[convertOrdinal(neighbour)] != 2 and isCyclic(neighbour):
                    return True
                    
            visited[idx] = 2
            res.append(char)
            return False
        
        for char in unique_letters:
            if visited[convertOrdinal(char)] == 0 and isCyclic(char):
                return ""
                
        return ''.join(res)

# Time Complexity: O(C), C = len of all words added together
# Space Complexity: O(U + min(N, U^2)) adj list = V + E, U = number of unique letters -> number of vertices, N is total number of strings in input
```
