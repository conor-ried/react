import React from "react";

const ShoppingCart = ({items}) =>    {(<div>
<h1> Shopping Cart Time for the FOLKS </h1>
<div>
  {items.map(i => (
    <div>
      <h4>
        {i.name}
        <ul>
          <li>Price: ${i.quantity}</li>
        </ul>
      </h4>
      </div>
  ))}

  </div>

</div>

)} 


export default ShoppingCart;