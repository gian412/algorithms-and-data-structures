/* Sets */

// Similar to an array but there is no repetition and the elements aren't in any particular order

function MySet() {
  
  // The let collection will hold the set
  let collection;
  
  // 'has' will check for the presence of an element and return true or false
  this.has = element => (collection.indexOf(element) !== -1);
  
  // 'values' will return all the elements of the set
  this.values = () => collection;
  
  // 'add' will add an element to the set
  this.add = (element) => {
    if (!this.has(element)) {
      collection.push(element);
      return true;
    }
    return false;
  };
  
  // 'remove' will remove an element from the set
  this.remove = (element) => {
    if (this.has(element)) {
      const index = collection.indexOf(element);
      collection.splice(index, 1);
      return true;
    }
    return false;
  };
  
  // 'size' will return the size of the set
  this.size = () => collection.length;
  
  // 'union' will return the union of two sets
  this.union = (otherSet) => {
    let unionSet = new MySet();
    const firstSet = this.values();
    const secondSet = otherSet.values();
    firstSet.forEach(e => unionSet.add(e));
    secondSet.forEach(e => unionSet.add(e));
    return unionSet;
  };
  
  // 'intersection' will return the intersection of two sets as a new set
  this.intersection = (otherSet) => {
    let intersectionSet = new MySet();
    const firstSet = this.values();
    firstSet.forEach((e) => {
      if (otherSet.has(e)) intersectionSet.add(e);
    });
    return intersectionSet;
  };
  
  // 'difference' will return the differences of two sets as a new sets
  this.difference = (otherSet) => {
    let differenceSet = new MySet();
    const firstSet = this.values();
    firstSet.forEach((e) => {
      if (!otherSet.has(e)) differenceSet.add(e)
    });
    return differenceSet;
  };
  
  // 'subset' will test if the set is a subset of a different set
  this.subset = (otehrSet) => {
    const firstSet = this.values();
    return firstSet.every(value => otherSet.has(value));
  };
}