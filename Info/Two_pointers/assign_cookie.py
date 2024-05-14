# https://leetcode.com/problems/assign-cookies/description/

# Easy 2 pointer while loop

class Solution:
    def findContentChildren(self, g: List[int], s: List[int]) -> int:
        g.sort(reverse=True)
        s.sort(reverse=True)

        i, j = 0, 0

        while i < len(g) and j < len(s):
            if s[j] >= g[i]:
                # if cookie is big enough for this kid, use it
                j += 1
            # else just go to next kid
            i += 1

        return j  # number of cookies given out


# Time Complexity:
# Space Complexity:
