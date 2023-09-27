/**
 * @param {number} capacity
 */
var LFUCache = function(capacity) {

    this.map = new Map();
    this.head = null;
    this.capacity=capacity;
    this.size=0;
};

/** 
 * @param {number} key
 * @return {number}
 */
LFUCache.prototype.get = function(key) {
    if(this.capacity==0)return -1;
    if(this.map.has(key))
    {
        //console.log("GET "+key)
        mark( key, this)
        return this.map.get(key).val;
    }
    return -1;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LFUCache.prototype.put = function(key, value) {
    if(this.capacity==0)return
    //console.log("PUT "+key)
    if(this.map.has(key)){
        this.map.get(key).val = value;
        this.map.get(key).freq++;
        mark(key, this)
    }
    else {
        if(this.size == this.capacity){
            let val = this.head.key;
            detach(this.head, this)
            this.map.delete(val)
         }
        let node = new Node(null, null, value, key)
        this.map.set(key, node)
        if(this.head){
            let p = findLastOfFreq( node.freq, this.head, this)
             insertAfter(p, node, this)
        }
        else {
            this.head = node;
            this.size++;
        }

    }    
 
};

/** 
 * Your LFUCache object will be instantiated and called as such:
 * var obj = new LFUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */


function mark (key, cache) {
    let node = cache.map.get(key);
    node.freq++;
    detach(node, cache)
    let ip = findLastOfFreq(node.freq, cache.head, cache) 
    insertAfter(ip, node, cache)
}
function findLastOfFreq(freq, head, cache){
    let p = head;
    let prev=null;
    while(p && p.freq <= freq) {
        prev = p;
        p = p.next;
    }
    return prev 
}
function detach(node, cache){
    let prev = node.prev;
    let next = node.next;
     
    if(node==cache.head){
        if(next){
            cache.head  = next;
            next.prev = null;
        }
        else cache.head = null;
     }
    else {
        if(prev) prev.next = next;
        if(next) next.prev = prev;
    }
    node.next=null;
    node.prev=null;
    cache.size--;

}
function insertAfter(p, node, cache){
    if(p) {
        let next = p.next
        if(p)p.next = node;
        node.prev=p;
        
        if(next)next.prev = node;
        node.next = next
    }
    else{
        if(!cache.head)
            cache.head = node;
        else{
            let head = cache.head;
            cache.head = node;
            node.next = head;
            head.prev = node
        }    
        
    }
    cache.size++;
}
class Node{
    val;
    next;
    prev;
    constructor(next, prev, val, key ){
        this.next = next;
        this.prev= prev;
        this.val = val;
        this.key = key;
        this.freq = 1;    
    }
}