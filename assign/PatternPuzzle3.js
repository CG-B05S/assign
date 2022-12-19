const CompletePattern = (N) => 
{
  let num=0;
    for(let i=1; i<=N; i++){
      for(let j=1; j<=i; j++){
      num=num + i+" ";
      }
      num=num+ "\n";
    }
    console.log(num);
};


1
22
333
4444
55555