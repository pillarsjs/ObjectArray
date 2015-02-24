/* jslint node: true */
"use strict";

module.exports = ObjectArray;
function ObjectArray(){
  var args = Array.prototype.slice.call(arguments);
  this.splice.apply(this,[0,0].concat(args));
  this.pid = 'id';
}
  ObjectArray.prototype = [];
  ObjectArray.prototype.constructor = Array;

  ObjectArray.prototype.insert = function(element,index,pid,after){
    index = typeof index === 'string' ? this.search(index,pid) : index;
    if(index<0){index = this.length + index;}
    index += after ? 1 : 0;
    if(Math.floor(index) !== parseFloat(index,10) || index<0 || index>this.length){
      this.push(element);
    } else {
      this.splice(index,0,element);
    }
    return this;
  };

  ObjectArray.prototype.insertAfter = function(element,index,pid){
    return this.insert(element,index,pid,true);
  };

  ObjectArray.prototype.add = ObjectArray.prototype.insert;

  ObjectArray.prototype.addAfter = ObjectArray.prototype.insertAfter;

  ObjectArray.prototype.get = function(index,pid){
    index = typeof index === 'string' ? this.search(index,pid) : index;
    if(index<0){index = this.length + index;}
    if(Math.floor(index) !== parseFloat(index,10) || index<0 || index>this.length){
      return;
    } else {
      return this[index];
    }
  };

  ObjectArray.prototype.search = function(index,pid){
    pid = pid || this.pid || 'id';
    for(var i=0,l=this.length;i<l;i++){
      if(this[i][pid] === index){
        return i;
      }
    }
  };

  ObjectArray.prototype.move = function(from,index,pid,after){
    from = typeof from === 'string' ? this.search(from,pid) : from;
    if(from<0){from = this.length + from;}
    if(Math.floor(from) !== parseFloat(from,10) || from<0 || from>=this.length){
      return false;
    }
    index = typeof index === 'string' ? this.search(index,pid) : index;
    if(index<0){index = this.length + index;}
    index += after ? 1 : 0;
    if(Math.floor(index) !== parseFloat(index,10) || index<0 || index>this.length){
      return false;
    }
    
    if(from == index || from==index-1){
      return true;
    }
    var copy = this[from];
    this.splice(index, 0, copy);
    this.splice(from > index ? from+1 : from, 1);
    return true;
  };

  ObjectArray.prototype.moveAfter = function(index,indexTo,pid){
    return this.move(index,indexTo,pid,true);
  };

  ObjectArray.prototype.remove = function(index,pid){
    index = typeof index === 'string' ? this.search(index,pid) : index;
    if(index<0){index = this.length + index;}
    if(Math.floor(index) !== parseFloat(index,10) || index<0 || index>=this.length){
      return false;
    }
    this.splice(index, 1);
    return true;
  };

  ObjectArray.prototype.keys = function(pid,all){
    pid = pid || this.pid || 'id';
    var keys = [];
    for(var i=0,l=this.length;i<l;i++){
      if(all || this[i][pid] !== undefined){
        keys.push(this[i][pid]);
      }
    }
    return keys;
  };