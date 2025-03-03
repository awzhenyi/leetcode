"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4148],{6506:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var r=n(4848),a=n(8453);const s={tags:["Medium"]},i=void 0,c={id:"Stack/Generate Parentheses",title:"Generate Parentheses",description:"https://leetcode.com/problems/generate-parentheses",source:"@site/neetcode150/Stack/Generate Parentheses.md",sourceDirName:"Stack",slug:"/Stack/Generate Parentheses",permalink:"/leetcode/neetcode150/Stack/Generate Parentheses",draft:!1,unlisted:!1,tags:[{label:"Medium",permalink:"/leetcode/neetcode150/tags/medium"}],version:"current",frontMatter:{tags:["Medium"]},sidebar:"tutorialSidebar",previous:{title:"Evaluate Reverse Polish Notation",permalink:"/leetcode/neetcode150/Stack/Evaluate Reverse Polish Notation"},next:{title:"Largest Rectangle In Histogram",permalink:"/leetcode/neetcode150/Stack/Largest Rectangle In Histogram"}},o={},l=[];function d(e){const t={a:"a",code:"code",li:"li",ol:"ol",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://leetcode.com/problems/generate-parentheses",children:"https://leetcode.com/problems/generate-parentheses"})}),"\n",(0,r.jsx)(t.p,{children:"backtrack, generate all valid possibilies"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"keep track of left and right brackets added"}),"\n",(0,r.jsx)(t.li,{children:"if left == right == n, append current path"}),"\n",(0,r.jsx)(t.li,{children:"if left < n, add left bracket and backtrack by popping"}),"\n",(0,r.jsx)(t.li,{children:"if left > right, add right bracket and backtrack by popping"}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"class Solution:\r\n    def generateParenthesis(self, n: int) -> List[str]:\r\n        res = []\r\n        def build(left, right, curr):\r\n            if left == right == n:\r\n                res.append(''.join(curr))\r\n            \r\n            if left < n:\r\n                curr.append('(')\r\n                build(left + 1, right, curr)\r\n                curr.pop()\r\n\r\n            if left > right:\r\n                curr.append(')')\r\n                build(left, right + 1, curr)\r\n                curr.pop()\r\n        build(0, 0, [])\r\n        return res\r\n# Time Complexity: O(4^n / (n^(3/2))) nth catalan number. all possible sequences 2^n but only valid ones based on the bounds left < n, left > right etc\r\n# Space Complexity: O(N) recursion stack space, but total output -> O(4^n / n ^ (1 / 2))\n"})})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>c});var r=n(6540);const a={},s=r.createContext(a);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);