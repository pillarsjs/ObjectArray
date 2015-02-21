var test = require('unit.js');
var ObjectArray = require("../index.js");

describe("ObjectArray -----",function(){ 
  describe("Creation",function(){ 
    it("With no parameters",function(){     
      var oa = new ObjectArray();
      test
        .value(oa)
          .isType("object")

     })
     it("With parameters",function(){
      var oa = new ObjectArray(
        {id:'a',something:'a...'});

      var oa2 = new ObjectArray(
        {id:'a',something:'a...'},
        {id:'b',something:'b...'});

      test
        .value(oa)
          .isType("object")
        .value(oa2)
          .isType("object")
        .value(oa[0])
          .is({id:'a',something:'a...'})
        .value(oa2[0])
          .is({id:'a',something:'a...'})
        .value(oa2[1])
          .is({id:'b',something:'b...'})
    })
  })

  describe("Insert (element [, index, pid])",function(){ 
    it("Only element without index, pid",function(){     
      var oa = new ObjectArray(
        {id:'OB-1',something:'ob-1...'},
        {id:'OB-2',something:'ob-2...'});

      test
        .value(oa.insert({'id': 'OB-3', 'something' : 'ob-3...'}))
          .isType("object")
        .value(oa)
          .isType("object")
        .value(oa[0])
          .is({id:'OB-1',something:'ob-1...'})
        .value(oa[1])
          .is({id:'OB-2',something:'ob-2...'})
        .value(oa[2])
          .is({'id': 'OB-3', 'something' : 'ob-3...'})

      test
        .value(oa.insert({'id': 'OB-4', 'something' : 'ob-4...'}))
          .isType("object")
        .value(oa)
          .isType("object")
        .value(oa[0])
          .is({id:'OB-1',something:'ob-1...'})
        .value(oa[1])
          .is({id:'OB-2',something:'ob-2...'})
        .value(oa[2])
          .is({'id': 'OB-3', 'something' : 'ob-3...'})
        .value(oa[3])
          .is({'id': 'OB-4', 'something' : 'ob-4...'})
      for(i=1;i<=10;i++){
        oa.insert({'id': 'OB-5', 'something' : 'ob-5...'});
      }
      test
        .value(oa.length)
          .is(14)

      for(i=6;i<=105;i++){
        oa.insert({'id': 'OB-'+i, 'something' : 'ob-'+i+'...'});
      }
      test
        .value(oa.length)
          .is(114)


    })

    it("Only element with void object and no existing index",function(){     
      var oa = new ObjectArray();

      test
        .value( oa.insert({'id': 'OB-3', 'something' : 'ob-3...'},4))
          .isType("object")
        .value(oa[0])
          .is({'id': 'OB-3', 'something' : 'ob-3...'})

      var oa = new ObjectArray();

      test
        .value(oa.insert({'id': 'OB-3', 'something' : 'ob-3...'},-1))
          .isType("object")
        .value(oa[0])
          .is({'id': 'OB-3', 'something' : 'ob-3...'})

      var oa = new ObjectArray();
  
      test
        .value(oa.insert({'id': 'OB-3', 'something' : 'ob-3...'},'OBBB'))
          .isType("object")
        .value(oa[0])
          .is({'id': 'OB-3', 'something' : 'ob-3...'})

    })

    it("With no existing pid",function(){     
      var oa = new ObjectArray();
      oa.insert({'id': 'OB-3', 'something' : 'ob-3...'},4,'XXX');
      test
        .value(oa[0])
          .is({'id': 'OB-3', 'something' : 'ob-3...'})

      var oa = new ObjectArray();
      oa.insert({'id': 'OB-3', 'something' : 'ob-3...'},-1,'YYY');
      test
        .value(oa[0])
          .is({'id': 'OB-3', 'something' : 'ob-3...'})

      var oa = new ObjectArray();
      oa.insert({'id': 'OB-3', 'something' : 'ob-3...'},'XXX','ZZZ');
      test
        .value(oa[0])
          .is({'id': 'OB-3', 'something' : 'ob-3...'})
    })

    it("Reverse Array",function(){  
      var oa = new ObjectArray();

      for(i=0;i<=100;i++){
        oa.insert({'id': 'OB-'+i, 'something' : 'ob-'+i+'...'},0);
      };

      test
        .value(oa[0])
          .is({'id': 'OB-100', 'something' : 'ob-100...'})
        .value(oa[99])
          .is({'id': 'OB-1', 'something' : 'ob-1...'})
    })

  })

  describe("InsertAfter  (element, index [, pid]) ",function(){ 
    it("Only element without index, pid",function(){     
      var oa = new ObjectArray(
        {id:'OB-1',something:'ob-1...'},
        {id:'OB-2',something:'ob-2...'});

      test
        .value( oa.insertAfter({'id': 'OB-3', 'something' : 'ob-3...'}))
          .isType("object")
        .value(oa)
          .isType("object")
        .value(oa[0])
          .is({id:'OB-1',something:'ob-1...'})
        .value(oa[1])
          .is({id:'OB-2',something:'ob-2...'})
        .value(oa[2])
          .is({'id': 'OB-3', 'something' : 'ob-3...'})

      test
        .value(oa.insertAfter({'id': 'OB-4', 'something' : 'ob-4...'}))
          .isType("object")
        .value(oa)
          .isType("object")
        .value(oa[0])
          .is({id:'OB-1',something:'ob-1...'})
        .value(oa[1])
          .is({id:'OB-2',something:'ob-2...'})
        .value(oa[2])
          .is({'id': 'OB-3', 'something' : 'ob-3...'})
        .value(oa[3])
          .is({'id': 'OB-4', 'something' : 'ob-4...'})
      for(i=1;i<=10;i++){
        oa.insertAfter({'id': 'OB-5', 'something' : 'ob-5...'});
      }
      test
        .value(oa.length)
          .is(14)

      for(i=6;i<=105;i++){
        oa.insertAfter({'id': 'OB-'+i, 'something' : 'ob-'+i+'...'});
      }
      test
        .value(oa.length)
          .is(114)
        .value(oa[oa.length-1])
          .is({'id': 'OB-105', 'something' : 'ob-105...'})
    })

    it("Between 2 elements",function(){  
      var oa = new ObjectArray(
        {'id': 'OB-1', 'something' : 'ob-1...'},
        {'id': 'OB-3', 'something' : 'ob-3...'});

      oa.insertAfter({'id': 'OB-2', 'something' : 'ob-2...'},0);
  
      test
        .value(oa[0])
          .is({'id': 'OB-1', 'something' : 'ob-1...'})
        .value(oa[1])
          .is({'id': 'OB-2', 'something' : 'ob-2...'})
        .value(oa[2])
          .is({'id': 'OB-3', 'something' : 'ob-3...'})
    })

    it("Only element with void object and no existing index",function(){     
      var oa = new ObjectArray();
      oa.insertAfter({'id': 'OB-3', 'something' : 'ob-3...'},4);
      test
        .value(oa[0])
          .is({'id': 'OB-3', 'something' : 'ob-3...'})

      var oa = new ObjectArray();
      oa.insertAfter({'id': 'OB-3', 'something' : 'ob-3...'},-1);
      test
        .value(oa[0])
          .is({'id': 'OB-3', 'something' : 'ob-3...'})

      var oa = new ObjectArray();
      oa.insertAfter({'id': 'OB-3', 'something' : 'ob-3...'},'OBBB');
      test
        .value(oa[0])
          .is({'id': 'OB-3', 'something' : 'ob-3...'})

    })

    it("With no existing pid",function(){     
      var oa = new ObjectArray();
  
      test
        .value(oa.insertAfter({'id': 'OB-3', 'something' : 'ob-3...'},4,'XXX'))
          .isType("object")
        .value(oa[0])
          .is({'id': 'OB-3', 'something' : 'ob-3...'})

      var oa = new ObjectArray();
     
      test
        .value( oa.insertAfter({'id': 'OB-3', 'something' : 'ob-3...'},-1,'YYY'))
          .isType("object")
        .value(oa[0])
          .is({'id': 'OB-3', 'something' : 'ob-3...'})

      var oa = new ObjectArray();
      oa.insertAfter({'id': 'OB-3', 'something' : 'ob-3...'},'XXX','ZZZ');
      test
        .value(oa[0])
          .is({'id': 'OB-3', 'something' : 'ob-3...'})
   })
  })

  describe("Get",function(){ 
    it("No existing",function(){     
      var oa = new ObjectArray();

      test
        .value(oa.get(0))
          .is(undefined)
        .value(oa.get(1))
          .is(undefined)   
        .value(oa.get(''))
          .is(undefined)           
        .value(oa.get('XXX'))
          .is(undefined)
        .value(oa.get(0, 'XXX'))
          .is(undefined)
        .value(oa.get(1, 'XXX'))
          .is(undefined)   
        .value(oa.get('', 'XXX'))
          .is(undefined)           
        .value(oa.get('YYY', 'XXX'))
          .is(undefined)
    })

    it("Simple Getting",function(){    

      var oa = new ObjectArray({id:'OB-0'},{id:'OB-1'},{id:'OB-2'},{id:'OB-3'},{id:'OB-4'},{id:'OB-5'},{id:'OB-6'},{id:'OB-7'},{id:'OB-8'});

      test
        .value(oa.get(0))
          .is({id:'OB-0'})
        .value(oa.get(8))
          .is({id:'OB-8'})
        .value(oa.get('OB-3'))
          .is({id:'OB-3'})
        .value(oa.get('OB-3','id'))
          .is({id:'OB-3'})
    })


    it("No existing ID - Case Sensitive",function(){    

      var oa = new ObjectArray({ID:'OB-0'},{ID:'OB-1'},{ID:'OB-2'},{ID:'OB-3'},{ID:'OB-4'},{ID:'OB-5'},{ID:'OB-6'},{ID:'OB-7'},{ID:'OB-8'});

      test
        .value(oa.get(0))
          .is({ID:'OB-0'})
        .value(oa.get(8))
          .is({ID:'OB-8'})
        .value(oa.get('OB-3'))
          .is(undefined)
        .value(oa.get('OB-3','ID'))
          .is({ID:'OB-3'})
        .value(oa.get('OB-3','id'))
          .is(undefined)
    })
  })

  describe("Search",function(){ 

    it("Simple Searching",function(){     
       var oa = new ObjectArray({id:'OB-0'},{id:'OB-1'},{id:'OB-2'},{id:'OB-3'},{id:'OB-4'},{id:'OB-5'},{id:'OB-6'},{id:'OB-7'},{id:'OB-8'});

      test
        .value(oa.search(0))
          .is(undefined)
        .value(oa.search(8))
          .is(undefined)
        .value(oa.search('OB-3'))
          .is(3)
        .value(oa.search('OB-3','ID'))
          .is(undefined)
        .value(oa.search('OB-3','id'))
          .is(3)

    })

    it("Simple Searching - Case Sensitive",function(){     
      var oa = new ObjectArray({ID:'OB-0'},{ID:'OB-1'},{ID:'OB-2'},{ID:'OB-3'},{ID:'OB-4'},{ID:'OB-5'},{ID:'OB-6'},{ID:'OB-7'},{ID:'OB-8'});

      test
        .value(oa.search(0))
          .is(undefined)
        .value(oa.search(8))
          .is(undefined)
        .value(oa.search('OB-3'))
          .is(undefined)
        .value(oa.search('OB-3','ID'))
          .is(3)
        .value(oa.search('OB-3','id'))
          .is(undefined)

    })
  })

  describe("Move",function(){ 
    it("Flip the array",function(){
      var oa = new ObjectArray({id:'OB-0'},{id:'OB-1'},{id:'OB-2'},{id:'OB-3'},{id:'OB-4'},{id:'OB-5'},{id:'OB-6'},{id:'OB-7'},{id:'OB-8'});
   
      for (i=0; i<oa.length;i++){
        test
          .value(oa.move(8,0))
            .is(true)         
      }

      test
        .value(oa[0])
          .is({id:'OB-0'})
        .value(oa[1])
          .is({id:'OB-1'})
        .value(oa[2])
          .is({id:'OB-2'})
        .value(oa[3])
          .is({id:'OB-3'})
        .value(oa[4])
          .is({id:'OB-4'})
        .value(oa[5])
          .is({id:'OB-5'})
        .value(oa[6])
          .is({id:'OB-6'})
        .value(oa[7])
          .is({id:'OB-7'})
        .value(oa[8])
          .is({id:'OB-8'})

    })

    it("Moving positions not existing",function(){
      var oa = new ObjectArray({id:'OB-0'},{id:'OB-1'},{id:'OB-2'},{id:'OB-3'},{id:'OB-4'},{id:'OB-5'},{id:'OB-6'},{id:'OB-7'},{id:'OB-8'});
  
      test
        .value(oa.move(100,0))
          .is(false)
        .value(oa.move(100,20))
          .is(false)
        .value(oa.move(0,9))
          .is(false)
        .value(oa.move(0,10))
          .is(false)
        .value(oa.move(100,100))
          .is(false)
        .value(oa.move(100,-1))
          .is(false)
        .value(oa.move(0,100))
          .is(false)
        .value(oa.move(0, undefined))
          .is(false)

        .value(oa[0])
          .is({id:'OB-0'})
        .value(oa[1])
          .is({id:'OB-1'})
        .value(oa[2])
          .is({id:'OB-2'})
        .value(oa[3])
          .is({id:'OB-3'})
        .value(oa[4])
          .is({id:'OB-4'})
        .value(oa[5])
          .is({id:'OB-5'})
        .value(oa[6])
          .is({id:'OB-6'})
        .value(oa[7])
          .is({id:'OB-7'})
        .value(oa[8])
          .is({id:'OB-8'})
        .value(oa.length)
          .is(9)
    })

     it("Moving to -1 -> oa.move(0, -1) devuelve true y mueve la pos 0 a la última posición ",function(){
      var oa = new ObjectArray({id:'OB-0'},{id:'OB-1'},{id:'OB-2'},{id:'OB-3'},{id:'OB-4'},{id:'OB-5'},{id:'OB-6'},{id:'OB-7'},{id:'OB-8'});
  
      test
        .value(oa.move(0, -1))
          .is(true)

        .value(oa[8])
          .is({id:'OB-0'})
        .value(oa[0])
          .is({id:'OB-1'})
        .value(oa[1])
          .is({id:'OB-2'})
        .value(oa[2])
          .is({id:'OB-3'})
        .value(oa[3])
          .is({id:'OB-4'})
        .value(oa[4])
          .is({id:'OB-5'})
        .value(oa[5])
          .is({id:'OB-6'})
        .value(oa[6])
          .is({id:'OB-7'})
        .value(oa[7])
          .is({id:'OB-8'})
        .value(oa.length)
          .is(9)
    })

    it("Flipping array again and moving at the same position",function(){
      var oa = new ObjectArray({id:'OB-0'},{id:'OB-1'},{id:'OB-2'},{id:'OB-3'},{id:'OB-4'},{id:'OB-5'},{id:'OB-6'},{id:'OB-7'},{id:'OB-8'});
  
      test
        .value(oa.move(0,8))
          .is(true)

      oa.move(0,8);  
      oa.move(0,8);
      oa.move(0,8);
      oa.move(0,8);
      oa.move(0,8);
      oa.move(0,8);
      oa.move(0,8);
      oa.move(0,0);

      test      
        .value(oa.move(2,2))
          .is(true)
        .value(oa.move(8,8))
          .is(true)
        .value(oa.move(4,4))
          .is(true)

        .value(oa[0])
          .is({id:'OB-0'})
        .value(oa[1])
          .is({id:'OB-1'})
        .value(oa[2])
          .is({id:'OB-2'})
        .value(oa[3])
          .is({id:'OB-3'})
        .value(oa[4])
          .is({id:'OB-4'})
        .value(oa[5])
          .is({id:'OB-5'})
        .value(oa[6])
          .is({id:'OB-6'})
        .value(oa[7])
          .is({id:'OB-7'})
        .value(oa[8])
          .is({id:'OB-8'})
        .value(oa.length)
          .is(9)
    })

    it("Moving with string index values to integer",function(){
      var oa = new ObjectArray({id:'OB-0'},{id:'OB-1'},{id:'OB-2'},{id:'OB-3'},{id:'OB-4'},{id:'OB-5'},{id:'OB-6'},{id:'OB-7'},{id:'OB-8'});

      test
        .value( oa.move('OB-0',1))
          .is(true)
        .value( oa.move('OB-0',0))
          .is(true)
        .value( oa.move('OB-8',8))
          .is(true)
        .value(oa.move('OB-0',5))
          .is(true)
        .value(oa.move('OB-7',1))
          .is(true)
        
        .value(oa[0])
          .is({id:'OB-1'})
        .value(oa[2])
          .is({id:'OB-2'})
        .value(oa[3])
          .is({id:'OB-3'})
        .value(oa[4])
          .is({id:'OB-4'})
        .value(oa[5])
          .is({id:'OB-0'})
        .value(oa[6])
          .is({id:'OB-5'})
        .value(oa[7])
          .is({id:'OB-6'})
        .value(oa[1])
          .is({id:'OB-7'})
        .value(oa[8])
          .is({id:'OB-8'})
    })

    it("Moving with string index values to string index values",function(){
      var oa = new ObjectArray({id:'OB-0'},{id:'OB-1'},{id:'OB-2'},{id:'OB-3'},{id:'OB-4'},{id:'OB-5'},{id:'OB-6'},{id:'OB-7'},{id:'OB-8'});
      test
        .value(oa.move('OB-0','OB-1'))
          .is(true)
        .value(oa.move('OB-0','OB-0'))
          .is(true)
        .value(oa.move('OB-8','OB-8'))
          .is(true)
        .value(oa.move('OB-0','OB-5'))
          .is(true)
        .value( oa.move('OB-7','OB-2'))
          .is(true)
      
        .value(oa[0])
          .is({id:'OB-1'})
        .value(oa[2])
          .is({id:'OB-2'})
        .value(oa[3])
          .is({id:'OB-3'})
        .value(oa[4])
          .is({id:'OB-4'})
        .value(oa[5])
          .is({id:'OB-0'})
        .value(oa[6])
          .is({id:'OB-5'})
        .value(oa[7])
          .is({id:'OB-6'})
        .value(oa[1])
          .is({id:'OB-7'})
        .value(oa[8])
          .is({id:'OB-8'})
    })


  })

  describe("MoveAfter  --",function(){ 
    it("Simple MoveAfter",function(){     
      var oa = new ObjectArray({id:'OB-0'},{id:'OB-1'},{id:'OB-2'},{id:'OB-3'},{id:'OB-4'},{id:'OB-5'},{id:'OB-6'},{id:'OB-7'},{id:'OB-8'});
      test
        .value(oa.moveAfter(8,0))
          .is(true)
        .value(oa[1])
          .is({id:'OB-8'})

        .value(oa.moveAfter(0,8))
          .is(true)
        .value(oa.moveAfter(0,0))
          .is(true)
        .value(oa.moveAfter(8,8))
          .is(true)
        .value(oa.moveAfter(5,5))
          .is(true)

        .value(oa[0])
          .is({id:'OB-8'})
        .value(oa[8])
          .is({id:'OB-0'})  

        .value(oa.moveAfter(7,1))
          .is(true)
        .value(oa[0])
          .is({id:'OB-8'})
        .value(oa[1])
          .is({id:'OB-1'})
        .value(oa[2])
          .is({id:'OB-7'})
        .value(oa[3])
          .is({id:'OB-2'})
        .value(oa[4])
          .is({id:'OB-3'})
        .value(oa[5])
          .is({id:'OB-4'})
        .value(oa[6])
          .is({id:'OB-5'})
        .value(oa[7])
          .is({id:'OB-6'})
        .value(oa[8])
          .is({id:'OB-0'})

        .value(oa.moveAfter(3,5))
          .is(true)
        .value(oa[0])
          .is({id:'OB-8'})
        .value(oa[1])
          .is({id:'OB-1'})
        .value(oa[2])
          .is({id:'OB-7'})
        .value(oa[5])
          .is({id:'OB-2'})
        .value(oa[3])
          .is({id:'OB-3'})
        .value(oa[4])
          .is({id:'OB-4'})
        .value(oa[6])
          .is({id:'OB-5'})
        .value(oa[7])
          .is({id:'OB-6'})
        .value(oa[8])
          .is({id:'OB-0'})
    })

    it("Moving to and from not existing positions",function(){
      var oa = new ObjectArray({id:'OB-0'},{id:'OB-1'},{id:'OB-2'},{id:'OB-3'},{id:'OB-4'},{id:'OB-5'},{id:'OB-6'},{id:'OB-7'},{id:'OB-8'});
  
      test
        .value(oa.moveAfter(100,0))
          .is(false)
        .value(oa.moveAfter(100,20))
          .is(false)
        .value(oa.moveAfter(100,100))
          .is(false)
        .value(oa.moveAfter(100,-1))
          .is(false)
        .value(oa.moveAfter(0,100))
          .is(false)
        .value(oa.moveAfter(9,0))
          .is(false)
        .value(oa.moveAfter(0,-1))
          .is(true)

        .value(oa[8])
          .is({id:'OB-0'})
        .value(oa[0])
          .is({id:'OB-1'})
        .value(oa[1])
          .is({id:'OB-2'})
        .value(oa[2])
          .is({id:'OB-3'})
        .value(oa[3])
          .is({id:'OB-4'})
        .value(oa[4])
          .is({id:'OB-5'})
        .value(oa[5])
          .is({id:'OB-6'})
        .value(oa[6])
          .is({id:'OB-7'})
        .value(oa[7])
          .is({id:'OB-8'})
        .value(oa.length)
          .is(9)
     })
  })

  describe("remove",function(){ 
    it("Simple Remove",function(){     
      var oa = new ObjectArray({id:'OB-0'},{id:'OB-1'},{id:'OB-2'},{id:'OB-3'},{id:'OB-4'},{id:'OB-5'},{id:'OB-6'},{id:'OB-7'},{id:'OB-8'});
      test
        .value( oa.remove(0))
          .is(true)
        .value( oa.remove(oa.length-1))
          .is(true)
        .value(oa.remove(3))
          .is(true)

        .value(oa[0])
          .is({id:'OB-1'})
        .value(oa[1])
          .is({id:'OB-2'})
        .value(oa[2])
          .is({id:'OB-3'})
        .value(oa[3])
          .is({id:'OB-5'})
        .value(oa[4])
          .is({id:'OB-6'})
        .value(oa[5])
          .is({id:'OB-7'})
     })

    it("Removing not existing index",function(){     
      var oa = new ObjectArray({id:'OB-0'},{id:'OB-1'},{id:'OB-2'},{id:'OB-3'},{id:'OB-4'},{id:'OB-5'},{id:'OB-6'},{id:'OB-7'},{id:'OB-8'});

      test
        .value(oa.remove(-1))  // elimina el último
          .is(true)
        .value(oa.remove(100))
          .is(false)

        .value(oa.remove(8)) // El último valor de la lista da error
          .is(false)
      
        .value(oa[0])
          .is({id:'OB-0'})
        .value(oa[1])
          .is({id:'OB-1'})
        .value(oa[2])
          .is({id:'OB-2'})
        .value(oa[3])
          .is({id:'OB-3'})
        .value(oa[4])
          .is({id:'OB-4'})
        .value(oa[5])
          .is({id:'OB-5'})
        .value(oa[6])
          .is({id:'OB-6'})
        .value(oa[7])
          .is({id:'OB-7'})
        .value(oa[8])
          .is(undefined)
        .value(oa.length)
          .is(8)
     })

    it("Removing with string index",function(){     
      var oa = new ObjectArray({id:'OB-0', aa : '00'},{id:'OB-1', aa : '00'},{id:'OB-2', aa : '00'},{id:'OB-3', aa : '00'},{id:'OB-4', aa : '00'},{id:'OB-5', aa : '00'},{id:'OB-6', aa : '00'},{id:'OB-7', aa : '00'},{id:'OB-8', aa : '00'});
      test
        .value(oa.remove('OB-0'))
          .is(true)
        .value(oa.remove('OB-8'))
          .is(true)
        .value(oa.remove('OB-4'))
          .is(true)
        .value(oa.remove('xx'))
          .is(false)

        .value(oa[0])
          .is({id:'OB-1', aa : '00'})
        .value(oa[1])
          .is({id:'OB-2', aa : '00'})
        .value(oa[2])
          .is({id:'OB-3', aa : '00'})
        .value(oa[3])
          .is({id:'OB-5', aa : '00'})
        .value(oa[4])
          .is({id:'OB-6', aa : '00'})
        .value(oa[5])
          .is({id:'OB-7', aa : '00'})
        .value(oa.length)
          .is(6)
    })

    it("Removing with string index and pid",function(){     
      var oa = new ObjectArray({id:'OB-0', aa : '00'},{id:'OB-1', aa : '00'},{id:'OB-2', bb : '00'},{id:'OB-3', aa : '00'},{id:'OB-4', aa : '00'},{id:'OB-5', aa : '00'},{id:'OB-6', bb : '00'},{id:'OB-7', aa : '00'},{id:'OB-8', aa : '00'});

      test
        .value(oa.remove('00','aa'))
          .is(true)
        .value(oa.remove('00','bb'))
          .is(true)
        .value(oa.remove())
          .is(false)
        .value(oa.remove('',''))
          .is(false)
        .value(oa.remove('11','zz'))
          .is(false)
      
        .value(oa[0])
          .is({id:'OB-1', aa : '00'})
        .value(oa[1])
          .is({id:'OB-3', aa : '00'})
        .value(oa[2])
          .is({id:'OB-4', aa : '00'})
        .value(oa[3])
          .is({id:'OB-5', aa : '00'})
        .value(oa[4])
          .is({id:'OB-6', bb : '00'})
        .value(oa[5])
          .is({id:'OB-7', aa : '00'})
        .value(oa[6])
          .is({id:'OB-8', aa : '00'})
        .value(oa.length)
          .is(7)
     })
  })
});