---
tags:
 - Medium
---

https://leetcode.com/problems/evaluate-reverse-polish-notation

Use stack. when see a operator, pop top 2 and do calculation. truncate division towards 0 = math.truncate(a / b) or int(a / b)

```python
class Solution:
    def evalRPN(self, tokens: List[str]) -> int:

        def calculate(first, operator, second):
            match operator:
                case '+':
                    return first + second
                case '-':
                    return first - second
                case '/':
                    return math.trunc(first / second)
                case '*':
                    return first * second

        stack = []
        for token in tokens:
            if token in '+-*/':
                second_operand = stack.pop()
                operator = token
                first_operand = stack.pop()
                stack.append(calculate(first_operand, operator, second_operand))
            else:
                stack.append(int(token))
        return stack[-1]

# Time Complexity: O(N)
# Space Complexity: O(N)
```