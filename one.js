//print the odd number in an array

let Array=function(num)
{
    let len=num.length;
    for(let i in num)
    {
        if(num[i]%2!==0)
        {
            console.log(num[i])
        }
    }
}
let a=[1,2,3,4,5,6,7,8,9]
Array(a)