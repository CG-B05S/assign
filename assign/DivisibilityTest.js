const DivTest = (n) => 
{
  let count=0;
  if(n%10===0){
    return count;
  }else{
    n=n*2;
    count ++
    if(n%10===0){
      return count;
    }
    else{
      return -1
    }
  }
}