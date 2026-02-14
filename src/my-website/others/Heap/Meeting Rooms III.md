---
tags:
 - Hard
---

https://leetcode.com/problems/meeting-rooms-iii

## Problem Understanding
Given `n` meeting rooms and a list of meetings with start/end times, assign each meeting to a room following these rules:
1. Process meetings in chronological order (by start time)
2. If a room is available, use the **smallest room number**
3. If no room is available, wait for the next room to free up and extend that meeting's duration
4. Return the room number that was used the **most** (smallest number if tie)

## Key Insight: Two Heaps Strategy
Use two heaps to efficiently track available and occupied rooms:
- **Available rooms heap**: Min heap of room numbers (always use smallest available)
- **Used rooms heap**: Min heap of `(end_time, room_number)` (track when rooms free up)

**Why heaps?**: 
- Need to quickly find the smallest available room number
- Need to quickly find the room that frees up earliest
- Heaps provide O(log n) operations for both

## Algorithm
For each meeting (processed in chronological order):

1. **Free up rooms**: While there are rooms that have ended (`end_time <= start`), move them back to available heap

2. **Assign room**:
   - **If available rooms exist**: Use the smallest room number, schedule meeting to end at `end`
   - **If no available rooms**: Wait for the earliest-ending room to free up, then extend that meeting's duration by `(end - start)` to accommodate the new meeting

3. **Track frequency**: Increment count for the room used

4. **Return result**: Find room with maximum frequency (smallest room number if tie)

**Key Detail**: When no room is available, we extend the current meeting's end time by the new meeting's duration. This represents the waiting time.

```python
class Solution:
    def mostBooked(self, n: int, meetings: List[List[int]]) -> int:
        meetings = sorted(meetings)
        room_freq = defaultdict(int)
        available_rooms = list(range(n))
        heapq.heapify(available_rooms)
        
        used_rooms = []
        
        for start, end in meetings:
            while used_rooms and start >= used_rooms[0][0]:
                free_room = heapq.heappop(used_rooms)
                heapq.heappush(available_rooms, free_room[1])
            if available_rooms:
                room_to_use = heapq.heappop(available_rooms)
                heapq.heappush(used_rooms, (end, room_to_use))
                room_freq[room_to_use] += 1
            else:
                next_end, next_room = heapq.heappop(used_rooms)
                heapq.heappush(used_rooms, (next_end + end - start, next_room))
                room_freq[next_room] += 1

        return min(room_freq, key=lambda k: (-room_freq[k], k))

# Time Complexity: O(M log M + M log N)
#   - M = number of meetings, N = number of rooms
#   - Sorting meetings: O(M log M)
#   - For each meeting:
#     - Freeing up rooms: O(M log N) amortized (each room freed at most once)
#     - Heap operations: O(log N) each (push/pop)
#   - Finding max frequency: O(N)
#   - Total: O(M log M + M log N)
# Space Complexity: O(N + M)
#   - Available rooms heap: O(N)
#   - Used rooms heap: O(N) worst case
#   - Room frequency map: O(N)
#   - Sorted meetings: O(M)
#   - Total: O(N + M)
# Note: The return statement uses a clever trick - `min` with `-room_freq[k]` finds the maximum
#       frequency (since min of negatives = max of positives), and `k` as tiebreaker ensures
#       smallest room number when frequencies are equal
```