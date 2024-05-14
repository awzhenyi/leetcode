#https://leetcode.com/problems/remove-nodes-from-linked-list

class Solution:
    def removeNodes(self, head: Optional[ListNode]) -> Optional[ListNode]:
        dummy = ListNode(float('inf'))
        stack = [dummy]
        while head:
            while stack and head.val > stack[-1].val:
                stack.pop()
            stack[-1].next = head
            stack.append(head)
            head = head.next
            print(stack)
        return dummy.next

# Time Complexity: O(N)
# Space Complexity: O(N)

# Sol 2: Recursion
