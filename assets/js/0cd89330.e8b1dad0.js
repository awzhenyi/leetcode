"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1041],{1009:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>x,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var i=t(4848),r=t(8453);const s={tags:["Medium"]},a=void 0,o={id:"Linked List/Min Max Distance Between Critical Points",title:"Min Max Distance Between Critical Points",description:"One pass, use constants to store required information for computation on the fly",source:"@site/others/Linked List/Min Max Distance Between Critical Points.md",sourceDirName:"Linked List",slug:"/Linked List/Min Max Distance Between Critical Points",permalink:"/leetcode/others/Linked List/Min Max Distance Between Critical Points",draft:!1,unlisted:!1,tags:[{label:"Medium",permalink:"/leetcode/others/tags/medium"}],version:"current",frontMatter:{tags:["Medium"]},sidebar:"tutorialSidebar",previous:{title:"Merge Nodes in Between Zeros",permalink:"/leetcode/others/Linked List/Merge Nodes in Between Zeros"},next:{title:"Check If Array Pairs Are Divisible by k",permalink:"/leetcode/others/Math/Check If Array Pairs Are Divisible by k"}},d={},l=[];function c(e){const n={code:"code",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"One pass, use constants to store required information for computation on the fly"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"# Definition for singly-linked list.\r\n# class ListNode:\r\n#     def __init__(self, val=0, next=None):\r\n#         self.val = val\r\n#         self.next = next\r\nclass Solution:\r\n    def nodesBetweenCriticalPoints(self, head: Optional[ListNode]) -> List[int]:\r\n        critical_vals = []\r\n        prev_val = -1\r\n        idx = 1\r\n        first_crit_idx = -1\r\n        prev_crit_idx = -1\r\n        min_dist, max_dist = 10**5 + 1, -1\r\n        while head.next:\r\n            if prev_val == -1:\r\n                prev_val = head.val\r\n                idx += 1\r\n                head = head.next\r\n            else:\r\n                if (head.val > prev_val and head.val > head.next.val) or (head.val < prev_val and head.val < head.next.val):\r\n                    if first_crit_idx == -1:\r\n                        first_crit_idx = idx\r\n                    else:\r\n                        min_dist = min(min_dist, idx - prev_crit_idx)\r\n                        max_dist = max(max_dist, idx - first_crit_idx)\r\n                    prev_crit_idx = idx\r\n                prev_val = head.val\r\n                head = head.next\r\n                idx += 1\r\n        if max_dist == -1:\r\n            return [-1, -1]\r\n        return [min_dist, max_dist]\r\n\r\n# Time Complexity: O(N)\r\n# Space Complexity: O(1) some constants\n"})})]})}function x(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>o});var i=t(6540);const r={},s=i.createContext(r);function a(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);