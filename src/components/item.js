import React, { Component } from 'react'

class Item extends Component {
    constructor(props) {
        super(props)
    }
        render(){
            return <label>{this.props.item}</label>
        }
}


export default Item