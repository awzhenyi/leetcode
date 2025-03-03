"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[142],{4745:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var r=n(4848),a=n(8453);const s={tags:["Medium"]},c=void 0,o={id:"Stack/Min Stack",title:"Min Stack",description:"https://leetcode.com/problems/min-stack/",source:"@site/neetcode150/Stack/Min Stack.md",sourceDirName:"Stack",slug:"/Stack/Min Stack",permalink:"/leetcode/neetcode150/Stack/Min Stack",draft:!1,unlisted:!1,tags:[{label:"Medium",permalink:"/leetcode/neetcode150/tags/medium"}],version:"current",frontMatter:{tags:["Medium"]},sidebar:"tutorialSidebar",previous:{title:"Largest Rectangle In Histogram",permalink:"/leetcode/neetcode150/Stack/Largest Rectangle In Histogram"},next:{title:"Valid Parentheses",permalink:"/leetcode/neetcode150/Stack/Valid Parentheses"}},i={},l=[];function p(e){const t={a:"a",code:"code",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://leetcode.com/problems/min-stack/",children:"https://leetcode.com/problems/min-stack/"})}),"\n",(0,r.jsx)(t.p,{children:"store curr min + value of stack as a tuple in a stack"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:'class MinStack:\r\n\r\n    def __init__(self):\r\n        self.stack = []\r\n\r\n    def push(self, val: int) -> None:\r\n        curr_min = val if not self.stack else min(val, self.stack[-1][1])\r\n        self.stack.append((val, curr_min))\r\n\r\n    def pop(self) -> None:\r\n        self.stack.pop()\r\n\r\n    def top(self) -> int:\r\n        return self.stack[-1][0]\r\n\r\n    def getMin(self) -> int:\r\n        if not self.stack:\r\n            raise Exception("stack is empty, no min value")\r\n        return self.stack[-1][1]\r\n\r\n\r\n# Your MinStack object will be instantiated and called as such:\r\n# obj = MinStack()\r\n# obj.push(val)\r\n# obj.pop()\r\n# param_3 = obj.top()\r\n# param_4 = obj.getMin()\r\n\r\n# Time Complexity: O(N)\r\n# Space Complexity: O(1) for all operations\n'})})]})}function d(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>o});var r=n(6540);const a={},s=r.createContext(a);function c(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);