---
sidebar_position: 4
tags:
 - Medium
---

https://leetcode.com/problems/time-based-key-value-store

1. binary search since inserted timestamp is sorted naturally

```python
Pair = collections.namedtuple('ValueTimestampPair', ['value', 'timestamp'])
class TimeMap:

    def __init__(self):
        self.map = collections.defaultdict(list)

    def set(self, key: str, value: str, timestamp: int) -> None:
        self.map[key].append(Pair(value, timestamp))

    def get(self, key: str, timestamp: int) -> str:
        if key not in self.map or timestamp < self.map[key][0].timestamp:
            return ""
        lst = self.map[key]
        l, r = 0, len(lst) - 1
        while l < r:
            mid = (l + r) // 2
            if lst[mid].timestamp >= timestamp:
                r = mid
            else:
                l = mid + 1
        return lst[l].value if lst[l].timestamp <= timestamp else lst[l-1].value


# Your TimeMap object will be instantiated and called as such:
# obj = TimeMap()
# obj.set(key,value,timestamp)
# param_2 = obj.get(key,timestamp)

# Time Complexity: O(log N) for get, O(1) for set
# Space Complexity: O(KV), K is number of keys, V is len(values) 
```
