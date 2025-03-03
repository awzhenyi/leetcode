"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1407],{2490:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>a});var r=t(4848),i=t(8453);const o={},s=void 0,l={id:"Trees/Right Side Tree View",title:"Right Side Tree View",description:"https://leetcode.com/problems/binary-tree-right-side-view/",source:"@site/neetcode150/Trees/Right Side Tree View.md",sourceDirName:"Trees",slug:"/Trees/Right Side Tree View",permalink:"/leetcode/neetcode150/Trees/Right Side Tree View",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Max Depth of Tree",permalink:"/leetcode/neetcode150/Trees/Max Depth of Tree"},next:{title:"Serialize and Deserialize Binary Tree",permalink:"/leetcode/neetcode150/Trees/Serialize and Deserialize Binary Tree"}},d={},a=[];function c(e){const n={a:"a",code:"code",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://leetcode.com/problems/binary-tree-right-side-view/",children:"https://leetcode.com/problems/binary-tree-right-side-view/"})}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"do bfs level traversal, only add the rightmost node in each level to the output"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"# Definition for a binary tree node.\r\n# class TreeNode:\r\n#     def __init__(self, val=0, left=None, right=None):\r\n#         self.val = val\r\n#         self.left = left\r\n#         self.right = right\r\nclass Solution:\r\n    def rightSideView(self, root: Optional[TreeNode]) -> List[int]:\r\n        if not root:\r\n            return []\r\n        q = collections.deque([root])\r\n        output = []\r\n        while q:\r\n            n = len(q)\r\n            for i in range(n):\r\n                node = q.popleft()\r\n                if i == n-1:\r\n                    output.append(node.val)\r\n                if node.left:\r\n                    q.append(node.left)\r\n                if node.right:\r\n                    q.append(node.right)\r\n        return output\r\n            \r\n\r\n\r\n# Time Complexity: O(N)\r\n# Space Complexity: O(N)\n"})})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>l});var r=t(6540);const i={},o=r.createContext(i);function s(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);