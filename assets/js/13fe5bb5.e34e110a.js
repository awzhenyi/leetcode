"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3198],{3252:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>l,frontMatter:()=>i,metadata:()=>m,toc:()=>u});var r=t(4848),o=t(8453);const i={},a=void 0,m={id:"Math/Maximum Swap",title:"Maximum Swap",description:"https://leetcode.com/problems/maximum-swap/",source:"@site/others/Math/Maximum Swap.md",sourceDirName:"Math",slug:"/Math/Maximum Swap",permalink:"/leetcode/others/Math/Maximum Swap",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Find the Winner of the Circular Game",permalink:"/leetcode/others/Math/Find the Winner of the Circular Game"},next:{title:"Minimum Number of Operations to Move All Balls to Each Box",permalink:"/leetcode/others/Prefix Sum/Minimum Number of Operations to Move All Balls to Each Box"}},s={},u=[];function c(e){const n={a:"a",code:"code",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://leetcode.com/problems/maximum-swap/",children:"https://leetcode.com/problems/maximum-swap/"})}),"\n",(0,r.jsx)(n.p,{children:"Greedy, go from the back"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'class Solution:\r\n    def maximumSwap(self, num: int) -> int:\r\n        num = [int(x) for x in str(num)]\r\n        max_id = len(num) - 1\r\n        swap_one_idx, swap_two_idx = 0, 0\r\n        for i in range(len(num)-1, -1, -1):\r\n            if num[i] > num[max_id]:\r\n                max_id = i\r\n            elif num[i] < num[max_id]:\r\n                swap_one_idx = i\r\n                swap_two_idx = max_id\r\n        num[swap_one_idx], num[swap_two_idx] = num[swap_two_idx], num[swap_one_idx]\r\n        return int("".join([str(x) for x in num]))\r\n\r\n# Time Complexity: O(N)\r\n# Space Complexity: O(N)\n'})})]})}function l(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>m});var r=t(6540);const o={},i=r.createContext(o);function a(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function m(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);