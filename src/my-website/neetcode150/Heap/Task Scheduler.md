---
tags:
 - Medium
---

https://leetcode.com/problems/task-scheduler

```python
class Solution:
    def leastInterval(self, tasks: List[str], n: int) -> int:
        available_tasks = [-c for c in Counter(tasks).values()]
        cooldown = collections.deque()
        intervals = 0

        while available_tasks or cooldown:
            intervals += 1
            if available_tasks:
                freq = heapq.heappop(available_tasks)
                if freq != -1: #still have available tasks of this label
                    cooldown.append((freq + 1, intervals + n))

            elif cooldown:
                intervals = cooldown[0][1]
            
            if cooldown and cooldown[0][1] == intervals:
                heapq.heappush(available_tasks, cooldown.popleft()[0])
        
        return intervals

# Time Complexity: O(N log K), N is total number of tasks, K is size of unique tasks
# Space Complexity: O(K), K is size of unique tasks
```