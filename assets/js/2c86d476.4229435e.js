"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7819],{2429:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var r=n(4848),o=n(8453);const a={tags:["Medium"]},s=void 0,c={id:"Stack/Evaluate Reverse Polish Notation",title:"Evaluate Reverse Polish Notation",description:"https://leetcode.com/problems/evaluate-reverse-polish-notation",source:"@site/neetcode150/Stack/Evaluate Reverse Polish Notation.md",sourceDirName:"Stack",slug:"/Stack/Evaluate Reverse Polish Notation",permalink:"/leetcode/neetcode150/Stack/Evaluate Reverse Polish Notation",draft:!1,unlisted:!1,tags:[{label:"Medium",permalink:"/leetcode/neetcode150/tags/medium"}],version:"current",frontMatter:{tags:["Medium"]},sidebar:"tutorialSidebar",previous:{title:"Daily Temperatures",permalink:"/leetcode/neetcode150/Stack/Daily Temperatures"},next:{title:"Generate Parentheses",permalink:"/leetcode/neetcode150/Stack/Generate Parentheses"}},i={},l=[];function p(e){const t={a:"a",code:"code",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://leetcode.com/problems/evaluate-reverse-polish-notation",children:"https://leetcode.com/problems/evaluate-reverse-polish-notation"})}),"\n",(0,r.jsx)(t.p,{children:"Use stack. when see a operator, pop top 2 and do calculation. truncate division towards 0 = math.truncate(a / b) or int(a / b)"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"class Solution:\r\n    def evalRPN(self, tokens: List[str]) -> int:\r\n\r\n        def calculate(first, operator, second):\r\n            match operator:\r\n                case '+':\r\n                    return first + second\r\n                case '-':\r\n                    return first - second\r\n                case '/':\r\n                    return math.trunc(first / second)\r\n                case '*':\r\n                    return first * second\r\n\r\n        stack = []\r\n        for token in tokens:\r\n            if token in '+-*/':\r\n                second_operand = stack.pop()\r\n                operator = token\r\n                first_operand = stack.pop()\r\n                stack.append(calculate(first_operand, operator, second_operand))\r\n            else:\r\n                stack.append(int(token))\r\n        return stack[-1]\r\n\r\n# Time Complexity: O(N)\r\n# Space Complexity: O(N)\n"})})]})}function d(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>c});var r=n(6540);const o={},a=r.createContext(o);function s(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);