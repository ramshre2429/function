let arr=function(num)
{
    let flag=0
    if(num<2)
    return 'the number ${num}is not a prime'
for(let i=2;i<num;i++)
{
    if(num%i==0)
    {
        flag++
    }
else
    {
        return 'the number ${num}is primne'
    }
}
}

let a=13
arr(a)
