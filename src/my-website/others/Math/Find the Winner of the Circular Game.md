---
tags:
 - Medium
---

https://leetcode.com/problems/find-the-winner-of-the-circular-game

Solve with:
1. simulate with queue

```python
def findTheWinner(self, n: int, k: int) -> int:
    friends = list(range(n))
    queue = collections.deque(friends)
    while len(queue) > 1:
        for _ in range(k-1):
            friend = queue.popleft()
            queue.append(friend)
        queue.popleft()
    return queue[0] + 1
# Time Complexity: O(N*K)
# Space Complexity: O(N)
```

2. math
```python
#recursion:
    def findTheWinner(self, n: int, k: int) -> int:
        return self.winnerHelper(n, k) + 1

    def winnerHelper(self, n: int, k: int) -> int:
        if n == 1:
            return 0
        return (self.winnerHelper(n - 1, k) + k) % n
#iterative
    def findTheWinner(self, n: int, k: int) -> int:
        winner = 0
        for i in range(2, n+1):
            winner = (winner + k)%i
        return winner + 1

# Time Complexity: O(N)
# Space Complexity: O(1)
```

