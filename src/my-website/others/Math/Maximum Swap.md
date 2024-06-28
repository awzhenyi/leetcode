https://leetcode.com/problems/maximum-swap/

Greedy, go from the back

```python
class Solution:
    def maximumSwap(self, num: int) -> int:
        num = [int(x) for x in str(num)]
        max_id = len(num) - 1
        swap_one_idx, swap_two_idx = 0, 0
        for i in range(len(num)-1, -1, -1):
            if num[i] > num[max_id]:
                max_id = i
            elif num[i] < num[max_id]:
                swap_one_idx = i
                swap_two_idx = max_id
        num[swap_one_idx], num[swap_two_idx] = num[swap_two_idx], num[swap_one_idx]
        return int("".join([str(x) for x in num]))

# Time Complexity: O(N)
# Space Complexity: O(N)
```
