https://leetcode.com/problems/maximum-score-words-formed-by-letters/

```python
class Solution:
    def maxScoreWords(self, words: List[str], letters: List[str], score: List[int]) -> int:
        self.ans = 0
        def canFormWord(count, letters_count):
            for k, v in count.items():
                if k in letters_count and letters_count[k] >= v:
                    continue
                else:
                    return False
            return True

        def dp(i, letters_count, curr_total):
            if i >= len(words):
                self.ans = max(self.ans, curr_total)
                return
            word = words[i]
            count = Counter(word)
            if canFormWord(count, letters_count):
                score_of_word = 0
                letters_count_copy = letters_count.copy()
                for k, v in count.items():
                    letters_count_copy[k] -= v
                    score_of_word += (score[ord(k)-ord('a')] * v)
                #pick
                dp(i+1, letters_count_copy, curr_total+score_of_word)
            
                
            #dont pick (can form but dont pick / cannot form)
            dp(i+1, letters_count, curr_total)
        
        dp(0, Counter(letters), 0)
        return self.ans

#Time Complexity:
#Space Complexity:
```