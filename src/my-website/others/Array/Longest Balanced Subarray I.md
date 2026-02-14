---
tags:
 - Medium
---

https://leetcode.com/problems/longest-balanced-subarray-i

## Problem Understanding

This problem asks us to find the longest contiguous subarray where the **count of distinct even numbers** equals the **count of distinct odd numbers**.

For example:
- `[2,3,4,5,6]` → Answer is 4 (subarray `[3,4,5,6]` has 2 distinct evens {4,6} and 2 distinct odds {3,5})
- `[1,2,3]` → Answer is 2 (subarray `[2,3]` has 1 even {2} and 1 odd {3})

## How the Solution Works

The solution uses a **brute force approach** with two nested loops to check all possible subarrays:

1. **Outer loop** (variable `i`): Sets the starting point of each subarray
2. **Inner loop** (variable `j`): Extends the subarray from position `i` to the end

For each subarray from index `i` to `j`:
- Use two **sets** to track distinct even and odd numbers
- Add each number to the appropriate set based on whether it's even or odd
- Whenever the sets have equal size, we've found a balanced subarray
- Track the maximum length found

## Why This Works

**Sets automatically handle duplicates**: Using sets ensures we count only distinct values. For example, if a subarray contains `[2, 4, 2]`, the even set will only contain `{2, 4}`, giving us a count of 2 distinct even numbers.

**Progressive expansion**: As we extend the subarray with the inner loop, we incrementally build up the even and odd sets. This allows us to check every possible subarray starting from position `i` efficiently.

**Comparison at each step**: By checking `len(odd) == len(even)` after adding each element, we ensure we don't miss any balanced subarrays.

## Time & Space Complexity

- **Time Complexity**: O(n²) where n is the length of the input array. We have two nested loops that iterate through all possible subarrays.
- **Space Complexity**: O(n) in the worst case, when all numbers in the array are distinct and we store them all in the sets.

## Solution

```python
class Solution:
    def longestBalanced(self, nums: List[int]) -> int:
        n = len(nums)
        max_len = 0
        for i in range(n):
            even = set()
            odd = set()
            for j in range(i, n):
                if nums[j] % 2 == 0:
                    even.add(nums[j])
                else:
                    odd.add(nums[j])
                if len(odd) == len(even):
                    max_len = max(max_len, j - i + 1)
                    
        return max_len

# Time: O(n²) - nested loops iterating through all subarrays
# Space: O(n) - sets storing unique even and odd numbers
```
