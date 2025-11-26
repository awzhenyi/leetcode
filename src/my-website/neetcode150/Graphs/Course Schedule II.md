---
sidebar_position: 2
tags:
 - Medium
---

https://leetcode.com/problems/course-schedule-ii

1. Build a valid toposort using cycle detection
2. A DAG with no cycles will always have a valid toposort. Conversely, a cyclic graph will not have a toposort
3. Think about how the dependency is represented. The first course to be appended to the order is the first course that needs to be taken. Hence it should be graph[b].append(a)

```python
class Solution:
    def findOrder(self, numCourses: int, prerequisites: List[List[int]]) -> List[int]:
        graph = defaultdict(list)
        for a, b in prerequisites:
            # key = course, value = list of courses that you have to take before key
            graph[a].append(b)

        visited = [0] * numCourses
        order = []
        def isCyclic(course):
            if visited[course] == 1:
                return True
            
            visited[course] = 1
            for prereq in graph[course]:
                if visited[prereq] != 2 and isCyclic(prereq):
                    return True
                
            visited[course] = 2
            # The first course to be appended is the first course that needs to be taken
            order.append(course)
        
        for course in range(numCourses):
            if not visited[course]:
                isCyclic(course)

        return order if len(order) == numCourses else []
# Time Complexity: O(V + E)
# Space Complexity: O(V + E)
```