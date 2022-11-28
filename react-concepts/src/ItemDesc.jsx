import React from 'react';

function ItemDesc({name, description, price}){

    return(
        <div>
            <p>{name}</p>
            <p><i>{description}</i></p>
            {/* <h3>${price}</h3> */}

        </div>

    )

}

export default ItemDesc;