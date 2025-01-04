# https://leetcode.com/problems/max-dot-product-of-two-subsequences/description/
class Solution:
    def maxDotProduct(self, nums1: List[int], nums2: List[int]) -> int:
        n = len(nums1)
        m = len(nums2)
        cache = {}

        def dp(i, j):
            if i == n or j == m:
                return 0
            if (i, j) in cache:
                return cache[(i, j)]

            ans = nums1[i] * nums2[j] + dp(i+1, j+1)
            ans = max(
                ans,
                dp(i+1, j),
                dp(i, j+1)
            )

            cache[(i, j)] = ans
            return ans

        if max(nums1) < 0 and min(nums2) > 0:
            return max(nums1) * min(nums2)

        if min(nums1) > 0 and max(nums2) < 0:
            return min(nums1) * max(nums2)

        return dp(0, 0)

# Time Complexity: O()
# Space Complexity: O()
