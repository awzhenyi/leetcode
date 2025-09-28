https://leetcode.com/problems/valid-palindrome

- 2 pointers
- increment/decrement when character is not alphanumeric
- then compare lowercase character

```python
class Solution:
    def isPalindrome(self, s: str) -> bool:
        l, r = 0, len(s) - 1
        while l < r:
            while l < r and not s[l].isalnum():
                l += 1
            while l < r and not s[r].isalnum():
                r -= 1
            if s[l].lower() != s[r].lower():
                return False
            l += 1
            r -= 1
        return True
# Time Complexity: O(N)
# Space Complexity: O(1)
```

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