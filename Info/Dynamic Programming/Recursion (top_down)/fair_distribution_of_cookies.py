# https://leetcode.com/problems/fair-distribution-of-cookies/solutions/3634043/python-efficient-backtracking-fully-explained/

# recursion, backtrack, getting permutations

class Solution:
    def distributeCookies(self, cookies: List[int], k: int) -> int:

        buckets = [0] * k

        def solve(index: int) -> int:
            if index == len(cookies):
                return max(buckets)

            result = float("inf")
            for i in range(min(k, index + 1)):  # notice the condition in the loop
                buckets[i] += cookies[index]
                result = min(result, solve(index + 1))
                buckets[i] -= cookies[index]
            return result

        return solve(0)


# Time Complexity:

# Space Complexity:
