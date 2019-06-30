import React, { Component } from 'react'
import * as Actions from '../state-manager/Actions/itemActions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Itemtable from '../components/itemtable'
import store from '../state-manager/store/configureStore'
import { GetItem } from '../state-manager/Actions/itemActions'

class Itemscontainer extends Component {
    componentWillMount() {
        this.props.GetItem();
    }
     
    render() {
        console.log("--->"+this.props.items);
        return (
            <Itemtable items={this.props.items} />
        )
    }
}

const mapStateToProps = state => ({
    items: state.items.items
});

//function mapDispatchToProps(dispatch) {
//    return {
//        actions: bindActionCreators(Actions, dispatch)
//    }
//}

export default connect(mapStateToProps, { GetItem })(Itemscontainer);