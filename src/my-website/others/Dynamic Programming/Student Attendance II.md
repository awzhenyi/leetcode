https://leetcode.com/problems/student-attendance-record-ii/

3D memo, standard dp iterate all states and terminate correctly.

```python
class Solution:
    def checkRecord(self, n: int) -> int:
        MOD = 10**9+7
        cache = [[[-1] * 3 for _ in range(2)] for _ in range(n + 1)]
        def dp(curr_length, consecutive_late_counter, absent_counter):
            if absent_counter >= 2 or consecutive_late_counter >= 3:
                return 0

            if curr_length == n:
                return 1
            
            if cache[curr_length][absent_counter][consecutive_late_counter] != -1:
                return cache[curr_length][absent_counter][consecutive_late_counter]

            ans = (dp(curr_length+1, 0, absent_counter+1) 
                   + dp(curr_length+1, 0, absent_counter) 
                   + dp(curr_length+1, consecutive_late_counter+1, absent_counter)) % MOD
            
            cache[curr_length][absent_counter][consecutive_late_counter] = ans
            return ans
        
        return dp(0,0,0)

# Time Complexity: O()
# Space Complexity: O()
```