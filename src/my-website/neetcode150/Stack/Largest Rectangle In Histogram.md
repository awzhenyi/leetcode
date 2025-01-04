---
tags:
 - Hard
---

https://leetcode.com/problems/largest-rectangle-in-histogram

1. keep a monotonically increasing stack (storing index of the height so u can get the width easily)
2. everytime u see a lower height, this marks the end of how much stack[-1] can run horizontally to form a rectangle.
3. so pop and compute
4. width calculation is important. eg [5, 6, 1] -> when 1 appears, compute 6 * 1, and 5 * 2 (height of 5 can run into height of 6 forming a rectangle)
    * pop for the height, width = i - stack[-1] - 1 if stack else i 
5. add a 0 at the end to force a compute for the last bar

```python
class Solution:
    def largestRectangleArea(self, heights: List[int]) -> int:
        stack = [] # monotonically increasing stack
        max_area = 0
        for i, height in enumerate(heights + [0]):
            while stack and height < heights[stack[-1]]:
                _height = heights[stack.pop()]
                _width = i - stack[-1] - 1 if stack else i
                print(f'h: {_height}, w: {_width}')
                max_area = max(max_area, _height * _width)
            stack.append(i)
        return max_area
# Time Complexity: O(N)
# Space Complexity: O(N)
```

Practice questions for mono stack:
239. Sliding Window Maximum https://leetcode.com/problems/sliding-window-maximum/discuss/951683/Python-Decreasing-deque-short-explained
496. Next Greater Element I
739. Daily Temperatures
862. Shortest Subarray with Sum at Least K
901. Online Stock Span
907. Sum of Subarray Minimums
1687. Delivering Boxes from Storage to Ports