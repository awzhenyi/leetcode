---
sidebar_position: 7
tags:
 - Hard
---

https://leetcode.com/problems/median-of-two-sorted-arrays

## Problem Understanding
Find the median of two sorted arrays. The median is the middle value when arrays are combined and sorted. If the combined length is even, it's the average of the two middle values.

## Approach 1: Binary Search with Partitioning (Optimal)
The key insight is to partition both arrays such that the left halves contain exactly half the elements, and all elements in the left halves are ≤ all elements in the right halves.

**Core Concept**:
- Imagine drawing a partition line in each array that divides it into left and right parts
- We want: `left_part_size = (total_length + 1) // 2` (handles both even and odd cases)
- The partition is correct when: `max(left_part) ≤ min(right_part)` for both arrays
- Once we find the correct partition, the median is just `max(left_part)` or `(max(left_part) + min(right_part)) / 2`

**Why Binary Search Works**:
- We only need to search the shorter array (optimization)
- The partition in the longer array is automatically determined: `partitionY = required - partitionX`
- If left part of array1 is too large → move partition left
- If left part of array1 is too small → move partition right
- This creates a binary search space

**Edge Cases**:
- Use `-inf` when partition is at the start (no left element)
- Use `+inf` when partition is at the end (no right element)

```python
class Solution:
    def findMedianSortedArrays(self, nums1: List[int], nums2: List[int]) -> float:
        if len(nums1) > len(nums2):
            nums1, nums2 = nums2, nums1
        m, n = len(nums1), len(nums2)
        l, r = 0, m
        #nums1 = [1 2 |] put a partition somewhere to mark whether we have half the sorted elements
        #nums2 = [3 | 4 5 ]
        # if total length of nums1 + nums2 => even (we can take max of left partitions and min of right partitions) / 2.0
        # if total length is odd => we can take max of left partitions
        # optimization: we only search the shorter array, and we put the partition of the longer array by just half - first partition
        required = (m + n + 1) // 2 
        # m + n = 9, m + n + 1 // 2 -> 5. 5 numbers is good because it covers the midpoint
        # m + n = 10, m + n + 1 // 2 -> 5. 5 numbers is good because the median will be make up of 5th and 6th number
        while l <= r:
            partition1 = (l + r) // 2
            partition2 = required - partition1
            #we want 4 numbers
            left1 = float('-inf') if partition1 == 0 else nums1[partition1 - 1] #arbitarily small number so it has no effect when calling min.
            right1 = float('inf') if partition1 == len(nums1) else nums1[partition1]
            left2 = float('-inf') if partition2 == 0 else nums2[partition2 - 1]
            right2 = float('inf') if partition2 == len(nums2) else nums2[partition2]

            # How do we know our partition is correct. when leftX <= rightY and leftY <= rightX
            if left1 <= right2 and left2 <= right1:
                if (m + n) % 2 == 0:
                    return (max(left1, left2) + min(right1, right2)) / 2.0
                return max(left1, left2)
            elif left1 > right2:
                r = partition1 - 1
            else:
                l = partition1 + 1

    # Time Complexity: O(log min(N, M))
    #   - Binary search on the shorter array only
    #   - Each iteration eliminates half the search space
    #   - If shorter array has length M, we do log(M) iterations
    # Space Complexity: O(1)
    #   - Only using constant extra variables, no additional data structures

## Approach 2: Merge Until Median (Simpler but Slower)
Merge the two sorted arrays until we reach the median position(s), then return the median value(s).

**How it works**:
- Use two pointers to merge both arrays in sorted order
- Track the current index as we merge
- When we reach the median index(es), save those values
- For even length: need the two middle values
- For odd length: need only the middle value

**Why it's simpler**:
- Straightforward merge logic (like merging in merge sort)
- Easy to understand and implement
- No complex partition logic

**Trade-off**:
- Slower: O(N) time vs O(log N) for approach 1
- But more intuitive for those familiar with merging

```python
    def findMedianSortedArrays2(self, nums1: List[int], nums2: List[int]) -> float:
        m, n = len(nums1), len(nums2)
        mid_index = (m + n) // 2 #total is 10, idx 5, total is 9, idx = 4 -> middle number
        mid_minus_one_index = mid_index - 1 #idx 4
        mid1, mid2 = 0, 0
        i, j = 0, 0
        curr_idx = 0
        while i < m or j < n:
            if i < m and (j >= n or nums1[i] <= nums2[j]):
                curr_num = nums1[i]
                i += 1
            else:
                curr_num = nums2[j]
                j += 1
            
            if curr_idx == mid_minus_one_index:
                mid1 = curr_num
            if curr_idx == mid_index:
                mid2 = curr_num
                break #we found the 2 numbers that we need
            curr_idx += 1
        
        if (m + n) % 2 == 0:
            return (mid1 + mid2) / 2.0
        else: 
            return mid2

    # Time Complexity: O(N + M)
    #   - In worst case, we merge until we reach the median position
    #   - This requires traversing up to (N+M)/2 elements
    #   - Simplified to O(N) where N = total length
    # Space Complexity: O(1)
    #   - Only using constant extra variables for pointers and tracking
```