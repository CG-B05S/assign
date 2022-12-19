const CheckArm = (N) => 
{
  let n=N+"";
  let arr=[];
  let num=0;
  for(let i=0; i<n.length;i++){
    arr.push( parseInt(n[i]));
  }
  for(let i=0; i<n.length;i++){
    num=num+Math.pow(arr[i],n.length);
  }
  if(N===num){
    return "Yes"
  }
  else{
    return "No"
  }
};