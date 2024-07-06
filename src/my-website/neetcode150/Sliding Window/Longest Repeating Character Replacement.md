https://leetcode.com/problems/longest-repeating-character-replacement/

maintain a count of frequency of characters and a max_frequency variable. condition for moving left pointer is when (r- l + 1) - max_frequency > k
```python
class Solution:
    def characterReplacement(self, s: str, k: int) -> int:
        max_len = 0
        l = 0
        max_freq = 0
        count = {}
        for r in range(len(s)):
            count[s[r]] = count.get(s[r], 0) + 1
            max_freq = max(max_freq, count[s[r]])
            while r - l + 1 - max_freq > k:
                count[s[l]] -= 1
                l += 1
            max_len = max(max_len, r - l + 1)
        return max_len
# Time Complexity: O(N)
# Space Complexity: O(N)
```
