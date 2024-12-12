import React from 'react'
import { FaBasketShopping } from "react-icons/fa6";
import { Badge } from "reactstrap";


const Card = () => {
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
                    100
                </span>
            </Badge>
        </div>
    )
}

export default Card
