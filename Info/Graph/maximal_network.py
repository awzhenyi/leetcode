# https://leetcode.com/problems/maximal-network-rank

class Solution:
    def maximalNetworkRank(self, n: int, roads: List[List[int]]) -> int:
        ans = 0
        graph = collections.defaultdict(list)
        for u, v in roads:
            graph[u].append(v)
            graph[v].append(u)
        for i in range(n):
            for j in range(i+1, n):
                tmp = len(graph[i]) + len(graph[j]) - (i in graph[j])
                ans = max(ans, tmp)

        return ans

# Time Complexity: O(V^2 + E)
# Space Complexity: O(V+E). worst case complete graph = O(V^2 + V)
