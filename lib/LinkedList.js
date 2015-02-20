var Node = require('./Node.js');
module.exports = LinkedList;

/**
 * A collection of Node objects.
 * @property {Node} head – The first Node object, defaults to `null`.
 * @property {Number} length - The length of the LinkedList, defaults to 0.
 */
function LinkedList () {
  this.head = null;
  this.length = 0;  
}

/**
 * Appends the Node object to the end of the linked list.
 * @param  {[type]} node [description]
 * @throws {TypeError} – Should only accept other Node objects.
 * @return {[type]}      [description]
 */
LinkedList.prototype.add = function (node) {
  if(!(node instanceof Node)) {
    throw new Error();
  } else {
    if(this.head === null) {
      this.head = node;
      this.length = 1;
      this.tail = node;
    } else {
      var currentNode = this.head;
      while(currentNode.next) {
        currentNode = currentNode.next;
      }
      this.length++;
      node.next = null;
      currentNode.next = node;
      this.tail = currentNode.next;
    }
  }
  return this;
}



/**
 * Returns the n-th Node at the provided index.
 * @param  {Number} index – The index of the Node object.
 * @return {Node}       The Node object.
 */
LinkedList.prototype.get = function (index) {
  if(index === 0) {
    return this.head;
  }
  if(this.head === null) {
    return null;
  }
  this.head.next;
  return this.head.next;
};

/**
 * Removes the n-th Node at the provided index.
 * @param  {Number} index – The index of the Node object.
 */
LinkedList.prototype.remove = function (index) {
  // if(this.head != null) {
  //   this.head = this.head.next;
  //   node.next = null;
  //   return value;
  // }
  // currentNode = this.head;
  // while(currentNode.next) {
  //   if(currentNode.next === node) {
  //     currentNode.next = node.next;
  //     return value;
  //   }
  //   currentNode = currentNode.next;
  // }
  // go through list till you get to the nth index
  if(this.length < 1 || this.head === null || index > this.length) {
    return null;
  }

  var currentNode = this.head;
  var previousNode;
  for(var currentIndex = 0; currentIndex < index; currentIndex++) {
    previousNode = currentNode;
    currentNode = currentNode.getNext();
  }
  if(currentNode === this.head) {
    this.head = currentNode.getNext();
  }
  previousNode.setNext(currentNode.getNext());
  this.length--;
  return currentNode;
};