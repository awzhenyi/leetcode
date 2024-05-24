https://leetcode.com/problems/top-k-frequent-elements/


Sort

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

Quick select (O (N)) average
```python
```