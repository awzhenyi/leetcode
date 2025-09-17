https://leetcode.com/problems/new-21-game

1. When the game ends, the total points is from K to K - 1 + max_points (You will only roll again if you have less than K points)
2. What is the probability of this total points being less than N. If N <= K, probability = 0. If N > K - 1 + max_points, probability = 1
3. General pattern: to get points K, probability is p(K) = p(K-1) / max_points + p(K-2) / max_points + p(K-max_points) / max_points 
Let w be max_points, wsum = P(k-1) + P(k-2) + ... + P(k-max_points), P(K) = wsum / w
4. Use dp to store dp[i] = P(i) for i in [0, N]

```python
    if k == 0 or n >= k + maxPts: 
        return 1
    dp = [1.0] + [0.0] * n
    maxPtsSum = 1.0
    for i in range(1, n+1):
        dp[i] = maxPtsSum / maxPts
        if i < k:
            maxPtsSum += dp[i]
        if i - maxPts >= 0:
            maxPtsSum -= dp[i - maxPts]
    return sum(dp[k:])
# Time Complexity: O()
# Space Complexity: O()
```