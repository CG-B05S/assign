const CompletePattern = (N) => 
{
    let num=0;
    for(let i=1; i<=N; i++){
      for(let j=1; j<=i; j++){
      num=num + j+" ";
      }
      num=num+ "\n"
    }
    console.log(num);
};


1
12
123
1234
12345