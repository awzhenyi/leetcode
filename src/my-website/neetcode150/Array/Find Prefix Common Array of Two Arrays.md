---
tags:
 - Medium
---

https://leetcode.com/problems/find-the-prefix-common-array-of-two-array

keep rolling count of common words and two sets based on some conditions:
1. if A[i] == B[i]
2. if A[i] in setB
3. if B[i] in setA

```python
class Solution:
    def findThePrefixCommonArray(self, A: List[int], B: List[int]) -> List[int]:
        curr_common = 0
        setA, setB = set(), set()
        n = len(A)
        res = [0] * n
        for i in range(n):
            curr_common += (A[i] in setB)
            curr_common += (B[i] in setA)
            curr_common += (A[i] == B[i])
            setA.add(A[i])
            setB.add(B[i])
            res[i] += curr_common
        
        return res

# Time Complexity: O(N)
# Space Complexity: O(N)
```

Bit solution
```python
class Solution:
    def findThePrefixCommonArray(self, A: List[int], B: List[int]) -> List[int]:
        # Keep track of bitsets of A and B 
        cntA = cntB = 0
        out = []

        # Go through each number of both arrays
        for i, j in zip(A, B):
            # Set ith bit of A and jth bit of B
            cntA |= 1 << i
            cntB |= 1 << j

            # Get common bits with bitwise and
            cur = cntA & cntB

            # Count number of 1s and append
            out.append(cur.bit_count())

        return out
# Time Complexity: O(N)
# Space Complexity: O(1)
```