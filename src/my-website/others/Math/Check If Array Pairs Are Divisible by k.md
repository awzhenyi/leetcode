---
tags:
 - Medium
---

https://leetcode.com/problems/check-if-array-pairs-are-divisible-by-k

know how modulo arithmetic works. (a + b) % k = (a % k + b % k) % k
know python does not have to deal with negative modulo.
```python
class Solution:
    def canArrange(self, arr: List[int], k: int) -> bool:
        # (a + b) % k
        # = (a%k + b%k) % k
        # remainder after mod will be in range (0 ... k)
        # = (mod of a + mod of b) % k = 0
        # = (mod of a) = k - mod of b
        # if mod of a = 0, then have to pair up with a mod of b = 0
        # track remainder of mod in a hashmap
        remainder_count = defaultdict(int)
        # store of the remainder of each number
        for num in arr:
            remainder = num % k
            remainder_count[remainder] += 1
        for num in arr:
            remainder = num % k
            #if remainder == 0, this count must be even to pair up
            if remainder == 0:
                if remainder_count[remainder] % 2 == 1:
                    return False
            #whatever the count of remainder, k - remainder must be same count to pair up
            elif remainder_count[remainder] != remainder_count[k - remainder]:
                return False

        return True
# Time Complexity: O(N)
# Space Complexity: O(N)
```
