import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchApiIntegration } from '../../redux/Actions/Integration'



class Integration extends Component {
    componentDidMount(){
        console.log('Integrations')
    }

    render(){
        const { integrationReducer, auth } = this.props;

        return(
            <div>
                <h1>Api Integrations</h1>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    auth: state.authReducer,
    integrationReducer: state.integrationReducer,
})


export default connect(mapStateToProps, {
    fetchApiIntegration,
})(Integration)