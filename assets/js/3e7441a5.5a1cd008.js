"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[865],{5156:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>l,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var r=n(4848),o=n(8453);const i={tags:["Medium"]},c=void 0,s={id:"Backtrack/Letter Combination",title:"Letter Combination",description:"https://leetcode.com/problems/letter-combinations-of-a-phone-number/",source:"@site/neetcode150/Backtrack/Letter Combination.md",sourceDirName:"Backtrack",slug:"/Backtrack/Letter Combination",permalink:"/leetcode/neetcode150/Backtrack/Letter Combination",draft:!1,unlisted:!1,tags:[{label:"Medium",permalink:"/leetcode/neetcode150/tags/medium"}],version:"current",frontMatter:{tags:["Medium"]},sidebar:"tutorialSidebar",previous:{title:"Combination Sum",permalink:"/leetcode/neetcode150/Backtrack/Combination Sum"},next:{title:"N Queens",permalink:"/leetcode/neetcode150/Backtrack/N Queens"}},a={},d=[];function u(e){const t={a:"a",code:"code",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://leetcode.com/problems/letter-combinations-of-a-phone-number/",children:"https://leetcode.com/problems/letter-combinations-of-a-phone-number/"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:'class Solution:\r\n    def letterCombinations(self, digits: str) -> List[str]:\r\n        if digits == "": return []\r\n        output = []\r\n\r\n        phone = {\r\n           "2" : "abc",\r\n           "3" : "def",\r\n           "4" : "ghi",\r\n           "5" : "jkl",\r\n           "6" : "mno",\r\n           "7" : "pqrs",\r\n           "8" : "tuv",\r\n           "9" : "wxyz"\r\n        }\r\n\r\n        def dfs(idx, curr_string):\r\n            if idx == len(digits):\r\n                output.append(\'\'.join(curr_string[:]))\r\n                return\r\n            \r\n            for letter in phone[digits[idx]]:\r\n                curr_string.append(letter)\r\n                dfs(idx+1, curr_string)\r\n                curr_string.pop()\r\n\r\n        dfs(0, [])\r\n        return output           \r\n        \r\n\r\n# Time Complexity: O(N * (4^N)), N is the length of digits\r\n# Space Complexity: O(N)\n'})})]})}function l(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>s});var r=n(6540);const o={},i=r.createContext(o);function c(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);