# https://leetcode.com/problems/single-number/

# Bit manipulation tricks

class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        # 0 XOR num = num
        # num XOR num = 0
        ans = 0
        for num in nums:
            ans ^= num

        return ans
