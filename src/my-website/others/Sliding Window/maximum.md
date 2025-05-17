---
tags:
 - Medium
 - Tiktok
---

https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards

1. recognize that the sliding window is actually the part to remove, and the maximum score is `total_score - sliding window score`.
2. The key is to track the minimum sum of the sliding window of size n - k

```python
class Solution:
    def maxScore(self, cardPoints: List[int], k: int) -> int:
        n = len(cardPoints)
        window_size = n - k
        curr_points = sum(cardPoints[:window_size])
        min_points = curr_points
        for i in range(window_size, n):
            curr_points += cardPoints[i] - cardPoints[i-window_size]
            min_points = min(min_points, curr_points)
        return sum(cardPoints) - min_points
# Time Complexity: O(N)
# Space Complexity: O(1)
```

1. Prefix sum

```python

# Time Complexity: O(K)
# Space Complexity: O(1)
```