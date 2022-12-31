import React, {useState, useContext} from "react"
import {Context} from "../Context"

const CartItem = ({item}) => {
    const [hovered, setHovered] = useState(false)
    const {removeFromCart,allData} = useContext(Context)
    
    const iconClassName = hovered ? "ri-delete-bin-fill" : "ri-delete-bin-line"
    
    return (
        <div className="cart-item">
            <i 
                className={iconClassName} 
                onClick={() => removeFromCart(item._id)}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
            </i>
            <small className="mx-2 ">{item.title}</small>
            <img className="img" alt={""} src={item.image} style={{height:"12rem",width:"20rem"}} />

            <p>$5.99</p>
        </div>
    )
}

export default CartItem