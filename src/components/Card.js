import React, { useContext } from 'react'
import { FaBasketShopping } from "react-icons/fa6";
import { Badge } from "reactstrap";
import ProductsContext from './context/ProductsContext';




const Card = () => {
    const {card} = useContext(ProductsContext);
    return (
        <div>
            <Badge color="danger">
                <FaBasketShopping size={24} />
                <span style={
                    {
                        borderRadius: "50%",
                        color: "white",
                        fontWeight: "bold",
                        fontSize: "15px",
                        lineHeight: "1",
                        textShadow: "0 0 2px rgba(0, 0, 0, 0.5)",
                        cursor: "pointer"
                    }
                }>
                    {card.length}
                </span>
            </Badge>
        </div>
    )
}

export default Card
