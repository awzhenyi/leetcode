---
tags:
 - Medium
---

```python
class TrieNode:
    def __init__(self):
        self.doesWordExist = False
        self.children = {} #consists of more trie nodes

class Trie:

    def __init__(self):
        self.root = TrieNode()

    def insert(self, word: str) -> None:
        curr = self.root
        for c in word:
            if c not in curr.children.keys():
                curr.children[c] = TrieNode()
            curr = curr.children[c]
        curr.doesWordExist = True

    def search(self, word: str) -> bool:
        curr = self.root
        for c in word:
            if c not in curr.children.keys():
                return False
            curr = curr.children[c]
        return curr.doesWordExist

    def startsWith(self, prefix: str) -> bool:
        curr = self.root
        for c in prefix:
            if c not in curr.children.keys():
                return False
            curr = curr.children[c]
        return True


# Your Trie object will be instantiated and called as such:
# obj = Trie()
# obj.insert(word)
# param_2 = obj.search(word)
# param_3 = obj.startsWith(prefix)

# Time Complexity: O()
# Space Complexity: O()
```