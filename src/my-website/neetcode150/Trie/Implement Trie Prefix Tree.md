---
tags:
 - Medium
---

```python
class TrieNode:
    def __init__(self):
        self.doesWordExist = False
        self.children = {} #consists of more trie nodes

class Trie:

    def __init__(self):
        self.root = TrieNode()

    def insert(self, word: str) -> None:
        curr = self.root
        for c in word:
            if c not in curr.children.keys():
                curr.children[c] = TrieNode()
            curr = curr.children[c]
        curr.doesWordExist = True

    def search(self, word: str) -> bool:
        curr = self.root
        for c in word:
            if c not in curr.children.keys():
                return False
            curr = curr.children[c]
        return curr.doesWordExist

    def startsWith(self, prefix: str) -> bool:
        curr = self.root
        for c in prefix:
            if c not in curr.children.keys():
                return False
            curr = curr.children[c]
        return True


# Your Trie object will be instantiated and called as such:
# obj = Trie()
# obj.insert(word)
# param_2 = obj.search(word)
# param_3 = obj.startsWith(prefix)

# Time Complexity: O(N) for insert and search
# Space Complexity: O(N) for insert, O(1) for search
```


```java

class TrieNode {
    private boolean doesWordExist;
    private Map<Character, TrieNode> children;
    
    public TrieNode() {
        this.children = new HashMap<>();
    }
    
    public Map<Character, TrieNode> getChildren() {
        return this.children;
    }

    public boolean getWordExist() {
        return doesWordExist;
    }

    public void setWordExist(boolean val) {
        this.doesWordExist = val;
    }
}

class Trie {
    private TrieNode root;
    public Trie() {
        this.root = new TrieNode();
    }
    
    public void insert(String word) {
        TrieNode curr = root;
        for (char c : word.toCharArray()) {
            curr = curr.getChildren().computeIfAbsent(c, v->new TrieNode()); 
        }
        curr.setWordExist(true);
    }
    
    public boolean search(String word) {
        TrieNode curr = root;
        for (char c : word.toCharArray()) {
            if (!curr.getChildren().containsKey(c)) {
                return false;
            }
            curr = curr.getChildren().get(c);
        }
        return curr.getWordExist();
    }
    
    public boolean startsWith(String prefix) {
        TrieNode curr = root;
        for (char c : prefix.toCharArray()) {
            if (!curr.getChildren().containsKey(c)) {
                return false;
            }
            curr = curr.getChildren().get(c);
        }
        return true;
    }
}

/**
 * Your Trie object will be instantiated and called as such:
 * Trie obj = new Trie();
 * obj.insert(word);
 * boolean param_2 = obj.search(word);
 * boolean param_3 = obj.startsWith(prefix);
 */
```