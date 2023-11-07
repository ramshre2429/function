let arr=function(name)
{
   let str=name.split('');
    let str2=str.reverse();
    let str3=str2.join('')
    if(name===str3)
    {
    console.log(str3) 
    }
}


let a=["anomaly"]
arr(...a)