import React from 'react';
//import ItemDesc from './ItemDesc';

function Status(){

    const[sta, setStatus] = useState("Single");

    const changeStatus = () => {
        setStatus("Married")
      }

    return(
        <div>
            <h1>Balu</h1>
            <p onClick = {changeStatus}>status = {sta}</p>
            
        </div>

    )

}

export default Status;