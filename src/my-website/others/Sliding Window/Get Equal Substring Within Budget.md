https://leetcode.com/problems/get-equal-substrings-within-budget

```python

class Solution:
    def equalSubstring(self, s: str, t: str, maxCost: int) -> int:
        n = len(s)
        l = 0
        max_len = 0
        curr_cost = 0
        for r in range(n):
            curr_cost += abs((ord(t[r]) - ord(s[r]))) # Add first
            while curr_cost > maxCost:
                curr_cost -= abs((ord(t[l]) - ord(s[l]))) # Move left pointer
                l += 1
            max_len = max(max_len, r - l + 1) # Calculate at the end
        return max_len

# Time Complexity: O(N)
# Space Complexity: O(1)
```