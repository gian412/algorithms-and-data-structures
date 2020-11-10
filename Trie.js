/* Trie Data Structure */
// Also calles Prefix Tree

const MyNode = () => {
  
  this.key = new Map();
  this._end = false;
  
  this.setEnd = () => {
    this._end = true;
  };
  
  this.isEnd = () => this._end;
  
};

const Trie = () => {
  this.root = new MyNode();
  
  // Add a word to the Trie
  this.add = (input, node = this.root) => {
    
    if (input.length == 0) {
      node.setEnd();
      return;
    } else if (!node.keys.has(input[0])) {
      node.keys.set(input[0], new MyNode());
      return this.add(input.substr(1), node.keys.get(input[0]));
    } else {
      return this.add(input.substr(1), node.keys.get(input[0]));
    }
  };
  
  // Check if the word is already in the Trie
  this.isWord = word => {
    
    let node = this.root;
    
    while (word.length > 1) {
      if (!node.keys.has(word[0])) return false;
      
      node = node.keys.get(word[0]);
      word = word.substr(1);
    }
    return (node.key.has(word) && node.keys.get(word).isEnd())
  };
  
  // Helper function wich print all the words in the Trie
  this.print = () => {
    let words = [];
    
    const search = (node, string) => {
      if (node.keys.size != 0) {
        for (let letter of node.keys.keys()) {
          search(node.keys.get(letter), string.concat(letter));
        }
        
        if (node.isEnd()) words.push(string);
        
      } else {
        if (string.length > 0) words.push(string);
        return;
      }
    };
    search(this.root, new String());
    return words.length > 0 ? words : null;
  };
}