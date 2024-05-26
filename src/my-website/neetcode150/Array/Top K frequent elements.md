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

#Time Complexity: O(K Log N)
#Space Complexity: O(N)
```

Heap (N Log K) maintain k size for heap
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

```