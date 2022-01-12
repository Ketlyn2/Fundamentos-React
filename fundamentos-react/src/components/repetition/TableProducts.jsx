import './TableProducts.css'
import React from 'react'
import products from '../../data/products'

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {

    const productsInfo = products.map((product) => {
        return (
            <tr key={ product.id }>
                <td>{ product.id }</td>
                <td>{ product.name }</td>
                <td>R$ { product.price }</td>
            </tr>
        )
    })

    return (
        <div>
            <table>
                <tr>
                    <th>ID</th>
                    <th>Produto</th>
                    <th>Preço</th>
                </tr>
                { productsInfo }
            </table>
        </div>
    )
}