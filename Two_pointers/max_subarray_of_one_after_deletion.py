# https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/description/

# Sliding window

class Solution:
    def longestSubarray(self, nums: List[int]) -> int:
        num_zero = 1
        l = 0
        for r in range(len(nums)):

            # Equivalent to following block of code since nums[j] == 0 = 1 if true else 0, k -= 1 or k -= 0
            num_zero -= nums[r] == 0
            '''
            if nums[r] == 0:
                num_zero -= 1
            '''

            if num_zero < 0:
                if nums[l] == 0:
                    num_zero += 1
                l += 1
        return r - l


class Solution:
    def longestSubarray(self, nums: List[int]) -> int:
        l = 0
        ans = -1
        zero_idx = -1
        for r in range(len(nums)):
            if zero_idx == -1 and nums[r] == 0:
                zero_idx = r
            elif zero_idx != -1 and nums[r] == 0:
                ans = max(ans, r-l-1)
                l = zero_idx + 1
                zero_idx = r
            elif r == len(nums) - 1:
                if (zero_idx == r-1 and nums[r] == 0):
                    ans = max(ans, 0)
                else:
                    ans = max(ans, r-l)

        return ans
