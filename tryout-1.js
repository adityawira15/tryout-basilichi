// try out 1

var input= ['a','b','c','d',3,5,2,'a','b','x','y','z','z','z','r','t','s','a','b',90];
var huruf=[];
var a=0;
var angka=[];
var jumlah=0;
for(var i= 0; i < input.length; i++){
  if(typeof input[i] === 'string'){
    huruf.push(input[i]);
  }
  else{
     angka.push(input[i]);
     jumlah += input[i];
  }
}
console.log('jumlah semua kata: '+ input.length)
console.log('jumlah semua kata yang unik: '+ huruf.length)
console.log(a)
console.log('ada '+angka.length+' angka: '+ angka[0]+" ,"+angka[1]+' ,'+angka[2]+' ,'+angka[3])
console.log('Jumlah semua angka: '+ jumlah)