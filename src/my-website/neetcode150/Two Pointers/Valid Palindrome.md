https://leetcode.com/problems/valid-palindrome

```python
class Solution:
    def isPalindrome(self, s: str) -> bool:
        processed_string = []
        for c in s:
            if c.isalnum():
                processed_string.append(c.lower())
        processed_string = ''.join(processed_string)
        n = len(processed_string)
        for i in range(n//2):
            if processed_string[i] != processed_string[n-i-1]:
                return False
        return True

# Time Complexity: O(N) use list to build string, else string addition is kind of n^2
# Space Complexity: O(N)
```