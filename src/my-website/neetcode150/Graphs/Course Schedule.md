---
tags:
 - Medium
---

https://leetcode.com/problems/course-schedule

1. Represent the prerequisites as a adj list directed graph
2. Check if there is any cycle within the graph
3. If there is a cycle, the course cant be completed

```python
class Solution:
    def canFinish(self, numCourses: int, prerequisites: List[List[int]]) -> bool:
        graph = defaultdict(list)
        for a, b in prerequisites:
            graph[b].append(a)
        
        visited = [0] * numCourses
        def isCyclic(node):
            if visited[node] == 1:
                return True
            visited[node] = 1
            for neighbour in graph[node]:
                if visited[neighbour] != 2 and isCyclic(neighbour):
                    return True
            visited[node] = 2
            return False

        for i in range(numCourses):
            if not visited[i]:
                if isCyclic(i):
                    return False
        return True

# Time Complexity: O(V+E) DFS is called max on one node each time.  
# Space Complexity: O(V+E)
```