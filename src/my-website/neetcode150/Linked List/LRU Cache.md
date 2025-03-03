---
tags:
 - Medium
---

https://leetcode.com/problems/lru-cache/

implemenet lru cache as a doubly linked list + map
Node class (key, val, left, right)
maintain a map (cache) of key -> node
2 utility functions -> remove node from the doubly linked list, update most recently used node

```python
class Node:
    def __init__(self, key, val):
        self.key = key
        self.val = val
        self.left = None
        self.right = None

class LRUCache:

    def __init__(self, capacity: int):
        self.cache = {}
        self.capacity = capacity
        self.head = Node(-1, -1)
        self.tail = Node(-1, -1)
        self.head.right = self.tail
        self.tail.left = self.head

    def get(self, key: int) -> int:
        if key in self.cache:
            #update recently used
            node = self.cache[key]
            self.remove_node(node)
            self.update_recently_used(node)
            return node.val
        return -1

    def put(self, key: int, value: int) -> None:
        if key in self.cache:
            node = self.cache[key]
            node.val = value
            self.remove_node(node)
            self.update_recently_used(node)

        else:
            node = Node(key, value)
            self.update_recently_used(node)
            self.cache[key] = node

        if len(self.cache) > self.capacity:
            k = self.tail.left.key
            self.remove_node(self.tail.left)
            del self.cache[k]
    
    def remove_node(self, node):
        node.left.right = node.right
        node.right.left = node.left

    def update_recently_used(self, node):
        temp = self.head.right
        self.head.right = node
        temp.left = node
        node.right = temp
        node.left = self.head

# Your LRUCache object will be instantiated and called as such:
# obj = LRUCache(capacity)
# param_1 = obj.get(key)
# obj.put(key,value)

# Time Complexity: O(1) for get and put
# Space Complexity: O(N)
```