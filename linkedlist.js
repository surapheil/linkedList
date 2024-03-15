class Node{
    constructor(val,next=null){
        this.val = val;
        this.next = next;
    }
}

class linkedList{
    constructor(){
        this.head = null
    }
//append the first node
    appendFirst = (value)=>{
    if (!this.head) {
            this.head = new Node(value);
    }else{
        let newNode=new Node(value);
        newNode.next = this.head;
        this.head = newNode;
    }
    return this.head;
  }

  //append the last node
    appendLast=(item)=>{
        if(!this.head){
            this.head = new Node(item);
            return this.head;
        }
        let tem = this.head;
        while(tem.next != null){
            tem = tem.next;
        }
        tem.next = new Node(item);
        return this.head;
        
    }
//finding the size of the node
    Size = () => {
        let count = 0;
        let tmp= this.head
        while(tmp){
            tmp = tmp.next
            count++
        }
        return count

    }

  //finding the first node
  firstNode = () =>{
    return this.head
  } 
    

   // returning the last node
    lastnode = () =>{
        let tmpo = this.head;
        while(tmpo.next){
            tmpo = tmpo.next
        }
        return tmpo;
    }

    //finding the node at index n
    findNth = (n) => {
        if (n < 1) return null;
        let ctr = 0;
        let cur = this.head;
        while(cur && cur < n){
            cur = cur.next;
            ctr++
        }

        return cur;

    }

    //pop the last node form the list

    pop = () =>{
        //if the list is empty list
        if(!this.head){
            return;
        }
        // if we only have one node
        if (!this.head.next){
            this.head = null;
            return;
        }
        let current = this.head;
        while(current.next.next){
            current = current.next;
        }
        current.next = null;
        
    }

   //check if the value is in the list or not 
   contains = (val) => {
    let current = this.head;
    if (!current){
        return false;
    }
    while(current){
        if (current.value == val){
            return true;
        }
        current = current.next;
    }
    return false

   }  

   //find the value and return the index of the node
   find = (value) => {
        let ctr = 0;
        let cur= this.head;
        while(cur){
            if (cur.val == value){
                return ctr;
            }
            cur = cur.next
            ctr++;
        }
        return -1;
}
    
//converting the linked list values to string 
toString = ()=>{
    let str = ""
    let cur = this.head
    while(cur){
        str += `(${cur.val})->`;
        cur = cur.next;
    }
    str += 'null'
    return str;
}


//insert at specified place aspecified value
insertAtIndex = (index, value) => {
    let cur = this.head;
    let ctr = 0;
    if (index < 0) return;
    if (index == 0){
        value.next = this.head;
        this.head = value;
        return;
    } 
    while(cur){
        if (ctr + 1 === index || (ctr == index && cur.next == null)){
            tmp = cur.next;
            cur.next = value;
            value.next = tmp;
            return
        }
        cur = cur.next;
        ctr ++;
    }
}

//remove the node at the given index from the linkedlist
deleteAtIndex = (ind)=>{
    //check for invalid index
if(ind < 0) return;
//if we have only single node
if(ind == 0){
    if(!this.head.next){
     return this.head=null;
    }
    this.head = this.head.next;
    return;
}
//if we don't have ahead
if (!this.head) return;
let cur = this.head;
let ctr = 0
while (cur){
    if(ctr + 1 === ind){
        if (!cur.next.next){
            return cur.next = null;
        }
        cur.next = cur.next.next;
        return
    }
    cur = cur.next;
    ctr++;
}
}
}