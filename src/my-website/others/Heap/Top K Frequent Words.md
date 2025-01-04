---
tags:
 - Medium
---

https://leetcode.com/problems/top-k-frequent-words/

1. use __lt__(self, obj) to define comparator for a class

```python
class Word:
    def __init__(self, word):
        self.word = word

    def __lt__(self, o):
        return self.word > o.word

class Solution:
    def topKFrequent(self, words: List[str], k: int) -> List[str]:
        count = Counter(words)
        heap = []
        for w, f in count.items():
            word = Word(w)
            heapq.heappush(heap, (f, word))
            if len(heap) > k:
                heapq.heappop(heap)
        ans = []
        while heap:
            f, w = heapq.heappop(heap)
            ans.append(w.word)
        return ans[::-1]
# Time Complexity: O(N log K)
# Space Complexity: O(N)
```
