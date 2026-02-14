---
tags:
 - Easy
---

https://leetcode.com/problems/longest-balanced-substring-i/

## Problem Understanding

This problem asks you to find the **longest substring** where all characters that appear in it have the **same frequency (count)**. 

For example:
- `"aabbcc"` → The entire string is valid because 'a', 'b', and 'c' all appear exactly 2 times. Answer: 6
- `"aaabbc"` → The longest balanced substring is `"aabb"` where both 'a' and 'b' appear 2 times. Answer: 4
- `"a"` → Single character always has equal frequency. Answer: 1

The key insight is that we need to check all possible substrings and verify if the character frequency counts are all equal.

## Solution Approach

The solution uses a **brute force approach with optimization** by checking all possible substrings:

1. **Outer loop (i)**: Try every starting position
2. **Inner loop (j)**: Extend from position i to the end, checking each substring
3. **Track frequencies**: Use a dictionary to count character occurrences as we extend
4. **Validation**: Check if all characters have the same frequency by creating a set of the frequency values
   - If `set(count.values())` has length 1, all frequencies are equal ✓
5. **Update result**: Keep track of the maximum valid substring length

## Why This Solution Works

**Key optimization**: Instead of creating a new frequency counter for each substring (which would be O(n³)), we **incrementally build** the frequency map as we extend the right boundary. This reduces complexity from O(n³) to O(n²).

## Layman Explanation

Think of this problem like organizing books on a shelf:
- You want to find the longest section where each author has the same number of books
- You check every possible section (substring) starting from each position
- For each section, you count how many books each author has
- If all authors in that section have the same count, you measure the section length
- You keep track of the longest valid section you find

For example, if you have: `AABBCC`
- Section "AA" → All authors (just 'A') have 2 books ✓ Length: 2
- Section "AABB" → Authors 'A' and 'B' both have 2 books ✓ Length: 4  
- Section "AABBCC" → Authors 'A', 'B', 'C' all have 2 books ✓ Length: 6 (maximum!)

## Complexity Explanation

**Time Complexity: O(n²)**
- The outer loop runs `n` times (trying each starting position)
- The inner loop runs up to `n` times for each start position
- Creating the set and checking takes O(k) time where k ≤ 26 (number of unique characters), which is effectively O(1)
- Total: O(n) × O(n) × O(1) = O(n²)

**Space Complexity: O(k) where k ≤ 26**
- The `count` dictionary stores at most 26 entries (lowercase English letters)
- The `unique` set also stores at most 26 values
- Both are bounded by the alphabet size, so O(1) in practice

**Note**: This solution trades time complexity for simplicity. For very large strings, more advanced approaches using sliding windows or other techniques might be needed, but for the typical constraints of this Easy problem, O(n²) is acceptable.

## Solution

```python
class Solution:
    def longestBalanced(self, s: str) -> int:
        n = len(s)
        res = 0
        for i in range(n):
            count = {}
            for j in range(i, n):
                count[s[j]] = count.get(s[j], 0) + 1
                unique = set(count.values())
                if len(unique) == 1:
                    res = max(res, j - i + 1)
        return res
# Time Complexity: O(n^2)
# Space Complexity: O(k), where k is the number of unique characters (at most 26)
```
