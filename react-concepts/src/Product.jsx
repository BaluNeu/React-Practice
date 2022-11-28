import React from 'react';
import ItemDesc from './ItemDesc';

function Product({name, description, price}){

    return(
        <div>
            <ItemDesc name = {name} description = {description}/>
            <h3>${price}</h3>

            

            {/* <h1>{props.name}</h1>
            <h2>{props.description}</h2> */}
        </div>

    )

}

export default Product;