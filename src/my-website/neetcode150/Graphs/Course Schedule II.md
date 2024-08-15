---
tags:
 - Medium
---

https://leetcode.com/problems/course-schedule-ii

1. Build a valid toposort using cycle detection
2. A DAG with no cycles will always have a valid toposort. Conversely, a cyclic graph will not have a toposort

```python
class Solution:
    def findOrder(self, numCourses: int, prerequisites: List[List[int]]) -> List[int]:
        graph = defaultdict(list)
        for a, b in prerequisites:
            graph[b].append(a)
        
        topo_sort = []
        visited = [0] * numCourses
        def isCyclic(node):
            if visited[node] == 1:
                return True
            
            visited[node] = 1
            for neighbour in graph[node]:
                if visited[neighbour] != 2 and isCyclic(neighbour):
                    return True
            topo_sort.append(node)
            visited[node] = 2
            return False
        
        for i in range(numCourses):
            if visited[i] == 0:
                isCyclic(i)

        return topo_sort[::-1] if len(topo_sort) == numCourses else []

# Time Complexity: O(V + E)
# Space Complexity: O(V + E)
```