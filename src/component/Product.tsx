import React from "react";
import {useEffect, useState} from "react"
import axios from 'axios'
import {ProductType} from "./BestSellers";
import rating from "../assets/img/rating.svg"
import cartWhite from "../assets/img/cartWhite.svg"
import arrowBack from "../assets/img/arrowBack.svg"
import {Link, useParams} from "react-router-dom";
import Reviews from "./Reviews";

function Product() {

    let {productId} = useParams();

    const [product, setProduct] = useState<ProductType | null>(null)

    const [isProductInCart, setIsProductInCart] = useState(false)

    const addProductToCartHandler = () => {
        alert('Товар успешно добавлен в корзину')
        setIsProductInCart(true)
    }

    useEffect(() => {
        axios.get(`https://masterclass.kimitsu.it-incubator.ru/api/products/${productId}`)
            .then((res) => {
                const foundProduct: ProductType = res.data;
                setProduct(foundProduct)
            })
    }, [productId])

    return (
        <div>
            {
                product === null
                    ? <h2>Продукт еще грузится ...</h2>
                    : <>
                        <div className="arrowBack">
                            <Link to={"/"}>
                                <img src={arrowBack} alt=""/>
                                Back to Best Seller
                            </Link>
                        </div>

                        <div className="product">
                            <img src={product.image} alt=""/>
                            <div className="info">
                                <p className="title">{product.title}</p>
                                <p className="price">$ {product.price}</p>
                                <div className="rating">
                                    <p>Rating: {product.rating.rate}</p>
                                    <img src={rating} alt=""/>
                                </div>
                                <div className="category">
                                    <span>Category:</span>
                                    <p>{product.category}</p>
                                </div>
                                <p className="description">{product.description}</p>
                                <button onClick={addProductToCartHandler} >
                                    <img src={cartWhite} alt="" />
                                    {isProductInCart ? 'Go to cart' : 'Add to cart'}
                                </button>
                            </div>
                        </div>
                    </>
            }
            <Reviews/>
        </div>
    )
}

export default Product;