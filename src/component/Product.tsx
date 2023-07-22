import React from "react";
import { useEffect, useState } from "react"
import axios from 'axios'
import {ProductType} from "./BestSellers";
import rating from "../assets/img/rating.svg"
import cartWhite from "../assets/img/cartWhite.svg"

function Product () {

    const [product, setProduct] = useState<ProductType | null>(null)

    useEffect(() => {
        axios.get('https://masterclass.kimitsu.it-incubator.ru/api/products/1')
            .then((res) => {
                const foundProduct: ProductType = res.data;
                setProduct(foundProduct)
            })
    }, [])


    return (
        <div>
            {
                product === null
                    ? <h2>Продукт еще грузится ...</h2>
                    : <> {console.log(product)}
                        <div>Заглушка. Понадобится чуть позже. Не удаляейте :)</div>

                        <div className="product">
                            <img src={product.image} alt="" />
                            <div className="info">
                                <p className="title">{product.title}</p>
                                <p className="price">$ {product.price}</p>
                                <div className="rating">
                                    <p>Rating: {product.rating.rate}</p>
                                    <img src={rating} alt="" />
                                </div>
                                <div className="category">
                                    <span>Category:</span>
                                    <p>{product.category}</p>
                                </div>
                                <p className="description">{product.description}</p>
                                <button>
                                    <img src={cartWhite} alt="" />
                                    Add to cart
                                </button>
                            </div>
                        </div>
                    </>
            }
        </div>
    )
}

export default Product;