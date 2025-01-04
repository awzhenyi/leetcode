---
tags:
 - Easy
---

https://leetcode.com/problems/valid-parentheses

```python
class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        for c in s:
            if not stack or c in '({[':
                stack.append(c)
                continue
            if c == ')' and stack[-1] != '(':
                return False
            if c == ']' and stack[-1] != '[':
                return False
            if c == '}' and stack[-1] != '{':
                return False
            stack.pop()
        return len(stack) == 0
# Time Complexity: O(N)
# Space Complexity: O(N)
```