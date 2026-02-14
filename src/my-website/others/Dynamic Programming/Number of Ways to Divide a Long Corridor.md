
https://leetcode.com/problems/number-of-ways-to-divide-a-long-corridor

1. Top Down DP
- state of cache is made up of 2 variables, index and seats.
- initialise a 2D cache of N rows (index) and 3 columns (0, 1, 2 seats)

```python
class Solution:
    def numberOfWays(self, corridor: str) -> int:
        # Store 1000000007 in a variable for convenience
        MOD = 1_000_000_007

        # Cache the result of each sub-problem
        cache = [[-1] * 3 for _ in range(len(corridor))]

        # Count the number of ways to divide from "index" to the last index
        # with "seats" number of "S" in the current section
        def count(index, seats):
            # If we have reached the end of the corridor, then
            # the current section is valid only if "seats" is 2
            if index == len(corridor):
                return 1 if seats == 2 else 0

            # If we have already computed the result of this sub-problem,
            # then return the cached result
            if cache[index][seats] != -1:
                return cache[index][seats]
            
            # If the current section has exactly 2 "S"
            if seats == 2:
                # If the current element is "S", then we have to close the
                # section and start a new section from this index. Next index
                # will have one "S" in the current section
                if corridor[index] == "S":
                    result = count(index + 1, 1)
                else:
                    # If the current element is "P", then we have two options
                    # 1. Close the section and start a new section from this index
                    # 2. Keep growing the section
                    result = (count(index + 1, 0) + count(index + 1, 2)) % MOD
            else:
                # Keep growing the section. Increment "seats" if present
                # element is "S"
                if corridor[index] == "S":
                    result = count(index + 1, seats + 1)
                else:
                    result = count(index + 1, seats)
            
            # Memoize the result, and return it
            cache[index][seats] = result
            return cache[index][seats]
        
        # Call the count function
        return count(0, 0)
# Time Complexity: O(N*S) S == 3 can be 3N -> N
# Space Complexity: O(N*S) S == 3, can be 3N -> N
```

2. Bottom Up DP (2D)
- We start from reverse, since question is asking for number of valid partitions at the end of the corridor. This could be framed as a given a valid partition at certain position, how many ways can be used to arrive at this position. 
- We only know when we are cutting a segment at position i. ie at position i we know when we have 3 seats -> so we have to reset the segment.
```python
class Solution:
    def numberOfWays(self, corridor: str) -> int:
        n = len(corridor)
        dp = [[0] * 3 for _ in range(n + 1)]
        dp[n][2] = 1
        MOD = 10**9 + 7
        seats = 0
        for i in range(n-1, -1, -1):
            for seats in range(3):
                if seats == 2:
                    if corridor[i] == 'S':
                        # must cut, then take S → seats = 1
                        dp[i][2] = dp[i + 1][1]
                    else:  # 'P'
                        # cut OR don't cut
                        dp[i][2] = (dp[i + 1][0] + dp[i + 1][2]) % MOD
                else:
                    if corridor[i] == 'S':
                        # take the seat
                        dp[i][seats] = dp[i + 1][seats + 1]
                    else:  # 'P'
                        # just continue
                        dp[i][seats] = dp[i + 1][seats]

        return dp[0][0]
                    

    def numberOfWays1(self, corridor: str) -> int:
        MOD = 10**9 + 7
        n = len(corridor)
        cache = [[-1] * 3 for _ in range(n)]

        def count(index, seats):
            if index == n:
                return 1 if seats == 2 else 0
            
            if cache[index][seats] != -1:
                return cache[index][seats] 

            if seats == 2:
                if corridor[index] == 'S':
                    result = count(index + 1, 1)
                else:
                    result = (count(index + 1, 2) + count(index + 1,  0)) % MOD
            
            elif seats < 2:
                if corridor[index] == 'S':
                    result = count(index + 1, seats + 1)
                else:
                    result = count(index + 1, seats)

            cache[index][seats] = result % MOD
            return result
        
        return count(0, 0)
# Time Complexity: O(NS)
# Space Complexity: O(NS)
```

3. Bottom Up DP Optimized (1D)
- Noticed in the 2D cache, we only rely on `i+1`th row, so we only need to store 1 row of values at a time.
```python
class Solution:
    def numberOfWays(self, corridor: str) -> int:
        MOD = 1_000_000_007
        n = len(corridor)

        # dp[seats] = ways for the suffix processed so far
        # seats ∈ {0,1,2}
        dp = [0, 0, 1]

        # Process from right to left
        for i in range(n - 1, -1, -1):
            new = [0, 0, 0]

            for seats in range(3):
                if seats == 2:
                    if corridor[i] == 'S':
                        # must cut, then take S → seats = 1
                        new[2] = dp[1]
                    else:  # 'P'
                        # cut OR don't cut
                        new[2] = (dp[0] + dp[2]) % MOD
                else:
                    if corridor[i] == 'S':
                        # take the seat
                        new[seats] = dp[seats + 1]
                    else:  # 'P'
                        # just continue
                        new[seats] = dp[seats]

            dp = new

        return dp[0]
# Time Complexity: O(NS)
# Space Complexity: O(S)
```

4. Combinatorics
- Given a segment A and a segment B, if there are 3 ways to reach segment A from start and 4 ways to reach segment B from segment A. Then there a total of 4*3 possible ways to reach segment B from start.
- What constitutes a segment here? - 2 Seats and any number of plants until the next seat. The number of plants would be the "ways" to arrive at this segment. We just need to find the number of plants in each segment after a valid partition and multiply them together to get the number of ways.
```python
    class Solution:
        def numberOfWays(self, corridor: str) -> int:
            count = Counter(corridor)
            if count["S"] < 2 or count["S"] % 2 == 1:
                return 0
            segments = []
            seats = 0
            plants = 0
            for obj in corridor:
                seats += (obj == "S")
                if seats == 2:
                    plants += (obj == "P")
                if seats == 3:
                    seats = 1
                    if plants > 0:
                        segments.append(plants)
                        plants = 0
            res = 1
            MOD = 10**9 + 7
            for segment in segments:
                res *= (segment + 1) % MOD

            return res % MOD
# Time Complexity: O(N)
# Space Complexity: O(N)
```