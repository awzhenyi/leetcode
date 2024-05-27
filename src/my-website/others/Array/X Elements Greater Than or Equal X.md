https://leetcode.com/problems/special-array-with-x-elements-greater-than-or-equal-x/

Count sort kinda
```python
class Solution:
    def specialArray(self, nums: List[int]) -> int:
        n = len(nums)
        freq = [0] * (n+1)
        for num in nums:
            freq[min(n, num)] += 1
        print(freq)
        num_greater_than_or_equal = 0
        
        for i in range(n, -1, -1):
            num_greater_than_or_equal += freq[i]
            if num_greater_than_or_equal == i:
                return i
        
        return -1
# Time Complexity: O(N)
# Space Complexity: O(N)
```