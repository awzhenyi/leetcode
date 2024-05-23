https://leetcode.com/problems/group-anagrams/

1. Use sorted string as the key to determine anagrams.
2. String sorting is troublesome in python since it returns list of char. use ''.join to get back string.  
3. dict.values() return a list of values. in this case, it conveniently returns list of list.

```python
class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        count = collections.defaultdict(list)
        for s in strs:
            temp_s = ''.join(sorted(s))
            count[temp_s].append(s)
        return count.values()

#Time Complexity: O(N log N) -> sorting of each string
#Space Complexity: O(N) -> n number of strings
```