---
tags:
 - Medium
 - KMP
 - heap
---

https://leetcode.com/problems/max-sum-of-a-pair-with-equal-sum-of-digits

math -> how to get sum digits using mod and //
heap simulate -> always keep heap size <= 2

```python
class Solution:
    def maximumSum(self, nums: List[int]) -> int:
        sum_digits_map = defaultdict(list)
        def findSumDigits(num): #O(d), where d is the number of digits
            sum_digits = 0
            while num > 0:
                sum_digits += (num % 10)
                num //= 10
            return sum_digits
        for num in nums:
            key = findSumDigits(num)
            heapq.heappush(sum_digits_map[key], num)
            if len(sum_digits_map[key]) > 2: #O(1) heap operations due to keeping the size at 2 max
                heapq.heappop(sum_digits_map[key])
        
        curr_max = -1
        for heap in sum_digits_map.values():
            if len(heap) >= 2:
                temp = heapq.heappop(heap) + heapq.heappop(heap)
                curr_max = max(curr_max, temp)
        return curr_max

# Time Complexity: O(Nd)
# Space Complexity: O(81) 81 possible keys, each heap size kept at max 2 so arguably constant
```            

KMP solution

```python

# Time Complexity: O()
# Space Complexity: O()
```
        