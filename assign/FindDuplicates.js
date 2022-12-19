const DuplicateElements = (N,arr) => 
{
    for(let i=0;i<N;i++){
      let element=arr[i];
      for(let j=i+1;j<N;j++){
        if(element===arr[j]){
          console.log(arr[j])
        }
      }
    }
};