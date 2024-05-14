# https://leetcode.com/problems/reverse-words-in-a-string-iii/description/

# Simple example of pythonic list comprehension + reverse string using s[::-1]

class Solution:
    def reverseWords(self, s: str) -> str:
        return " ".join([word[::-1] for word in s.split()])
