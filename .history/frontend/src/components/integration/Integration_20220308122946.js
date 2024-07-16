import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchApiIntegration } from '../../redux/Actions/Integration'


class Integration extends Component {
    constructor(props){
        super(props);
        this.state = {
            responseMessage: ""
        }
        this.setResponse = this.setResponse;
    }

    componentDidUpdate(prevProps){
        const { error, message } = this.props;
        if(error !== prevProps.message) this.setResponse(error)
        else if (message !== prevProps.message){
            if(message.status == 200){
                console.log('SUCCESS')
            }
            this.setResponse(message)
        }
    }

    componentDidMount(){
        console.log('Integrations')
    }

    setResponse(response) {
        let value = Object.keys(response.responseMessage)[0];
        const responseMessage = response.responseMessage[value];
        if (responseMessage instanceof Array)
          this.setState({
            responseMessage: responseMessage[0],
          });
        else
          this.setState({
            responseMessage: responseMessage,
          });
      }

    render(){
        const { integrationReducer, auth } = this.props;
        const { apiData, } = integrationReducer

        return(
            <div>
                <h1>Api Integrations</h1>
                { apiData }
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
