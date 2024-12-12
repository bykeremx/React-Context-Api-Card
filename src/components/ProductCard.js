import React ,{useContext} from 'react'
import { FaPlus } from 'react-icons/fa6'
import { Card, CardTitle, CardText, Button } from 'reactstrap'
import '../styles/prdcard.css'
import ProductsContext from './context/ProductsContext'

const ProductCard = ({product}) => {
    const {AddCard} = useContext(ProductsContext);    
    //sepete ekle 
    const AddToCard = ()=>{
        AddCard(product);
    }
    return (
        <Card
            body
            className="CardCustom my-2">
            <CardTitle tag="h5">
               {product.name}
            </CardTitle>
            <CardText>
                {product.description}
                <p className='price'>
                    {product.price}  ₺ 
                </p>
            </CardText>
            <Button color="primary" onClick={AddToCard}>
                <FaPlus></FaPlus>
                Sepete Ekle 
            </Button>
        </Card>
    )
}

export default ProductCard
