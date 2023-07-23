import React, {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

export type RatingType = {
    rate: number
    count: number
}

export type ProductType = {
    _id: string,
    id: number,
    title: string,
    price: number,
    description: string
    category: string
    image: string
    rating: RatingType
    createdAt: Date
    updatedAt: Date
}

function BestSellers() {

    const [products, setProducts] = useState<ProductType[]>([])

    let navigate = useNavigate();

    const showMoreHandler = (id:number)=> {
        navigate('product/' + id);
    }

    useEffect(() => {
        axios.get("https://masterclass.kimitsu.it-incubator.ru/api/products")
            .then((res) => {
                const foundProducts: ProductType[] = res.data;
                setProducts(foundProducts)
            });
    }, []);

    return (
        <div className={"bestSeller"}>
            <h2>Best Sellers</h2>
            <div className={"cards"}>
                {
                    products.map((pr) => {
                        return (
                            <div className={"card"}>
                                <img src={pr.image} alt="img"/>
                                <h4>{pr.title}</h4>
                                <p className="price">${pr.price}</p>
                                <button onClick={() => showMoreHandler(pr.id)}>Show more</button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default BestSellers;