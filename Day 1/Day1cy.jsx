import React from "react";
function Day1CY(){
    const checkFunction = ()=>{
        const name1 = "Shankar" ;
        const name2 = "Atlee" ;
        const name1Obj = {n1:"Shankar"};
        const name2Obj = {n2:"Atlee"};
        console.log(name1 === name1Obj.n1);
        console.log(name2 === name2Obj.n2);
    }
    return(
        <>
            <div>
                <button onClick={checkFunction}>CHECK</button>
            </div>
        </>
    )
}
export default Day1CY;