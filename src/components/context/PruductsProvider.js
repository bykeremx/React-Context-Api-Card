import React, { useEffect, useState } from 'react';
import ProductsContext from './ProductsContext';
import axios from 'axios';

//provider components oluşturma



const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [card,setCard] = useState([]);

    const getProducst = async () => {
        const products = await axios.get("http://localhost:3000/products");
        setProducts(products.data);
    }
    //carta ekleme fonksiyonu 
    const AddCard = (products) =>{
        setCard([...card, products]);
        console.log("Eklendi");
    }

    useEffect(() => {
        getProducst();
    }, []);

    return (
        <ProductsContext.Provider value={{ products ,AddCard ,card}}>
            {children}
        </ProductsContext.Provider>
    )

}

export default ProductProvider;