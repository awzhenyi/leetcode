---
tags:
 - Medium
---

https://leetcode.com/problems/task-scheduler

```python
class Solution:
    def leastInterval(self, tasks: List[str], n: int) -> int:
        count = Counter(tasks)
        heap = [-c for c in count.values()]
        heapq.heapify(heap)
        queue = collections.deque()
        intervals = 0

        while heap or queue:
            intervals += 1
            if heap:
                task_freq = heapq.heappop(heap)
                if task_freq != -1:
                    queue.append([task_freq + 1, intervals + n])

            elif queue:
                intervals = queue[0][1]

            if queue and queue[0][1] == intervals:
                task_freq, task_interval = queue.popleft()
                heapq.heappush(heap, task_freq)

        return intervals
# Time Complexity: O()
# Space Complexity: O()
```