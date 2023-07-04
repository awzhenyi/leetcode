# https://leetcode.com/problems/find-the-original-array-of-prefix-xor/


'''
Find arr, given pref = List[int], where pref[i] = arr[0] ^ arr[1] ^ ... ^ arr[i]
eg. pref[0] = 6, arr[0] = 6
    pref[1] = 3, 6 ^ (?) = 3
    since if a ^ b = c => a ^ c = b 
    therefore a ^ (?) = c, find (?) => a ^ b
'''


class Solution:
    def findArray(self, pref: List[int]) -> List[int]:
        ans = [pref[0]]
        for idx in range(1, len(pref)):
            ans.append(pref[idx] ^ pref[idx-1])

        return ans

    # Space optimized, compute from the back
    def findArray(self, pref: List[int]) -> List[int]:
        for idx in range(len(pref) - 1, 0, -1):
            pref[idx] = pref[idx] ^ pref[idx-1]

        return pref
