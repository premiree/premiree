const fs = require('fs');
const [a,b] = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

const [N,K] = a.split(' ').map(v=>+v);
const target = b.split(' ').map(v=>+v)

class Node{
    constructor(item){
      this.item = item;
      this.prev = null;
      this.next = null;
    }
  }
  
  class Deque{
    constructor(){
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
  
    push_front(item){
      const node = new Node(item);
     if(this.size()==0){
       this.head = node;
       this.tail = node;
     }else{
      this.head.prev = node;
      node.next=this.head;
      this.head = node;
     }
      this.length+=1; 
    }
  
  
    push_back(item){
      const node = new Node(item)
      if(this.size()==0){
        this.head = node;
        this.tail = node;
      }else{
        this.tail.next = node;
        node.prev = this.tail;
        this.tail = node; 
      }
      this.length +=1;
    }
  
    pop_front(){
      if(this.size()==0) return -1;
      const popItem = this.head;
      this.head = this.head.next;
      if(this.size()==1){
          this.head = null;
      }else{
          this.head.prev = null;
      }
      this.length -=1;
      return popItem.item;
    }
  
    pop_back(){
      if(this.size()==0) return -1;
      const popItem = this.tail;
      this.tail = this.tail.prev;
      if(this.size()==1){
          this.tail = null;
      }else{
          this.tail.next = null;
      }
      this.length -=1;
      return popItem.item;
    }
  
  
    size(){
      return this.length;
    }
  
    empty(){
      if(this.length==0){
        return 1;
      }else{
        return 0;
      }
    }
  
    front(){
      if(this.empty()==1) return -1;
      return this.head.item; 
    }
  
    back(){
      if(this.empty()==1) return -1;
      return this.tail.item; 
    }
  }

  let answer = 0;
  let deque = new Deque(); 

for(let i = 1; i<=N; i++){
    deque.push_back(i);
}

let position = [];
for(let i = 0; i<K; i++){
    position.push(target[i])
}

while(position.length>0){
    if(position[0]==1){
        position = position.map(v=>v-1);
        deque.pop_front();
        position.shift();
    }else if(position[0]==deque.size()){
        answer++;
        deque.pop_front();
        position.shift();
    }else{
        if(deque.size()+1>=2*position[0]){
            position = position.map(v=>{
                if(v==1){
                 return   v=deque.size();
                }    
                return v-1; 
            });
            
            deque.push_back(deque.pop_front());
            
        }else{
            position = position.map(v=>{
                if(v==deque.size()){
                 return   v=1;
                }    
                return v+1; 
            });
            deque.push_front(deque.pop_back());
        }
        answer++;
    }
}
console.log(answer)