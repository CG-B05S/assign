const ageCalculation = (f,s) => {
    let rem = f % s;
    const num=parseInt(f/s);
    if (num>1) {
        const age2=(f-(2*s))
        return (age2);
    }
    else{
        let age1 = s - rem;
        return (age1);
    }
};