from typing import List

class UnionFind:
    def __init__(self, n):
        self.parents = list(range(n))
        self.size = [1] * n

    def union(self, x, y):
        parent_x = self.find(x)
        parent_y = self.find(y)
        if parent_x != parent_y:
            self.parents[parent_y] = parent_x
            self.size[parent_x] += self.size[parent_y]
            return True
        return False

    def find(self, x):
        if self.parents[x] != x:
            self.parents[x] = self.find(self.parents[x])
        return self.parents[x]

    def getBiggestParent(self):
        print(self.size[1:])
        max_size = max(self.size)
        for i in range(len(self.size)):
            if self.size[i] == max_size:
                return i

def findRedundantConnection(edges: List[List[int]]) -> List[int]:
    uf = UnionFind(7)
    for u, v in edges:
        uf.union(v, u)
    return uf.getBiggestParent()

t = [[1,2],[3,4],[5,4],[6,3]]
r = findRedundantConnection(t)
print(r)