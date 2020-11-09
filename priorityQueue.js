/* Priority Queue */

//! Same as the queue, except for the enqueue method. If the priority queue is empty, add the
//! element, otherwise add the element in a determinated position based on his priority.
//! The elements must be arrays whit a number standing for the priority as second element. 

function PriorityQueue() {
  
  let collection = [];
  
  // 'print' will console.log the queue
  this.print = () => console.log(collection);
  
  // 'enqueue' will add an element on top of the queue
  this.enqueue = element => {
    if (this.isEmpty()) {
      collection.push(element);
    } else {
      let added = false;
      for (let i = 0; i < collection.length; i++) {
        if (element[1] < collection[i][1]) { //! Checking priority
          collection.splice(i, 0, element);
          added = true;
          break;
        }
      }
      if (!added) collection.push(element);
    }
  };
  
  // 'dequeueWithPriority' will remove an element from the bottom of the queue and return it with the priority
  this.dequeueWithPriority = () => collection.shift();
  
  // 'dequeue' will remove an element from the bottom of the queue and return it without the priority
  this.dequeue = () => {
    const value = collection.shift();
    return value[0];
  };
  
  // 'front' will return the first element of the queue (the next to be dequeued)
  this.front = () => collection[0];
  
  // 'size' will return the size of the queue
  this.size = () => collection.length;
  
  // 'isEmpty will return true if the queue is empty, false otherwise
  this.isEmpty = () => (collection.length === 0);
  
}