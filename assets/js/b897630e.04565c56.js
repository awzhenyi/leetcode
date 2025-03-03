"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8381],{622:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>m,contentTitle:()=>r,default:()=>l,frontMatter:()=>s,metadata:()=>o,toc:()=>u});var a=i(4848),n=i(8453);const s={tags:["Medium","KMP","heap"]},r=void 0,o={id:"Heap/Max Sum of a Pair With Equal Sum of Digits",title:"Max Sum of a Pair With Equal Sum of Digits",description:"https://leetcode.com/problems/max-sum-of-a-pair-with-equal-sum-of-digits",source:"@site/others/Heap/Max Sum of a Pair With Equal Sum of Digits.md",sourceDirName:"Heap",slug:"/Heap/Max Sum of a Pair With Equal Sum of Digits",permalink:"/leetcode/others/Heap/Max Sum of a Pair With Equal Sum of Digits",draft:!1,unlisted:!1,tags:[{label:"Medium",permalink:"/leetcode/others/tags/medium"},{label:"KMP",permalink:"/leetcode/others/tags/kmp"},{label:"heap",permalink:"/leetcode/others/tags/heap"}],version:"current",frontMatter:{tags:["Medium","KMP","heap"]},sidebar:"tutorialSidebar",previous:{title:"High Five",permalink:"/leetcode/others/Heap/High Five"},next:{title:"Minimum Operations to Exceed Threshold Value II",permalink:"/leetcode/others/Heap/Minimum Operations to Exceed Threshold Value II"}},m={},u=[];function p(e){const t={a:"a",code:"code",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:(0,a.jsx)(t.a,{href:"https://leetcode.com/problems/max-sum-of-a-pair-with-equal-sum-of-digits",children:"https://leetcode.com/problems/max-sum-of-a-pair-with-equal-sum-of-digits"})}),"\n",(0,a.jsxs)(t.p,{children:["math -> how to get sum digits using mod and //\r\nheap simulate -> always keep ",(0,a.jsx)(t.code,{children:"heap size <= 2"})]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:"class Solution:\r\n    def maximumSum(self, nums: List[int]) -> int:\r\n        sum_digits_map = defaultdict(list)\r\n        def findSumDigits(num): #O(d), where d is the number of digits\r\n            sum_digits = 0\r\n            while num > 0:\r\n                sum_digits += (num % 10)\r\n                num //= 10\r\n            return sum_digits\r\n        for num in nums:\r\n            key = findSumDigits(num)\r\n            heapq.heappush(sum_digits_map[key], num)\r\n            if len(sum_digits_map[key]) > 2: #O(1) heap operations due to keeping the size at 2 max\r\n                heapq.heappop(sum_digits_map[key])\r\n        \r\n        curr_max = -1\r\n        for heap in sum_digits_map.values():\r\n            if len(heap) >= 2:\r\n                temp = heapq.heappop(heap) + heapq.heappop(heap)\r\n                curr_max = max(curr_max, temp)\r\n        return curr_max\r\n\r\n# Time Complexity: O(Nd)\r\n# Space Complexity: O(81) 81 possible keys, each heap size kept at max 2 so arguably constant\n"})}),"\n",(0,a.jsx)(t.p,{children:"KMP solution"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:"\r\n# Time Complexity: O()\r\n# Space Complexity: O()\n"})})]})}function l(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},8453:(e,t,i)=>{i.d(t,{R:()=>r,x:()=>o});var a=i(6540);const n={},s=a.createContext(n);function r(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);