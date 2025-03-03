"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[837],{849:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var r=t(4848),a=t(8453);const o={tags:["Medium"]},i=void 0,c={id:"Sliding Window/Longest Repeating Character Replacement",title:"Longest Repeating Character Replacement",description:"https://leetcode.com/problems/longest-repeating-character-replacement/",source:"@site/neetcode150/Sliding Window/Longest Repeating Character Replacement.md",sourceDirName:"Sliding Window",slug:"/Sliding Window/Longest Repeating Character Replacement",permalink:"/leetcode/neetcode150/Sliding Window/Longest Repeating Character Replacement",draft:!1,unlisted:!1,tags:[{label:"Medium",permalink:"/leetcode/neetcode150/tags/medium"}],version:"current",frontMatter:{tags:["Medium"]},sidebar:"tutorialSidebar",previous:{title:"Best Time to Buy and Sell Stock",permalink:"/leetcode/neetcode150/Sliding Window/Best Time to Buy and Sell Stock"},next:{title:"Longest SubString Without Repeating Characters",permalink:"/leetcode/neetcode150/Sliding Window/Longest SubString Without Repeating Characters"}},l={},s=[];function d(e){const n={a:"a",code:"code",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://leetcode.com/problems/longest-repeating-character-replacement/",children:"https://leetcode.com/problems/longest-repeating-character-replacement/"})}),"\n",(0,r.jsx)(n.p,{children:"maintain a count of frequency of characters and a max_frequency variable. condition for moving left pointer is when (r- l + 1) - max_frequency > k"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"class Solution:\r\n    def characterReplacement(self, s: str, k: int) -> int:\r\n        max_len = 0\r\n        l = 0\r\n        max_freq = 0\r\n        count = {}\r\n        for r in range(len(s)):\r\n            count[s[r]] = count.get(s[r], 0) + 1\r\n            max_freq = max(max_freq, count[s[r]])\r\n            while r - l + 1 - max_freq > k:\r\n                count[s[l]] -= 1\r\n                l += 1\r\n            max_len = max(max_len, r - l + 1)\r\n        return max_len\r\n# Time Complexity: O(N)\r\n# Space Complexity: O(N)\n"})})]})}function m(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>c});var r=t(6540);const a={},o=r.createContext(a);function i(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);