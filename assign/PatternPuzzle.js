const CompletePattern = (N) => 
{
    let x= "";
    for(let i=1; i<=N; i++){
      for(let j=1; j<=i; j++){
      x=x + "X";
      }
      x=x+"\n"
    }
    console.log(x);
};


X
XX
XXX
XXXX