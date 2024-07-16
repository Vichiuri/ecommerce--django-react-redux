import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchApiIntegration } from '../../redux/Actions/Integration'
import SimpleBackdrop from '../../widgets/SimpleBackDrop';
import CustomSnackBar from '../../widgets/CustomSnackBar';
import PermissionHandler from '../../utils/PermissionHandler';
import ViewApi from './ViewApi';

class Integration extends Component {
    constructor(props){
        super(props);
        this.state = {
            openSnackBar: false,
            isError: null,
            snackPosition: { vertical: 'top', horizontal: 'center'},
            responseMessage: "",
            viewApi: null,
        };
        this.closeSnackBar = this.closeSnackBar;
        this.setResponse = this.setResponse;
    }

    // componentDidUpdate(prevProps){
    //     const { error, message } = this.props;
    //     if(error !== prevProps.error) this.setResponse(error)
    //     else if (message !== prevProps.message){
    //         if(message.status == 200){
    //             console.log('SUCCESS')
    //         }
    //         this.setResponse(message)
    //     }
    // }

    componentDidMount(){
        this.props.fetchApiIntegration()
        console.log('Integrations')
    }

    closeSnackBar(){
        this.setState({ openSnackBar: false })
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
        const { integrationReducer, fetchApiIntegration, auth } = this.props;
        const { apiData, isLoading } = integrationReducer
        const { isError, openSnackBar, responseMessage, snackPosition, viewApi } = this.state
        const snackValues = {
            isError,
            responseMessage,
            openSnackBar,
            snackPosition
        }

        return(
            <div>
                <h1>View API</h1>
                <SimpleBackdrop open={isLoading}/>
                <ViewApi data={apiData} />
                <CustomSnackBar values={ snackValues } closeSnackBar={this.closeSnackBar}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    auth: state.authReducer,
    integrationReducer: state.integrationReducer,
    error: state.errorsReducer,
    message: state.messagesReducer,
})


export default connect(mapStateToProps, {
    fetchApiIntegration,
})(Integration)
