"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6371],{9885:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var n=t(4848),o=t(8453);const s={},i=void 0,a={id:"Array/Group Anagrams",title:"Group Anagrams",description:"https://leetcode.com/problems/group-anagrams/",source:"@site/neetcode150/Array/Group Anagrams.md",sourceDirName:"Array",slug:"/Array/Group Anagrams",permalink:"/leetcode/neetcode150/Array/Group Anagrams",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Find Prefix Common Array of Two Arrays",permalink:"/leetcode/neetcode150/Array/Find Prefix Common Array of Two Arrays"},next:{title:"Intersection of Two Arrays II",permalink:"/leetcode/neetcode150/Array/Intersection of Two Arrays II"}},c={},l=[];function u(e){const r={a:"a",code:"code",li:"li",ol:"ol",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"https://leetcode.com/problems/group-anagrams/",children:"https://leetcode.com/problems/group-anagrams/"})}),"\n",(0,n.jsxs)(r.ol,{children:["\n",(0,n.jsx)(r.li,{children:"Use sorted string as the key to determine anagrams."}),"\n",(0,n.jsx)(r.li,{children:"String sorting is troublesome in python since it returns list of char. use ''.join to get back string."}),"\n",(0,n.jsx)(r.li,{children:"dict.values() return a list of values. in this case, it conveniently returns list of list."}),"\n"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:"class Solution:\r\n    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:\r\n        count = collections.defaultdict(list)\r\n        for s in strs:\r\n            temp_s = ''.join(sorted(s))\r\n            count[temp_s].append(s)\r\n        return count.values()\r\n\r\n#Time Complexity: O(N log N) -> sorting of each string\r\n#Space Complexity: O(N) -> n number of strings\n"})})]})}function d(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},8453:(e,r,t)=>{t.d(r,{R:()=>i,x:()=>a});var n=t(6540);const o={},s=n.createContext(o);function i(e){const r=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);