import React, { Component } from 'react'
import Product from './Product'

export default class GlassesList extends Component {

    renderGlasses = () => {
        return this.props.product.map((product, index) => {
            return (
                <div className="col-md-2" key={index}>
                    <Product product={product} changeGlasses={this.props.changeGlasses} />
                </div>
            );
        })
    }

    render() {
        return (
            <div className="container mt-4">
                <div className="row">
                    {this.renderGlasses()}
                </div>
            </div>
        )
    }
}
