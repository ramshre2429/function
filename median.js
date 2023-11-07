let arr=function(one,two)
{
    
let three=one.concat(two)
let len=three.length;
let size=(len-1)
let q=size/2;
let w=parseInt(q)
if(size%2!=0)
{
let median=(three[w]+three[w+1])/2;
console.log(median)
}
else{
    console.log(three[w])
}
}

let a=[1,2,3,4,8,7]
let b=[87,99,5,22,44,5]
arr(a,b)