---
tags:
 - Medium
---

https://leetcode.com/problems/meeting-rooms-ii/

Line sweep algorithm. Have a time -> rooms needed at that time map. Loop each interval, at the start time of each interval, add 1 room. At the end time of each interval, minus one room. Then iterate the map sorted by time (key) and then just count the max rooms needed at any time.

```python
class Solution:
    def minMeetingRooms(self, intervals: List[List[int]]) -> int:
        max_rooms = 0
        time_to_rooms_map = defaultdict(int)
        for interval in intervals:
            time_to_rooms_map[interval[0]] += 1
            time_to_rooms_map[interval[1]] -= 1
        
        curr = 0
        for time, rooms_needed in sorted(time_to_rooms_map.items()):
            curr += rooms_needed
            max_rooms = max(max_rooms, curr)
        return max_rooms
        
# Time Complexity: O(N)
# Space Complexity: O(N)
```