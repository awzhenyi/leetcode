---
tags:
 - Hard
---

https://leetcode.com/problems/find-median-from-data-stream

1. Have 2 heaps, left is max heap, right is min heap (so you can keep the stream sorted)
2. Depending on implementation, choose one side that will have the extra element when total elements is odd
3. Median will always be from the side you choose that have the extra element, or the top of both heaps / 2
4. The key idea is before inserting to one side, u pushpop the number to added to the other side, and insert the return result of the pop.
5. Take note of the negative and positive signs
6. Use heapq.heappushpop instead of separate push and pop since it is more efficient. The reason why it is more efficient is because

heappop is pop out the first element, then move the last element to fill the in the first place, then do a sinking operation, which moving the the element down through consecutive exchange. thus restore the head
it is O(logn)

then you heappush, place the element in the last place, and bubble-up like heappop but reverse
another O(logn)

while heappushpop, pop out the first element, instead of moving the last element to the top, it place the new element in the top, then do a sinking motion. which is almost the same operation with heappop.
just one O(logn)

```python
class MedianFinder:

    def __init__(self):
        self.left = [] #max heap
        self.right = [] #min heap 

    def addNum(self, num: int) -> None:
        if len(self.left) == len(self.right):
            heapq.heappush(self.left, -heapq.heappushpop(self.right, num))
        else:
            heapq.heappush(self.right, -heapq.heappushpop(self.left, -num))
    def findMedian(self) -> float:
        if len(self.left) == len(self.right):
            return (-self.left[0] + self.right[0]) / 2
        return -self.left[0]

# Your MedianFinder object will be instantiated and called as such:
# obj = MedianFinder()
# obj.addNum(num)
# param_2 = obj.findMedian()

# Time Complexity: O(log N)
# Space Complexity: O(N)
```