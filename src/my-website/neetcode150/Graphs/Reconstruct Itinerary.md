---
sidebar_position: 18
tags:
 - Hard
---

https://leetcode.com/problems/reconstruct-itinerary



```python
class Solution:
    def findItinerary(self, tickets: List[List[str]]) -> List[str]:
        tickets.sort(reverse=True)
        graph = defaultdict(list)
        for src, des in tickets:
            graph[src].append(des)
        res = []
        stack = ["JFK"]
        
        while stack:
            while graph[stack[-1]]:
                stack.append(graph[stack[-1]].pop())
            else:
                res.append(stack.pop())

        return res[::-1]
    
# Time Complexity: O()
# Space Complexity: O()
```


2. TLE solution
```python
class Solution:
    def findItinerary(self, tickets: List[List[str]]) -> List[str]:
        graph = defaultdict(list)
        for src, des in tickets:
            graph[src].append(des)
        
        for src in graph:
            graph[src].sort()
        
        itinerary = []
        visited = set()
        def dfs(src):
            itinerary.append(src)
            for i, des in enumerate(graph[src]):
                if (i, src, des) not in visited:
                    visited.add((i, src, des))
                    dfs(des)
                    if len(visited) == len(tickets):
                        return True
                    itinerary.pop()
                    visited.remove((i, src, des))
        dfs("JFK")
        return itinerary
    
# Time Complexity: O()
# Space Complexity: O()
```