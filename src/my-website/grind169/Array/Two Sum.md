https://leetcode.com/problems/two-sum/

Optimal
```python
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        hashmap = {}
        for i in range(len(nums)):
            res = target - nums[i]
            if (res in hashmap):
                return (i, hashmap[res])
            else:
                hashmap[nums[i]] = i

#Time Complexity: O(N)
#Space Complexity: O(N)
```

Brute Force
```python
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        for i in range(0, len(nums)-1):
            for j in range(i+1, len(nums)):
                if (nums[i] + nums[j] == target):
                    return (i,j)

#Time Complexity: O(N)
#Space Complexity: O(1)

```