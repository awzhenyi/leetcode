---
tags:
 - Medium
---

https://leetcode.com/problems/minimum-penalty-for-a-shop

## Problem Understanding
Find the best time to close a shop to minimize penalty. The penalty rules:
- **'Y' (customer came) when shop is closed**: penalty +1
- **'N' (no customer) when shop is open**: penalty +1

**Goal**: Find the closing time that minimizes total penalty.

## Key Insight: Incremental Penalty Update
Instead of recalculating penalty for each closing time, we can update it incrementally as we move through the string.

**Initial State (close at time 0)**:
- Shop is closed for the entire day
- Penalty = count of all 'Y' (all customers who came get penalized)

**As we move to time `i+1` (keep shop open until then)**:
- We're no longer penalized for 'Y' at position `i` (shop was open)
- We get penalized for 'N' at position `i` (shop was open but no customer came)
- Net change: `penalty = penalty - (if Y) + (if N)`

**Why this works**:
- At each position, we're effectively asking: "What if we close at time `i+1`?"
- The penalty changes incrementally based on the current character
- We track the minimum penalty and corresponding closing time

## Algorithm
1. Start with penalty = count of 'Y' (closing at time 0)
2. For each position `i`:
   - Update penalty: subtract 1 if 'Y' (no longer penalized), add 1 if 'N' (new penalty)
   - If current penalty is better, update minimum and best closing time
3. Return the best closing time

**Note**: Closing at time `i+1` means the shop is open during hour `i` and closed starting from hour `i+1`.

```python
class Solution:
    def bestClosingTime(self, customers: str) -> int:
        # Initial penalty: close at time 0, penalty = number of Y
        min_penalty = penalty = customers.count('Y')
        best_time = 0

        for i, c in enumerate(customers):
            penalty -= c == 'Y'   # no longer penalized (shop open)
            penalty += c == 'N'   # 'N' while open causes penalty

            if penalty < min_penalty:
                min_penalty = penalty
                best_time = i + 1

        return best_time

# Time Complexity: O(N)
#   - N = length of customers string
#   - Initial count of 'Y': O(N) to count all characters
#   - Single pass through string: O(N)
#   - Each iteration does O(1) work
#   - Total: O(N)
# Space Complexity: O(1)
#   - Only using constant extra variables (penalty, min_penalty, best_time)
#   - No additional data structures needed
#   - Space usage independent of input size
```