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

  ObjectArray.prototype.move = function(index,indexTo,pid,after){
    index = typeof index === 'string' ? this.search(index,pid) : index;
    if(index<0){index = this.length + index;}
    if(Math.floor(index) !== parseFloat(index,10) || index<0 || index>=this.length){
      return false;
    }
    //console.log('indexTo:',indexTo);
    indexTo = typeof indexTo === 'string' ? this.search(indexTo,pid) : indexTo;
    //console.log('indexTo:',indexTo);
    if(indexTo<0){indexTo = this.length + indexTo;}
    indexTo += after ? 1 : 0;
    //console.log('indexTo:',indexTo);
    //console.log(Math.floor(indexTo) !== parseFloat(indexTo,10) || indexTo<0 || indexTo>this.length);
    if(Math.floor(indexTo) !== parseFloat(indexTo,10) || indexTo<0 || indexTo>this.length){
      return false;
    }
    
    if(index == indexTo || index==indexTo-1){
      return true;
    }
    var copy = this[index];
    this.splice(indexTo, 0, copy);
    this.splice(index > indexTo ? index+1 : index, 1);
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
