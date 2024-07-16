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
        this.props.generateAuthToken()
        // console.log(data)
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
            <div className="profile-info col-md-9">
                <div className='card panel'>
                    <div className="bio-graph-heading card-header">
                        <h3>API Integration</h3>
                    </div>
                    <div className="card-content panel-body bio-graph-info">
                        <div className="row justify-content-between pl-3 pr-3">
                            {
                                generate === true ? (
                                    <div>
                                        <ViewApi data={token} tokenGenerated={true} distId={distId}/>
                                    </div>
                                ) : <div>
                                        <ViewApi data={apiData} distId={distId} tokenGenerated={false}/>
                                    </div>
                            }
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col text-center">
                            <button className="btn btn-primary" onClick={this.handleClick}>Generate Token</button>
                            </div>
                        </div>
                    </div>
                    </div>
                        <SimpleBackdrop open={isLoading}/>
                    <div>
                </div>
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
