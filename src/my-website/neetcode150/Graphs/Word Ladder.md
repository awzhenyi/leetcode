---
sidebar_position: 17
tags:
 - Hard
---

https://leetcode.com/problems/word-ladder/

1. Use BFS. start with begin word and 1 number of transformation sequence.
2. The BFS target is swapping each character to the other 25 characters (brute force search) and check if this word exists in the wordset
3. Remove from the wordset, or add to a seen (copy of wordset) to indicate this word is used.

```python
class Solution:
    def ladderLength(self, beginWord: str, endWord: str, wordList: List[str]) -> int:
        wordSet = set(wordList)
        seen = set()
        q = collections.deque([(beginWord, 1)])
        while q:
            word, steps = q.popleft()
            if word == endWord:
                return steps
            for i in range(len(word)):
                begin = word[:i]
                end = word[i+1:]
                swap = word[i]
                for char in "abcdefghijklmnopqrstuvwxyz":
                    if char == swap:
                        continue
                    transformed_word = begin + char + end
                    if transformed_word in wordSet and transformed_word not in seen:
                        seen.add(transformed_word)
                        q.append((transformed_word, steps+1))
        return 0
# Time Complexity: O(M * L^2), M is the number of words, L is the length of word
# Space Complexity: O(M)
```