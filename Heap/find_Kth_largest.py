# https://leetcode.com/problems/kth-largest-element-in-an-array/

class Solution:
    def findKthLargest(self, nums: List[int], k: int) -> int:
        heap = nums[:k]
        # heapq.heapify is always in place, on an existing list
        heapq.heapify(heap)

        for num in nums[k:]:
            if num > heap[0]:  # heap[0] checks top of heap
                # heapreplace pops from the heap, and then push item. faster than pushpop
                heapq.heapreplace(heap, num)
            # Alternatively, use heappushpop(heap, num)
        return heap[0]  # same as heapq.heappop(heap)

# Time Complexity: O(n log k)
# Space Complexity: O(k)


class Solution:
    def findKthLargest(self, nums: List[int], k: int) -> int:
        pivot = random.choice(nums)
        less = []
        equal = []
        greater = []
        for num in nums:
            if num < pivot:
                less.append(num)
            elif num == pivot:
                equal.append(num)
            else:
                greater.append(num)

        if k <= len(greater):
            return self.findKthLargest(greater, k)

        if k > len(greater) + len(equal):
            return self.findKthLargest(less, k - len(greater) - len(equal))

        return pivot

# Time Complexity: O(n)
# Space Complexity: O(n)
