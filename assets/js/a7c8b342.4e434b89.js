"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9029],{8225:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>m});var r=n(4848),o=n(8453);const a={tags:["Medium"]},s=void 0,c={id:"Greedy/Jump Game",title:"Jump Game",description:"https://leetcode.com/problems/jump-game/",source:"@site/neetcode150/Greedy/Jump Game.md",sourceDirName:"Greedy",slug:"/Greedy/Jump Game",permalink:"/leetcode/neetcode150/Greedy/Jump Game",draft:!1,unlisted:!1,tags:[{label:"Medium",permalink:"/leetcode/neetcode150/tags/medium"}],version:"current",frontMatter:{tags:["Medium"]},sidebar:"tutorialSidebar",previous:{title:"Jump Game II",permalink:"/leetcode/neetcode150/Greedy/Jump Game II"},next:{title:"Max Subarray",permalink:"/leetcode/neetcode150/Greedy/Max Subarray"}},i={},m=[];function u(e){const t={a:"a",code:"code",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://leetcode.com/problems/jump-game/",children:"https://leetcode.com/problems/jump-game/"})}),"\n",(0,r.jsx)(t.p,{children:"greedily track furthest reachable index. If it is ever less than current index, it is not reachable."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"class Solution:\r\n    def canJump(self, nums: List[int]) -> bool:\r\n        furthest_can_reach = 0\r\n        for i, jumps in enumerate(nums):\r\n            #even with max jumps from some position before i-th position, i-th position is not reachable. hence jumps dies halfway.\r\n            if furthest_can_reach < i: \r\n                return False \r\n            furthest_can_reach = max(furthest_can_reach, i + jumps)\r\n        return True\r\n# Time Complexity: O(N)\r\n# Space Complexity: O(1)\n"})})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>c});var r=n(6540);const o={},a=r.createContext(o);function s(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);