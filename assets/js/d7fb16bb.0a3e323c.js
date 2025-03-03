"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6929],{5410:(n,r,e)=>{e.r(r),e.d(r,{assets:()=>o,contentTitle:()=>d,default:()=>p,frontMatter:()=>t,metadata:()=>a,toc:()=>c});var i=e(4848),s=e(8453);const t={tags:["Medium"]},d=void 0,a={id:"Graphs/Number of Islands",title:"Number of Islands",description:"Number of Islands - LeetCode",source:"@site/neetcode150/Graphs/Number of Islands.md",sourceDirName:"Graphs",slug:"/Graphs/Number of Islands",permalink:"/leetcode/neetcode150/Graphs/Number of Islands",draft:!1,unlisted:!1,tags:[{label:"Medium",permalink:"/leetcode/neetcode150/tags/medium"}],version:"current",frontMatter:{tags:["Medium"]},sidebar:"tutorialSidebar",previous:{title:"Number of Connected Components in an Undirected Graph",permalink:"/leetcode/neetcode150/Graphs/Number of Connected Components in an Undirected Graph"},next:{title:"Reconstruct Itinerary",permalink:"/leetcode/neetcode150/Graphs/Reconstruct Itinerary"}},o={},c=[];function l(n){const r={a:"a",code:"code",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.p,{children:(0,i.jsx)(r.a,{href:"https://leetcode.com/problems/number-of-islands/",children:"Number of Islands - LeetCode"})}),"\n",(0,i.jsxs)(r.ol,{children:["\n",(0,i.jsxs)(r.li,{children:["Check with interviewer if u are allowed to overwrite inputs, else just copy array\r\nDFS on every instance of island, check conditions: ",(0,i.jsx)(r.code,{children:"0 <= r < ROWS and 0 <= c < COLS"})," and ",(0,i.jsx)(r.code,{children:'grid[r][c] == "1"'})," and (r,c) not in visited:"]}),"\n"]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-python",children:'class Solution:\r\n    def numIslands(self, grid: List[List[str]]) -> int:\r\n        ROWS = len(grid)\r\n        COLS = len(grid[0])\r\n\r\n        def dfs(r, c, visited):\r\n            if 0 <= r < ROWS and 0 <= c < COLS and (r,c) not in visited and grid[r][c] == "1":\r\n                grid[r][c] = "2"\r\n                visited.add((r,c))\r\n                dfs(r + 1, c, visited)\r\n                dfs(r - 1, c, visited)\r\n                dfs(r, c + 1, visited)\r\n                dfs(r, c - 1, visited)\r\n\r\n        islands = 0\r\n        for r in range(ROWS):\r\n            for c in range(COLS):\r\n                if grid[r][c] == "1":\r\n                    dfs(r, c, set())\r\n                    islands += 1\r\n        return islands\r\n\r\n        # idea: loop the grid, find a starting point. every starting point = 1 island\r\n        # for each starting point, we will apply a search algorithm to find the connected parts of the island\r\n\r\n# Time Complexity: O(MN)\r\n# Space Complexity: O(MN)\n'})}),"\n",(0,i.jsxs)(r.p,{children:["BFS on every instance of island, check conditions: ",(0,i.jsx)(r.code,{children:"0 <= r < ROWS and 0 <= c < COLS"})," and ",(0,i.jsx)(r.code,{children:'grid[r][c] == "1"'})," and (r,c) not in visited:"]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-python",children:'class Solution:\r\n    def numIslands(self, grid: List[List[str]]) -> int:\r\n        islands = 0\r\n        ROWS = len(grid)\r\n        COLS = len(grid[0])\r\n        for r in range(ROWS):\r\n            for c in range(COLS):\r\n                if grid[r][c] == "1":\r\n                    islands += 1\r\n                    # start bfs\r\n                    q = [(r,c)]\r\n                    for x, y in q:\r\n                        grid[x][y] = "2"\r\n                        for _x, _y in [(x+1,y), (x-1,y), (x,y+1), (x,y-1)]:\r\n                            if 0 <= _x < ROWS and 0 <= _y < COLS and grid[_x][_y] == "1":\r\n                                q.append((_x,_y))\r\n                                grid[_x][_y] = "2"\r\n        return islands\r\n        # idea: loop the grid, find a starting point. every starting point = 1 island\r\n        # for each starting point, we will apply a search algorithm to find the connected parts of the island\r\n\r\n\r\n# Time Complexity: O(MN)\r\n# Space Complexity: O(MN)\n'})}),"\n",(0,i.jsx)(r.p,{children:"Optimized space with queue, since queue is getting popped at each level, space complexity is less"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-python",children:'class Solution:\r\n    def numIslands(self, grid: List[List[str]]) -> int:\r\n        islands = 0\r\n        ROWS = len(grid)\r\n        COLS = len(grid[0])\r\n        for r in range(ROWS):\r\n            for c in range(COLS):\r\n                if grid[r][c] == "1":\r\n                    islands += 1\r\n                    # start bfs\r\n                    q = collections.deque([(r,c)])\r\n                    while q:\r\n                        x, y = q.popleft()\r\n                        grid[x][y] = "2"\r\n                        for _x, _y in [(x+1,y), (x-1,y), (x,y+1), (x,y-1)]:\r\n                            if 0 <= _x < ROWS and 0 <= _y < COLS and grid[_x][_y] == "1":\r\n                                q.append((_x,_y))\r\n                                grid[_x][_y] = "2"\r\n        return islands\r\n        # idea: loop the grid, find a starting point. every starting point = 1 island\r\n        # for each starting point, we will apply a search algorithm to find the connected parts of the island\r\n\r\n\r\n# Time Complexity: O(MN)\r\n# Space Complexity: O(min (M, N))\n'})}),"\n",(0,i.jsx)(r.p,{children:"Do not modify inputs I. add additional visited_grid bool list of list"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-python",children:'class Solution:\r\n    def numIslands(self, grid: List[List[str]]) -> int:\r\n        islands = 0\r\n        ROWS = len(grid)\r\n        COLS = len(grid[0])\r\n        visited_grid = [[0] * COLS for _ in range(ROWS)]\r\n\r\n        for r in range(ROWS):\r\n            for c in range(COLS):\r\n                if grid[r][c] == "1" and visited_grid[r][c] == 0:\r\n                    islands += 1\r\n                    # start bfs\r\n                    q = collections.deque([(r,c)])\r\n                    while q:\r\n                        x, y = q.popleft()\r\n                        visited_grid[x][y] = 1\r\n                        for _x, _y in [(x+1,y), (x-1,y), (x,y+1), (x,y-1)]:\r\n                            if 0 <= _x < ROWS and 0 <= _y < COLS and visited_grid[_x][_y] == 0 and grid[_x][_y] == "1":\r\n                                q.append((_x,_y))\r\n                                visited_grid[_x][_y] = 1\r\n        return islands\r\n        # idea: loop the grid, find a starting point. every starting point = 1 island\r\n        # for each starting point, we will apply a search algorithm to find the connected parts of the island\n'})}),"\n",(0,i.jsxs)(r.p,{children:["Do not modify inputs II. deepcopy the grid, ie ",(0,i.jsx)(r.code,{children:"new_grid = [row[:] for row in grid]"})]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-python",children:'class Solution:\r\n    def numIslands(self, grid: List[List[str]]) -> int:\r\n        islands = 0\r\n        ROWS = len(grid)\r\n        COLS = len(grid[0])\r\n        copy_grid = [row[:] for row in grid]\r\n\r\n        for r in range(ROWS):\r\n            for c in range(COLS):\r\n                if copy_grid[r][c] == "1":\r\n                    islands += 1\r\n                    # start bfs\r\n                    q = collections.deque([(r,c)])\r\n                    while q:\r\n                        x, y = q.popleft()\r\n                        copy_grid[x][y] = "2"\r\n                        for _x, _y in [(x+1,y), (x-1,y), (x,y+1), (x,y-1)]:\r\n                            if 0 <= _x < ROWS and 0 <= _y < COLS and copy_grid[_x][_y] == "1":\r\n                                q.append((_x,_y))\r\n                                copy_grid[_x][_y] = "2"\r\n        return islands\n'})}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-java",children:"class Solution {\r\n    public int numIslands(char[][] grid) {\r\n        int rows = grid.length;\r\n        int cols = grid[0].length;\r\n        int islands = 0;\r\n        for (int r = 0; r < rows; r++) {\r\n            for (int c = 0; c < cols; c++) {\r\n                if (grid[r][c] == '1') {\r\n                    islands += 1;\r\n                    dfs(grid, r, c);\r\n                }\r\n            }\r\n        }\r\n        return islands;\r\n    }\r\n\r\n    private void dfs(char[][] grid, int r, int c) {\r\n        if (r >= 0 && r < grid.length && c >= 0 && c < grid[0].length && grid[r][c] == '1') {\r\n            grid[r][c] = 0;\r\n            dfs(grid, r+1, c);\r\n            dfs(grid, r-1, c);\r\n            dfs(grid, r, c+1);\r\n            dfs(grid, r, c-1);\r\n        }\r\n    }\r\n}\n"})})]})}function p(n={}){const{wrapper:r}={...(0,s.R)(),...n.components};return r?(0,i.jsx)(r,{...n,children:(0,i.jsx)(l,{...n})}):l(n)}},8453:(n,r,e)=>{e.d(r,{R:()=>d,x:()=>a});var i=e(6540);const s={},t=i.createContext(s);function d(n){const r=i.useContext(t);return i.useMemo((function(){return"function"==typeof n?n(r):{...r,...n}}),[r,n])}function a(n){let r;return r=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:d(n.components),i.createElement(t.Provider,{value:r},n.children)}}}]);