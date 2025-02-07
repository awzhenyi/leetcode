---
tags:
 - Medium
---

https://leetcode.com/problems/hand-of-straights

```python
class Solution:
    def isNStraightHand(self, hand: List[int], groupSize: int) -> bool:
        if len(hand) % groupSize != 0:
            return False
        count = Counter(hand)
        
        for num in sorted(count):
            if count[num] <= 0: 
                continue
            freq = count[num]
            for consecutive_num in range(num, num+groupSize):
                if consecutive_num not in count:
                    return False
                if count[consecutive_num] < freq:
                    return False
                count[consecutive_num] -= freq
        return True

# Time Complexity: O(N log N + N.K), sort + each num loop to + K (groupSize)
# Space Complexity: O(N)
```