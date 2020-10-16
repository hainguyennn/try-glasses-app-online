import React, { Component } from 'react'
import Model from './Model'
import data from './data.json'
import GlassesList from './GlassesList'

export default class BaiTapThuKinh extends Component {

    state = {
        name: "GUCCI G8850U",
        url: "./glassesImage/v1.png",
        desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    }

    changeGlasses = (glass, desc, name) => {
        console.log("glass", glass, "chitiet", desc, "ten", name)
        this.setState({
            url: glass, desc, name
        })
    }

    render() {
        return (
            <div>
                <h2 className="text-center text-white p-4" style={{ backgroundColor: '#3e3e3e', opacity: '.6' }}>TRY GLASSES APP ONLINE</h2>
                <Model Glasses={this.state} detail={this.state} />
                <GlassesList product={data} changeGlasses={this.changeGlasses} />
            </div>
        )
    }
}
