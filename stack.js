/* Stack */

//! Functions: push, pop, peek, length

//* An array is a great way to simulate a stack...
function arrayAsAStackPalindromesCheck() {
  let letters = []; // This is our stack
  
  let word = "racecar";
  
  let rword = "";
  
  // Put the letters of word into a stack
  for (let i = 0; i < word.length; i++) {
    letters.push(word[i]);
  }
  
  // Pop off the stack in reverse order
  for (let i = 0; i < word.length; i++) {
    rword += letters.pop();
  }
  
  if (rword == word) {
    console.log(word + " is a palindrome");
  } else {
    console.log(word + " is not a palindrome");
  }
}

//* ... but is possible to hardcode it
function realStackPalindromesCheck() {
  
  const Stack = () => {
    
    this.count = 0;
    this.storage = {};
    
    // Add a value onto the end of the stack
    this.push = (value) => {
      this.storage[this.count] = value;
      this.count++;
    }
    
    // Remove and return the value at the end of the stack
    this.pop = () => {
      if (this.count === 0) return undefined;
      this.count--;
      const result = this.storage[this.count];
      delete this.storage[this.count];
      return result;
    }
    
    // Return the size of the stack
    this.size = () => this.count;
    
    // Return the value at the end of the stack
    this.peek = () => this.storage[this.count-1];
  }
  
}