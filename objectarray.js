/* jslint node: true */
"use strict";

module.exports = ObjectArray;
function ObjectArray(){
  var args = Array.prototype.slice.call(arguments);
  this.splice.apply(this,[0,0].concat(args));
}
ObjectArray.prototype = [];
ObjectArray.prototype.constructor = ObjectArray;

ObjectArray.prototype.insert = function(element,index,pid){
  if(typeof index === 'string'){index = this.search(index,pid);}
  if(Math.floor(index) === parseFloat(index,10) && index>=0 && index<=this.length){
    this.splice(index,0,element);
  } else {
    this.push(element);
  }
  return this;
};
ObjectArray.prototype.insertAfter = function(element,index,pid){
  if(typeof index === 'string'){index = this.search(index,pid);}
  index++;
  if(Math.floor(index) === parseFloat(index,10) && index>=0 && index<=this.length){
    this.splice(index,0,element);
  } else {
    this.push(element);
  }
  return this;
};
ObjectArray.prototype.get = function(index,pid){
  if(typeof index === 'string'){index = this.search(index,pid);}
  if(Math.floor(index) === parseFloat(index,10) && index>=0 && index<=this.length){
    return this[index];
  }
};
ObjectArray.prototype.search = function(index,pid){
  pid = pid || 'id';
  for(var i=0,l=this.length;i<l;i++){
    if(this[i][pid] === index){
      return i;
    }
  }
};
ObjectArray.prototype.move = function(index,indexTo,pid){
  if(typeof index === 'string'){index = this.search(index,pid);}
  if(!(Math.floor(index) === parseFloat(index,10) && index>=0 && index<=this.length)){
    return;
  }
  var copy = this[index];
  if(typeof indexTo === 'string'){indexTo = this.search(indexTo,pid);}
  if(Math.floor(indexTo) === parseFloat(indexTo,10) && indexTo>=0 && indexTo<=this.length && index != indexTo){
    this.splice(indexTo, 0, copy);
    this.splice(index, 1);
  } else {
    this.push(copy);
    this.splice(index, 1);
  }
  return true;
};
ObjectArray.prototype.moveAfter = function(index,indexTo,pid){
  if(typeof index === 'string'){index = this.search(index,pid);}
  if(!(Math.floor(index) === parseFloat(index,10) && index>=0 && index<=this.length)){
    return;
  }
  var copy = this[index];
  if(typeof indexTo === 'string'){indexTo = this.search(indexTo,pid);}
  if(Math.floor(indexTo) === parseFloat(indexTo,10) && indexTo>=0 && indexTo<=this.length && index != indexTo){
    indexTo++;
    this.splice(indexTo, 0, copy);
    this.splice(index, 1);
  } else {
    this.push(copy);
    this.splice(index, 1);
  }
  return true;
};
ObjectArray.prototype.remove = function(index,pid){
  if(typeof index === 'string'){index = this.search(index,pid);}
  if(Math.floor(index) === parseFloat(index,10) && index>=0 && index<=this.length){
    this.splice(index, 1);
    return true;
  } else {
    return undefined;
  }
};

/* ---------------------------- *

var oa = new ObjectArray(
    {id:'a',something:'a...'},
    {id:'c',something:'c...'}
);

console.log(typeof oa);
console.log(oa.constructor.name);
console.log(oa);
console.log(oa.insert({id:'-',something:'-...'},0));
console.log(oa.insertAfter({id:'b',something:'b...'},'a'));
console.log(JSON.stringify(oa));
console.log(oa.get('b'));
console.log(oa.search('c'));
console.log(oa.remove('c'));
console.log(JSON.stringify(oa));
console.log(oa.moveAfter('-','b'));
console.log(JSON.stringify(oa));

/* ---------------------------- */