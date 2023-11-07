let a=(...num)=>{
    let cont=[]
    let len=num.length;
    num.forEach((n)=>
        {
        let count=0;
        for(let i=0;i<len;i++)
            {
                if(n%i===0)
                {
                    count++
                }
            }
        if(count===2)
        {
            cont.push(n)
        }
    })
    console.log(cont)
}
a(1,5,8,7,4,5,6,9,78,4,4)