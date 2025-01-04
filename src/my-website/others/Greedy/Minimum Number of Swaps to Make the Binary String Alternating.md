---
tags:
 - Medium
---

https://leetcode.com/problems/minimum-number-of-swaps-to-make-the-binary-string-alternating/

Greedy: count misplaced letters

```python
class Solution:
    def minSwaps(self, s: str) -> int:
        count = Counter(s)
        count_0 = count['0']
        count_1 = count['1']
        if abs(count_0 - count_1) > 1: 
            return -1
    
        def min_swap_with_initial_char(initial_char):
            min_swaps = 0
            for i in range(0, len(s), 2):
                min_swaps += (s[i] != initial_char)
            return min_swaps 
        
        if count_0 > count_1:
            min_swaps = min_swap_with_initial_char('0')
        elif count_1 > count_0:
            min_swaps = min_swap_with_initial_char('1')
        elif count_0 == count_1:
            min_swaps = min(min_swap_with_initial_char('0'), min_swap_with_initial_char('1'))
        return min_swaps
# Time Complexity: O(N)
# Space Complexity: O(N)
```

```java
class Solution {
    public int minSwaps(String s) {
        Map<Character, Integer> count = new HashMap<>();
        for (char c : s.toCharArray()) {
           count.put(c, count.getOrDefault(c, 0) + 1);
        }
        int count0 = count.getOrDefault('0', 0);
        int count1 = count.getOrDefault('1', 0);
        if (Math.abs(count0 - count1) > 1) {
            return -1;
        }
        if (count0 > count1) {
            return minSwapsGivenInitialChar('0', s);
        } else if (count1 > count0) {
            return minSwapsGivenInitialChar('1', s);
        } else {
            return Math.min(minSwapsGivenInitialChar('0', s), minSwapsGivenInitialChar('1', s));
        }

    }

    private int minSwapsGivenInitialChar(char c, String s) {
        int minSwaps = 0;
        for (int i = 0; i < s.length(); i += 2) {
            if (c != s.charAt(i)) {
                minSwaps++; 
            }
        }
        return minSwaps;
    }
}
```