---
tags: 
 - Hard
---
https://leetcode.com/problems/sliding-window-maximum/description/

classic maintain monotonic queue. Be careful of always including at least a valid number in the current window, hence always append at the end. Only start popping at the next iteration.

```python
class Solution:
    def maxSlidingWindow(self, nums: List[int], k: int) -> List[int]:
        queue = collections.deque()
        max_window = []
        for i in range(len(nums)):
            # max index past the sliding window
            if queue and i-k == queue[0]:
                queue.popleft()
            

            while queue and nums[i] >= nums[queue[-1]]:
                queue.pop()
            queue.append(i)

            print(queue)
            # add if window >= k
            if i + 1 >= k:
                max_window.append(nums[queue[0]])
        return max_window   


# Time Complexity: O(N)
# Space Complexity: O(N)
```