---
tags:
 - Hard
---

https://leetcode.com/problems/median-of-two-sorted-arrays

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
            partitionX = (l + r) // 2
            partitionY = required - partitionX
            #we want 4 numbers
            leftX = nums1[partitionX - 1] if partitionX > 0 else float('-inf') #arbitarily small number so it has no effect when calling min.
            rightX = nums1[partitionX] if partitionX < m else float('inf')
            leftY = nums2[partitionY - 1] if partitionY > 0 else float('-inf')
            rightY = nums2[partitionY] if partitionY < n else float('inf')

            # How do we know our partition is correct. when leftX <= rightY and leftY <= rightX
            if leftX <= rightY and leftY <= rightX:
                if (m + n) % 2 == 0:
                    return (max(leftX, leftY) + min(rightX, rightY)) / 2.0 
                return max(leftX, leftY)
            
            elif leftX >= rightY:
                r = partitionX - 1
            else:
                l = partitionX + 1

    # Time Complexity: O(log min(N, M))
    # Space Complexity: O(1)

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

 
    # Time Complexity: O(N)
    # Space Complexity: O(1)
```