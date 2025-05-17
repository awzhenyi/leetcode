https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/

Simple two pointer one initialized at index 0 and another at index (n - 1)

```python
class Solution:
    def twoSum(self, numbers: List[int], target: int) -> List[int]:
        l, r = 0, len(numbers) - 1
        while l < r:
            num_sum = numbers[l] + numbers[r]
            if num_sum == target:
                return [l + 1, r + 1]
            if num_sum > target:
                r -= 1
            else:
                l += 1

# Time Complexity: O(N)
# Space Complexity: O(1)
```