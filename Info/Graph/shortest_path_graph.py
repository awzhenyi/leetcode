# https://leetcode.com/problems/design-graph-with-shortest-path-calculator/description/
class Graph:

    def __init__(self, n: int, edges: List[List[int]]):
        self.graph = defaultdict(list)
        for edge in edges:
            self.addEdge(edge)
        self.num_nodes = n

    def addEdge(self, edge: List[int]) -> None:
        u, v, cost = edge
        self.graph[u].append((v, cost))

    def shortestPath(self, node1: int, node2: int) -> int:
        return self.dijkstra(node1, node2)

    def dijkstra(self, node1, node2) -> int:
        distance = [float("inf")] * self.num_nodes
        distance[node1] = 0
        queue = collections.deque()
        queue.append((node1, 0))
        while queue:
            node, cost = queue.popleft()
            for neighbour, neighbour_cost in self.graph[node]:
                if cost + neighbour_cost < distance[neighbour]:
                    distance[neighbour] = cost + neighbour_cost
                    queue.append((neighbour, cost + neighbour_cost))
        return distance[node2] if distance[node2] < float("inf") else -1


class Graph:

    def __init__(self, n: int, edges: List[List[int]]):
        self.graph = [[float("inf")] * n for _ in range(n)]
        for i in range(n):
            self.graph[i][i] = 0
        for u, v, cost in edges:
            self.graph[u][v] = cost

        for i in range(n):
            for j in range(n):
                for k in range(n):
                    self.graph[j][k] = min(self.graph[j][k],
                                           self.graph[j][i] +
                                           self.graph[i][k])

    def addEdge(self, edge: List[int]) -> None:
        u, v, cost = edge
        n = len(self.graph)

        for i in range(n):
            for j in range(n):
                self.graph[i][j] = min(
                    self.graph[i][j], self.graph[i][u] + self.graph[v][j] + cost)

    def shortestPath(self, node1: int, node2: int) -> int:
        return self.graph[node1][node2] if self.graph[node1][node2] < float("inf") else -1


# Solution 1: Dijkstra

# Solution 2: Floyd-Warshall
