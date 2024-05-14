# https://leetcode.com/problems/substring-with-largest-variance/description/

# Array, dp (kadane)

'''
idea: get all pairs of (a, b), where a and b are letters in string s, each representing max_letter & min_letter. Find max
variant in all of these pairs using modified kadane.

modified kadane:
1. only reset count to 0 if count < 0 when there are still min_letter left in the string while iterating. This is to prevent an invalid substring.
2. only reset count to 0 when the substring contains min_letter
3. only update kadane's global max, ie res = max(res, local_count) when the substring is valid, ie contains at least 1 min_letter
'''


class Solution:
    def largestVariance(self, s: str) -> int:
        freq = [0] * 26
        letters = set()
        for char in s:
            freq[ord(char) - ord('a')] += 1
            letters.add(char)

        def solve(max_letter, min_letter):
            res = 0
            local_count = 0
            min_letter_count = 0
            min_letter_total_count = freq[ord(min_letter) - ord('a')]

            for char in s:
                if char == max_letter:
                    local_count += 1
                elif char == min_letter:
                    local_count -= 1
                    min_letter_count += 1
                    min_letter_total_count -= 1

                if min_letter_total_count > 0:
                    if local_count < 0 and min_letter_count > 0:
                        local_count = 0
                        min_letter_count = 0

                if min_letter_count > 0:
                    res = max(res, local_count)

            return res

        ans = 0
        for max_letter in letters:
            for min_letter in letters:
                if max_letter == min_letter:
                    continue
                ans = max(ans, solve(max_letter, min_letter))
        return ans

# Time Complexity = O(m * m * n), where m == unique characters in string s, ie worst case scenario is also 26.
# Space Complexity = O(n)

    def largestVariance(self, s: str) -> int:
        letters = 'abcdefghijklmnopqrstuvwxyz'
        ans = 0
        for char1 in letters:
            for char2 in letters:
                if char1 == char2:
                    continue
                local_max, buff, m = 0, 0, float("inf")
                for char in s:
                    if char == char1:
                        local_max += 1
                    elif char == char2:
                        m = min(m, buff)
                        local_max -= 1
                        buff = local_max
                    ans = max(ans, local_max - m)
        return ans

# Time Complexity: O(26 * 26 * n)
# Space Complexity: O(n)
