const BuildTen = (A,B) => {
    if(A===10 || B===10){
      return "true";
    }
    else{
      if(A+B===10){
        return "true";
      }
      else{
        return "false";
      }
    }
};