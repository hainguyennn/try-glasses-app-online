import React, { Component } from 'react'

export default class Model extends Component {


    handleModel = () => {
        return (
            <img src={this.props.Glasses.url} style={{ position: 'absolute', top: '25%', left: '39%', width: '22%', opacity: '.8' }} alt="hinh" />
        );
    }

    renderDetail = () => {
        return (
            <div style={{ position: 'absolute', left: '30%', bottom: '0', backgroundColor: '#F4A460', width: "40%", height: '35%' }}>
                <h5 className="text-white text-left text-primary">{this.props.detail.name}</h5>
                <p className="text-white text-left" style={{ fontSize: '13px' }}>{this.props.detail.desc}</p>
            </div>
        );
    }

    renderModel = () => {
        return (
            <div className="row text-center">
                <div className="col-md-6">
                    <div style={{ position: 'relative' }}>
                        <img src="./glassesImage/model.jpg" alt="hinh" style={{ width: '40%', height: '100%' }} />
                        {this.handleModel()}
                        {this.renderDetail()}
                    </div>
                </div>
                <div className="col-md-6">
                    <img src="./glassesImage/model.jpg" alt="hinh" style={{ width: '40%', height: '100%' }} />
                </div>
            </div>
        );
    }

    render() {
        return (
            <div className="container">
                {this.renderModel()}
            </div>
        )
    }
}
