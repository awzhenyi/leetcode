---
tags:
 - Medium
---

https://leetcode.com/problems/group-anagrams/

1. Use sorted string as the key to determine anagrams.
2. String sorting is troublesome in python since it returns list of char. use ''.join to get back string.  

```python
class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        count = collections.defaultdict(list)
        for s in strs:
            temp_s = ''.join(sorted(s))
            count[temp_s].append(s)
        return [v for v in count.values()]

#Time Complexity: O(N log N) -> sorting of each string
#Space Complexity: O(N) -> n number of strings
```