---
tags:
 - Medium
---

https://leetcode.com/problems/minimum-deletions-to-make-string-balanced

## Problem Understanding

Given a string `s` containing only 'a' and 'b' characters, we need to make it "balanced" by deleting the minimum number of characters. A balanced string has all 'a's appearing before all 'b's (e.g., "aaabbb" is balanced, but "abab" is not).

## Key Insight: Try All Split Points

The solution works by trying every possible "split point" in the string. At each position, we imagine that:
- Everything to the **left** of this position should be all 'a's
- Everything to the **right** of this position should be all 'b's

For each split point, we calculate how many deletions are needed:
- Delete all 'b's that appear on the left side (they shouldn't be there)
- Delete all 'a's that appear on the right side (they shouldn't be there)

We then take the minimum deletions across all possible split points.

## Algorithm

1. **Count total characters**: Count all 'a's and 'b's in the string initially using `Counter`
2. **Handle edge cases**: If there are no 'a's or no 'b's, no deletions are needed (return 0)
3. **Initialize tracking variables**:
   - `a_right`: All 'a's that are currently to the right (starts with total count)
   - `b_left`: All 'b's that are currently to the left (starts at 0)
4. **Iterate through each position** (including after the string ends by adding 'c'):
   - At each position, calculate deletions needed: `a_right + b_left`
   - This represents: delete all 'a's remaining on right + delete all 'b's already seen on left
   - Update the minimum answer
   - Move the character from right to left by updating counters
5. **Return the minimum deletions found**

**Why add 'c' at the end?**: The sentinel 'c' allows us to check the case where we keep all 'a's and delete all 'b's (split point after the entire string).

## Why This Solution Works

- **Greedy approach**: We try every possible split point and pick the best one
- **Efficient tracking**: By maintaining `a_right` and `b_left` counters, we can compute deletions in O(1) at each position
- **Complete coverage**: By iterating through `s + 'c'`, we check all possible split points including the edge case of keeping all 'a's

## Layman Explanation

Imagine you're cutting the string at different positions. At each cut:
- Left side should only have 'a's → delete any 'b's you've seen so far (`b_left`)
- Right side should only have 'b's → delete any 'a's that remain (`a_right`)

The algorithm tries every possible cut position and finds the one requiring the fewest deletions. The trick is efficiently tracking how many 'a's and 'b's are on each side as we scan through the string.

For example, with string "aababbab":
- At position 0 (before first char): Delete all 'a's on right (5) + no 'b's on left (0) = 5 deletions
- At position 3 (after "aab"): Delete 'a's remaining on right (2) + 'b's seen on left (1) = 3 deletions
- We find the minimum across all positions

```python
class Solution:
    def minimumDeletions(self, s: str) -> int:
        count = Counter(s)
        a_right = count['a']
        b_right = count['b']
        if a_right == 0 or b_right == 0:
            return 0
        a_left, b_left = 0, 0
        ans = inf
        for c in s + 'c':
            ans = min(ans, (a_right + b_left))
            if c == 'a':
                a_left += 1
                a_right -= 1
            elif c == 'b':
                b_left += 1
                b_right -= 1
        return ans

# Time Complexity: O(n) where n is the length of string s
#   - Counter initialization: O(n) to count all characters
#   - Single pass through the string (including sentinel): O(n)
#   - Each iteration does O(1) work (counter updates and min comparison)
#   - Total: O(n)

# Space Complexity: O(1)
#   - Counter stores at most 2 entries ('a' and 'b'): O(1)
#   - Only using a constant number of variables (a_right, b_left, a_left, b_right, ans)
#   - Total: O(1)
