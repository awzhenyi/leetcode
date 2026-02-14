---
tags:
 - Medium
---

https://leetcode.com/problems/longest-balanced-substring-ii/?envType=daily-question&envId=2026-02-13

## Problem Understanding

You’re given a string `s` consisting only of the letters `a`, `b`, and `c`.
A substring is **balanced** if (within that substring) the counts of the letters that appear are **all equal**.

That means balanced substrings fall into exactly three shapes:

- **1 distinct letter**: like `"aaaa"` (counts are trivially equal)
- **2 distinct letters**: like `"abba"` where `count(a) == count(b)` and no other letters appear
- **3 distinct letters**: where `count(a) == count(b) == count(c)`

The task is to return the **maximum length** of any balanced substring.

## How the Solution Works

This solution computes the answer as the maximum of three independent cases.

### Case 1: Substrings with only one letter

We just need the longest run of identical characters.
The loop over `s + 'd'` uses a sentinel character (`'d'`) to force the final run to be “closed” and counted.

### Case 2: Balanced substrings with exactly two letters

For each pair among `{a,b}`, `{a,c}`, `{b,c}`, we scan the string and consider only segments made of those two letters.

Inside a valid segment:

- Let `count_a` and `count_b` be counts since the last invalid character.
- Define `diff = count_a - count_b`.

If we see the **same `diff`** at indices `j` and `i` (`j < i`), then between `(j+1 .. i)` the difference cancels:

- $(count_a(i)-count_b(i)) - (count_a(j)-count_b(j)) = 0$
- so counts of `a` and `b` are equal in that substring.

The dictionary `dic` stores the earliest index where each `diff` occurred, so we can maximize the length `i - dic[diff]`.
When we hit a character not in `{a,b}`, we reset counts and restart the dictionary for the next segment.

### Case 3: Balanced substrings with all three letters

We want `count(a) == count(b) == count(c)`.
Equivalently:

- `count(a) - count(b) == 0`
- `count(a) - count(c) == 0`

So we track the pair:

- `key = (count_a - count_b, count_a - count_c)`

If the same `key` occurs at indices `j` and `i`, then the substring `(j+1 .. i)` has zero change in both differences, meaning all three counts increased equally ⇒ balanced.

Again, a map stores the earliest index for each `key` to maximize length.

## Complexity

- **Time**: $O(n)$ for Case 1, $O(3n)$ for Case 2 (three pairs), and $O(n)$ for Case 3 ⇒ overall **$O(n)$**.
- **Space**: Up to **$O(n)$** for the hash maps in Case 2/Case 3 (in the worst case of many distinct diff states).

## Solution

```python
class Solution:
    def longestBalanced(self, s: str) -> int:
        #Case 1 (1 letter)
        case1 = 0
        l = 0
        curr = s[l]
        for r, c in enumerate(s + 'd'):
            if c != curr:
                curr = c
                case1 = max(case1, r - l)
                l = r

        #Case 2 (2 letters: ab, ac, bc)
        def longestBalancedPair(a, b):
            res = 0
            dic = {0 : -1}
            count_a = count_b = 0
            for i, c in enumerate(s):
                if c != a and c != b:
                    count_a = count_b = 0
                    dic = {0 : i}
                    continue
                count_a += c == a
                count_b += c == b
                diff = count_a - count_b
                if diff in dic:
                    res = max(res, i - dic[diff])
                else:
                    dic[diff] = i
            return res
        case2 = max(longestBalancedPair('a', 'b'), longestBalancedPair('a', 'c'), longestBalancedPair('b', 'c'))

        #Case 3 (3 letters)
        case3 = 0
        count_a = count_b = count_c = 0
        dic = {(0, 0) : -1}
        for i, c in enumerate(s):
            count_a += c == 'a'
            count_b += c == 'b'
            count_c += c == 'c' 
            key = (count_a - count_b, count_a - count_c)
            if key in dic:
                case3 = max(case3, i - dic[key])
            else:
                dic[key] = i

        return max(case1, case2, case3)
```

