import React, { Component } from 'react'
import Item from './item'

class Itemtable extends Component {
    constructor(props) {
        super(props)
    }
        render(){
            return <Item item="Hello" />
        }
}

export default Itemtable