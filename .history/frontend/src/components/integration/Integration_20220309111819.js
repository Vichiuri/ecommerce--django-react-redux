import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchApiIntegration, generateAuthToken } from '../../redux/Actions/Integration'
import SimpleBackdrop from '../../widgets/SimpleBackDrop';
import CustomSnackBar from '../../widgets/CustomSnackBar';
import ViewApi from './ViewApi';

class Integration extends Component {
    constructor(props){
        super(props);
        this.state = {
            openSnackBar: false,
            isError: null,
            snackPosition: { vertical: 'top', horizontal: 'center'},
            responseMessage: "",
            apiKey: "",
            authString: "",
            generate: false,
            distId: JSON.parse(localStorage.getItem('account')).id,

        };
        this.closeSnackBar = this.closeSnackBar.bind(this);
        this.setResponse = this.setResponse.bind(this);
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidUpdate(prevProps){
        const { error, message } = this.props;
        if(error !== prevProps.error) this.setResponse(error)
        else if (message !== prevProps.message){
            if(message.status == 200){
                console.log('SUCCESS')
            }
            this.setResponse(message)
        }
    }

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
    
    handleClick(){
        console.log("Genrate Token")
        this.props.generateAuthToken()
        // console.log(data)
        this.props.fetchApiIntegration()
        this.setState({generate: true}, () => this.setState({ generate: true }))
    }  

    render(){
        const { integrationReducer, fetchApiIntegration, auth } = this.props;
        const { apiData, isLoading, token } = integrationReducer
        console.log(token)
        const { isError, openSnackBar, responseMessage, snackPosition, generate, distId } = this.state
        const snackValues = {
            isError,
            responseMessage,
            openSnackBar,
            snackPosition
        }

        return(
            <div>
                <h1>API Integration</h1>
                <SimpleBackdrop open={isLoading}/>
                <ViewApi data={apiData} distId={distId}/>
                <div>
                    <button onClick={this.handleClick}>Generate Token</button>
                </div>
                    {
                        generate ? (
                            <div>
                                TOKEN: { token.token }
                            </div>
                        ) : null
                    }
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
    apiData: state.intergrationReducer
})


export default connect(mapStateToProps, {
    fetchApiIntegration, generateAuthToken,
})(Integration)
