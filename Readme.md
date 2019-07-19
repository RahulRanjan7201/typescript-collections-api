The Project uses Generics. 
Included Data Structure 
Queue and others ds are coming soon ...
This includes many function to manipulate array 
npm i typescript-collections-api --save 
const  {Queue} = require('typescript-collections-api');

eg: 
const  {Queue} = require('typescript-collections-api');
let queue = new Queue();
queue.enqueue(4)
queue.enqueue('B')
console.log(queue._store);// To know the elements in queue 
console.log(queue._store.length)// To know the length of the queue
console.log(queue.dequeue()); // To Removing the first element

About Queue Data Structure 
A Queue is is FIFO DS with a time omplexity of O(1) for key operations. We can easily model this in TypeScript using a generic class for items of type T.

Operation 
1. enqueue
2. dequeue
3. isEmpty 
4. getLength
5. peek

