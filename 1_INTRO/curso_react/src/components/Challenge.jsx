const Challenge = () =>{
    const var1 = 1;
    const var2 = 3;

    const printValChallenge = (pVal1, pVal2) =>{
        console.log(pVal1 + pVal2);
    }
    return(
        <div className="challenge">
            <ol>
                <li>var1 = {var1}</li>
                <li>var2 = {var2}</li>
            </ol>
            <button onClick={() => console.log(var1 + var2)}>clique-me</button>
        </div>
    )
}

export default Challenge;
