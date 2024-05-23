https://leetcode.com/problems/contains-duplicate/

Use dictionary / hashmap to keep track of any number appearing more than once

```python
class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        count = Counter(nums)
        return max(count.values()) > 1
#Time Complexity: O(N)
#Space Complexity: O(N)
```

Use sort for constant space but n log n time

```python
class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        nums = sorted(nums)
        for i in range(1, len(nums)):
            if nums[i] == nums[i-1]:
                return True
        return False
#Time Complexity: O(N log N)
#Space Complexity: O(1)
```