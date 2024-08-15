---
tags:
 - Medium
---

https://leetcode.com/problems/letter-combinations-of-a-phone-number/

```python
class Solution:
    def letterCombinations(self, digits: str) -> List[str]:
        if digits == "": return []
        output = []

        phone = {
           "2" : "abc",
           "3" : "def",
           "4" : "ghi",
           "5" : "jkl",
           "6" : "mno",
           "7" : "pqrs",
           "8" : "tuv",
           "9" : "wxyz"
        }

        def dfs(idx, curr_string):
            if idx == len(digits):
                output.append(''.join(curr_string[:]))
                return
            
            for letter in phone[digits[idx]]:
                curr_string.append(letter)
                dfs(idx+1, curr_string)
                curr_string.pop()

        dfs(0, [])
        return output           
        

# Time Complexity: O(N * (4^N)), N is the length of digits
# Space Complexity: O(N)
```