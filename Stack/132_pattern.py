# https://leetcode.com/problems/132-pattern/description/

# usage of monotonic stack + a curr_min for each element in the stack to represent the curr_min of the array up to this index to keep some required pattern easily

class Solution:
    def find132pattern(self, nums: List[int]) -> bool:
        stack = []
        curr_min = nums[0]
        for num in nums[1:]:
            while stack and num >= stack[-1][0]:
                stack.pop()
            # clever use of conditions such that num is always < stack[-1][0] if it reaches this condition
            if stack and num > stack[-1][1]:
                return True
            if num < curr_min:
                curr_min = num
            stack.append((num, curr_min))

        return False

# Time Complexity: O(N)
# Space Complexity: O(N)
