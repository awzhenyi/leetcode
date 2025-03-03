"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7791],{7857:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=t(4848),i=t(8453);const o={tags:["Medium"]},l=void 0,s={id:"Dynamic Programming/Best TIme To Buy and Sell Stock With Cooldown",title:"Best TIme To Buy and Sell Stock With Cooldown",description:"https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/",source:"@site/neetcode150/Dynamic Programming/Best TIme To Buy and Sell Stock With Cooldown.md",sourceDirName:"Dynamic Programming",slug:"/Dynamic Programming/Best TIme To Buy and Sell Stock With Cooldown",permalink:"/leetcode/neetcode150/Dynamic Programming/Best TIme To Buy and Sell Stock With Cooldown",draft:!1,unlisted:!1,tags:[{label:"Medium",permalink:"/leetcode/neetcode150/tags/medium"}],version:"current",frontMatter:{tags:["Medium"]},sidebar:"tutorialSidebar",previous:{title:"Time Based Key Value Store",permalink:"/leetcode/neetcode150/Binary Search/Time Based Key Value Store"},next:{title:"Climbing Stairs",permalink:"/leetcode/neetcode150/Dynamic Programming/Climbing Stairs"}},a={},c=[];function d(e){const n={a:"a",code:"code",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/",children:"https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"class Solution:\r\n    def maxProfit(self, prices: List[int]) -> int:  \r\n        n = len(prices)\r\n        buy_dp = [0] * n #max profit at day i where the action is buy\r\n        sell_dp = [0] * n #max profit at day i where the action is sell\r\n        buy_dp[0] = -prices[0]\r\n        for i in range(1, n):\r\n            buy_dp[i] = max(buy_dp[i-1], sell_dp[i-2] - prices[i])\r\n            sell_dp[i] = max(sell_dp[i-1], buy_dp[i-1] + prices[i])\r\n\r\n        return sell_dp[n-1] #This would be the max profit after n days\r\n# Time Complexity: O(N)\r\n# Space Complexity: O(N)\n"})}),"\n",(0,r.jsx)(n.p,{children:"Space Optimization to O(1), only tracking variables. observation: in the above solution u realized that u only need variables buy_dp[i-1], sell_dp[i-2] and buy_dp[i-1]"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"class Solution:\r\n    def maxProfit(self, prices: List[int]) -> int:  \r\n        n = len(prices)\r\n        buy_prev = -prices[0] #buy_dp[i-1] \r\n        sell_prev = 0 #sell_dp[i-1]\r\n        sell_prev2 = 0 #sell_dp[i-2]\r\n        for i in range(1, n):\r\n            buy_curr = max(buy_prev, sell_prev2 - prices[i])\r\n            sell_curr = max(sell_prev, buy_prev + prices[i])\r\n\r\n            #update\r\n            buy_prev = buy_curr\r\n            sell_prev2 = sell_prev\r\n            sell_prev = sell_curr\r\n        \r\n        return sell_prev #This would be the max profit after n days\r\n# Time Complexity: O(N)\r\n# Space Complexity: O(1)\n"})})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>s});var r=t(6540);const i={},o=r.createContext(i);function l(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);