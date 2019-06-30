import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class Container extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
           "Hello"
        )
    }
}

export default Container;
