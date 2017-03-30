// try out 1

var input= ['a','b','c','d',3,5,2,'a','b','x','y','z','z','z','r','t','s','a','b',90];
var huruf=[];
var a=[];
var b=[];
var c=[];
var d=[];
var x=[];
var y=[];
var z=[];
var r=[];
var t=[];
var s=[];
var angka=[];
var jumlah=0;
var kata=[];
for(var i= 0; i < input.length; i++){
  if(typeof input[i] === 'string'){
    huruf.push(input[i]);
    if(input[i] === 'a'){
      a.push(input[i]);
    }
    else if(input[i] === 'b'){
      b.push(input[i]);
    }
    else if(input[i] === 'c'){
      c.push(input[i]);
    }
    else if(input[i] === 'd'){
      d.push(input[i]);
    }
    else if(input[i] === 'x'){
      x.push(input[i]);
    }
    else if(input[i] === 'y'){
      y.push(input[i])
    }
    else if(input[i] === 'z'){
      z.push(input[i])
    }
    else if(input[i] === 'r'){
      r.push(input[i])
    }
    else if(input[i] === 't'){
      t.push(input[i])
    }
    else if(input[i] === 's'){
      s.push(input[i])
    }
  }
  else{
     angka.push(input[i]);
     jumlah += input[i];
  }
}
console.log('jumlah semua kata: '+ input.length)
console.log('jumlah semua kata yang unik: '+ huruf.length)
console.log('Jumlah kata yang unik dan jumlahnya masing masing:')
console.log('a: '+a.length)
console.log('b: '+b.length)
console.log('c: '+c.length)
console.log('d: '+d.length)
console.log('x: '+x.length)
console.log('y: '+y.length)
console.log('z: '+z.length)
console.log('r: '+r.length)
console.log('t: '+t.length)
console.log('s: '+s.length)
console.log('ada '+angka.length+' angka: '+ angka[0]+" ,"+angka[1]+' ,'+angka[2]+' ,'+angka[3])
console.log('Jumlah semua angka: '+ jumlah)
