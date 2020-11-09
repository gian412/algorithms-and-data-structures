/* Queue */

//* An array is a great way to simulate a queue...
function Queue() {
  
  let collection = [];
  
  // 'print' will console.log the queue
  this.print = () => console.log(collection);
  
  // 'enqueue' will add an element on top of the queue
  this.enqueue = element => collection.push(element);
  
  // 'dequeue' will remove an element from the bottom of the queue
  this.dequeue = () => collection.shift();
  
  // 'front' will return the first element of the queue (the next to be dequeued)
  this.front = () => collection[0];
  
  // 'size' will return the size of the queue
  this.size = () => collection.length;
  
  // 'isEmpty will return true if the queue is empty, false otherwise
  this.isEmpty = () => (collection.length === 0);
  
}