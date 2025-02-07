---
tags:
 - Hard
---

https://leetcode.com/problems/word-search-ii

1. Build Trie from words
2. Backtrack the board to see if find word in trie
3. Prune the trie for optimization

```python
class TrieNode:
    def __init__(self):
        self.isWord = False
        self.word = None
        self.children = {}

class Trie:
    def __init__(self):
        self.root = TrieNode()
    
    def addWord(self, word):
        curr = self.root
        for c in word:
            if c not in curr.children:
                curr.children[c] = TrieNode()
            curr = curr.children[c]
        curr.word = word

class Solution:
    def findWords(self, board: List[List[str]], words: List[str]) -> List[str]:
        trie = Trie()
        for word in words:
            trie.addWord(word)
        ROWS = len(board)
        COLS = len(board[0])
        matched_words = []
        def backtrack(r, c, parent):
            letter = board[r][c]
            curr = parent[letter]
            if curr.word is not None:
                matched_words.append(curr.word)
                curr.word = None
            board[r][c] = '#'
            for _r, _c in [(r+1, c), (r-1, c), (r, c+1), (r, c-1)]:
                if 0 <= _r < ROWS and 0 <= _c < COLS and board[_r][_c] in curr.children:
                    backtrack(_r, _c, curr.children)
            board[r][c] = letter

            # Prune the Trie: remove the node if it has no children
            if not curr.children:
                del parent[letter]

        for r in range(ROWS):
            for c in range(COLS):
                if board[r][c] in trie.root.children:
                    backtrack(r, c, trie.root.children)
        return matched_words
# Time complexity: O(M(4 * (3^(L−1)), where M is the number of cells in the board and L is the maximum length of words.
# Space Complexity: O(N), where N is the total number of letters in the trie
```