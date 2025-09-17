---
tags:
 - Medium
---

https://leetcode.com/problems/encode-and-decode-strings/

1. Given constraint of all possible characters, not only limited to ASCII characters, we use escaping as solution
2. Choose a delimiter like '/:'
3. escape all '/' with another '/'
4. if we see '//', it is escaped, if we see '/:', it is our delimiter

```python
class Codec:
    def encode(self, strs: List[str]) -> str:
        """Encodes a list of strings to a single string.
        """
        encoded_string = ''
        for s in strs:
            #escape + add our chosen delimiter /:
            encoded_string += s.replace('/', '//') + '/:'
            
        return encoded_string

    def decode(self, s: str) -> List[str]:
        """Decodes a single string to a list of strings.
        """
        decoded_string = []
        
        current_string = ""
        i = 0
        while i < len(s):
            if s[i:i+2] == '/:':
                decoded_string.append(current_string)
                current_string = ""
                i += 2
            elif s[i:i+2] == '//':
                current_string += '/'
                i += 2
            else:
                current_string += s[i]
                i += 1
        
        return decoded_string
        


# Your Codec object will be instantiated and called as such:
# codec = Codec()
# codec.decode(codec.encode(strs))

# Time Complexity: O(N)
# Space Complexity: O(N)
```