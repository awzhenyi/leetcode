# https://leetcode.com/problems/partition-list/

# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def partition(self, head: Optional[ListNode], x: int) -> Optional[ListNode]:
        dummy = first_half = ListNode(0)
        dummy_two = second_half = ListNode(0)

        while head:
            tmp = ListNode(head.val)
            if head.val < x:
                first_half.next = tmp
                first_half = first_half.next
            else:
                second_half.next = tmp
                second_half = second_half.next

            head = head.next

        first_half.next = dummy_two.next
        return dummy.next

# Time Complexity: O(n)
# Space Complexity: O(n)


class Solution:
    def partition(self, head: Optional[ListNode], x: int) -> Optional[ListNode]:
        dummyOne = first_partition = ListNode(0)
        dummyTwo = second_partition = ListNode(0)
        while head:
            if head.val < x:
                first_partition.next = head
                first_partition = first_partition.next
            else:
                second_partition.next = head
                second_partition = second_partition.next
            head = head.next
        # Remember to terminate the second partition else it might cause cyclic error if the last node of head is not in the second_partition
        second_partition.next = None
        first_partition.next = dummyTwo.next
        return dummyOne.next

# Time Complexity: O(n)
# Space Complexity: O(1)
