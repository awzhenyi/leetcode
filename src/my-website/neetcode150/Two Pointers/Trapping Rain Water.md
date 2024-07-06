https://leetcode.com/problems/trapping-rain-water/

Two pointers
```python
class Solution:
    def trap(self, height: List[int]) -> int:
        #using two pointers i and j on indices 1 and n-1
        l = 1
        r = len(height) - 2
        
        #initialising leftmax to the leftmost bar and rightmax to the rightmost bar
        lmax = height[0]
        rmax = height[-1] 
        ans = 0

        while l <= r:
            # check lmax and rmax for current l, r positions
            if height[l] > lmax:
                lmax = height[l]
            if height[r] > rmax:
                rmax = height[r]
            
            #fill water upto lmax level for index l and move l to the right
            if lmax <= rmax:
                ans += lmax - height[l]
                l += 1
				
            #fill water upto rmax level for index j and move j to the left
            else:
                ans += rmax - height[r]
                r -= 1
                
        return ans


# Time Complexity: O(N)
# Space Complexity: O(1)
```

Make 2 arrays with max left_boundaries and right_boundaries
```python
class Solution:
    def trap(self, height: List[int]) -> int:
        n = len(height)
        left_bound = [0] * n
        right_bound = [0] * n
        curr_max = height[0]
        for i in range(1, n):
            left_bound[i] = curr_max
            curr_max = max(curr_max, height[i])
        curr_max = height[-1]
        for i in range(n-2, -1, -1):
            right_bound[i] = curr_max
            curr_max = max(curr_max, height[i])
        ans = 0
        for i in range(n):
            water = min(left_bound[i], right_bound[i]) - height[i]
            if water > 0:
                ans += water
        return ans

# Time Complexity: O(N)
# Space Complexity: O(N)
```