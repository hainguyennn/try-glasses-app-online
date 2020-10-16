import React, { Component } from 'react'

export default class Product extends Component {
    render() {
        const { product, changeGlasses } = this.props;
        return (
            <div>
                <button style={{ cursor: 'pointer' }} onClick={() => changeGlasses(product.url, product.desc, product.name)}><img src={product.url} alt={product.name} style={{ width: '100%' }} /></button>
            </div>
        )
    }
}
