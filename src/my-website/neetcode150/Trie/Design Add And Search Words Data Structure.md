---
tags:
 - Medium
---

https://leetcode.com/problems/design-add-and-search-words-data-structure

1. build Trie
2. DFS for wildcard match (consider all children)

```python
class TrieNode:
    def __init__(self):
        self.isWord = False
        self.children = {}

class WordDictionary:

    def __init__(self):
        self.root = TrieNode()

    def addWord(self, word: str) -> None:
        curr = self.root
        for c in word:
            if c not in curr.children:
                curr.children[c] = TrieNode()
            curr = curr.children[c]
        curr.isWord = True

    def search(self, word: str) -> bool:
        return self.dfs(self.root, word, 0)

    def dfs(self, curr, word, i):
        if i >= len(word):
            return curr.isWord

        if word[i] == '.':
            for node in curr.children.values():
                if self.dfs(node, word, i + 1):
                    return True
            return False
        else:
            if word[i] not in curr.children:
                return False
            node = curr.children[word[i]]
            return self.dfs(node, word, i + 1)


# Your WordDictionary object will be instantiated and called as such:
# obj = WordDictionary()
# obj.addWord(word)
# param_2 = obj.search(word)

# Time complexity: O(M) for the "well-defined" words without dots, where M is the key length, and N is a number of keys, and O(N⋅26^M) for the "undefined" words. That corresponds to the worst-case situation of searching an undefined word M times which is one character longer than all inserted keys.
# Space Complexity: O(N) for recursion stack
```