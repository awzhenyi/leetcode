---
tags:
 - Hard
---

https://leetcode.com/problems/merge-k-sorted-lists/

heap solution

```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def mergeKLists(self, lists: List[Optional[ListNode]]) -> Optional[ListNode]:
        dummy = head = ListNode(-1)
        heap = [(head.val, i, head) for i, head in enumerate(lists) if head]
        heapq.heapify(heap)
        while heap:
            node_val, i, node = heapq.heappop(heap)
            new_node = ListNode(node_val)
            head.next = new_node
            head = head.next
            if node.next:
                node = node.next
                heapq.heappush(heap, (node.val, i, node))
        return dummy.next
# Time Complexity: O(N log k), N pops of k size heap
# Space Complexity: O(N + k), N is the total number of nodes, k is number of head nodes, size of heap
```

O(1) space with divide and conquer

```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def mergeKLists(self, lists: List[Optional[ListNode]]) -> Optional[ListNode]:
        n = len(lists)
        if n == 0:
            return None
        interval = 1
        while interval < n:
            for i in range(0, n-interval, interval*2):
                lists[i] = self.mergeTwoLists(lists[i], lists[i + interval])
            interval *= 2
        return lists[0]
    def mergeTwoLists(self, l1, l2):
        dummy = head = ListNode(0)
        while l1 and l2:
            if l1.val <= l2.val:
                head.next = l1
                l1 = l1.next
            else:
                head.next = l2
                l2 = l2.next
                
            head = head.next
        if l1:
            head.next = l1
        else:
            head.next = l2
        return dummy.next
# Time Complexity: O(N log k) merge 2 list O(N), log k times due to divide and conquer
# Space Complexity: O(1)
```