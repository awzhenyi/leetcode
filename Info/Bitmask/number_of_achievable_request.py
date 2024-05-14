# https://leetcode.com/problems/maximum-number-of-achievable-transfer-requests/submissions/

# bitmask / combinatorics / bruteforce

class Solution:
    def maximumRequests(self, n: int, requests: List[List[int]]) -> int:
        nr = len(requests)
        ans = 0

        def isAchievable(mask):
            in_degree, out_degree = [0] * n, [0] * n
            for i in range(nr):
                # Check if value of bit at this position is more than 0, ie if bit at position == 1
                if (1 << i) & mask > 0:
                    out_degree[requests[i][0]] += 1
                    in_degree[requests[i][1]] += 1
            if in_degree == out_degree:  # net zero
                return sum(out_degree)
            else:
                return 0

        for i in range(1 << nr):
            # get all states of request in requests to be either 0 or 1
            ans = max(ans, isAchievable(i))

        return ans

# Time Complexity:
# Space Complexity:
