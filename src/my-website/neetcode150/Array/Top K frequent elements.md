---
tags:
 - Medium
---

https://leetcode.com/problems/top-k-frequent-elements/

Sort
```python
class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        count = Counter(nums)
        sorted_count = sorted([(v, k) for k,v in count.items()], reverse=True)
        return [num for freq, num in sorted_count[:k]]

# Time Complexity: O(N Log N)
# Space Complexity: O(N)
```

Heap (K Log N)
```python
class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        ans = []
        count = Counter(nums)
        
        heap = [(-v,k) for k,v in count.items()]
        heapq.heapify(heap)
        
        for _ in range(k):
            ans.append(heapq.heappop(heap)[1])
            
        return ans

#Time Complexity: O(N + K Log N)
#Space Complexity: O(N)
```

Heap (N Log K) maintain k size for heap, better time complexity when `K << N`
```python
class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        ans = []
        count = Counter(nums)
        heap = []
        for num, freq in count.items():
            heapq.heappush(heap, (freq,num))
            while len(heap) > k:
                heapq.heappop(heap)
        return [v for k,v in heap]

#Time Complexity: O(K Log N)
#Space Complexity: O(K)
```

Quick select in O(N) average, worst case O(N^2)
Reference: kth order statistic in O(N): https://cp-algorithms.com/sequences/k-th.html

```python
class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        count = Counter(nums)
        arr = [(k, v) for k, v in count.items()]
        n = len(arr)

        def partition(left, right, pivot_idx):
            pivot_freq = arr[pivot_idx][1]
            # move the pivot to the end to not interfere with the scanning and swapping. swap the pivot to the correct position only at the end
            arr[pivot_idx], arr[right] = arr[right], arr[pivot_idx]
            store_idx = left
            for i in range(left, right):
                if arr[i][1] < pivot_freq:
                    arr[store_idx], arr[i] = arr[i], arr[store_idx]
                    # this idx is the correct position of the pivot at the end. increment it at every swap
                    store_idx += 1
            # swap back the pivot to the correct position
            arr[right], arr[store_idx] = arr[store_idx], arr[right]

            # return the pivot position
            return store_idx

        def quickselect(left, right, k_smallest):
            if left == right:
                return
            pivot_idx = random.randint(left, right)
            pivot_idx = partition(left, right, pivot_idx)

            if k_smallest == pivot_idx:
                return
            elif k_smallest < pivot_idx:
                quickselect(left, pivot_idx - 1, k_smallest)
            else:
                quickselect(pivot_idx + 1, right, k_smallest)
        
        quickselect(0, n - 1, n - k)
        return [x[0] for x in arr[n-k:]]
                     
# Time Complexity: O(N)
# Space Complexity: O(1)
```

- Easier to implement version, but not in place (using extra space to sort)
- Essentially have quickselect return the Top K portion of array based on pivot
```python
class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        
        def quickselect(arr, k):
            pivot_idx = random.randint(0, len(arr) - 1)
            left = [x for x in arr if x[1] < arr[pivot_idx][1]]
            right = [x for x in arr if x[1] >= arr[pivot_idx][1]]
            if len(right) > k:
                return quickselect(right, k)
            elif len(right) == k:
                return [x[0] for x in right]
            else:
                return [x[0] for x in right] + quickselect(left, k - len(right))
        
        count = Counter(nums)
        arr = [(k, v) for k, v in count.items()]
        return quickselect(arr, k)

# Time Complexity: O(N) N + N/2 + N/4 + N/8 ~ O(N)
# Space Complexity: O(N)

```