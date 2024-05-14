# https://leetcode.com/problems/longest-string-chain/

class Solution:
    def longestStrChain(self, words: List[str]) -> int:
        words = set(words)  # O(N)
        max_chain = 0
        cache = {}

        def findChain(curr_word):

            if curr_word in cache:
                return cache[curr_word]

            ans = 1
            for i in range(len(curr_word)):  # O(L)
                temp_word = curr_word[:i] + curr_word[i+1:]
                if temp_word in words:
                    temp = 1 + findChain(temp_word)  # O(L)
                    ans = max(ans, temp)

            cache[curr_word] = ans
            return ans

        for word in words:
            max_chain = max(max_chain, findChain(word))  # O(N)

        return max_chain

# Time Complexity: O(N + L^2 * N) = O(L^2 * N)
# Space Complexity: O(N)


#Bottom up
class Solution:
    def longestStrChain(self, words: List[str]) -> int:
        words = sorted(words, key = lambda x: len(x)) #O(N log N)
        n = len(words)
        dp = {}
        for word in words: #O(N)
            dp[word] = 1
            for i in range(len(word)): #O(L)
                temp_word = word[:i] + word[i+1:] #O(L)
                if temp_word in dp:
                    dp[word] = dp[temp_word] + 1
                    
        return max(dp.values())

#Time Complexity: O(N log N + N*L^2)
#Space Complexity: O(N)

