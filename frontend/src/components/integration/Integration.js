import React, { Component,useState, useEffect } from 'react'
import { connect, useSelector, useDispatch } from 'react-redux'
import { fetchApiIntegration, generateAuthToken } from '../../redux/Actions/Integration'
import SimpleBackdrop from '../../widgets/SimpleBackDrop';
import CustomSnackBar from '../../widgets/CustomSnackBar';
import ViewApi from './ViewApi';


const API = () =>{
    const dispatch = useDispatch()
    const apiData = useSelector((state) => state.integrationReducer.apiData)
    const [generate, setGenerate] = useState(false)

    useEffect(() =>{
        dispatch(fetchApiIntegration())
        setGenerate(false)
    },[dispatch])

    const handleClick = () =>{
        dispatch(generateAuthToken())
    }

    return (
        <div className="profile-info col-md-9">
                <div className='card panel'>
                    <div className="bio-graph-heading card-header">
                        <h3>API Integration</h3>
                    </div>
                    <div className="">
                        <div className="">
                            {
                                (apiData?.api_key && apiData.consumer_key && apiData.token) ? (
                                    <div>
                                        <ViewApi data={apiData} />
                                    </div>
                                ) : null
                            }
                        </div>
                    </div>
                    <div className="container" style={{marginBottom: "50px", width: "200px"}}>
                        <div className="row">
                            <div className="col text-center"> 
                                <button className="btn btn-primary" onClick={handleClick}>Generate Token</button>
                            </div>
                        </div>
                    </div>
                    </div>
                        {/* <SimpleBackdrop open={isLoading}/> */}
                    <div>
                </div>
                {/* <CustomSnackBar values={ snackValues } closeSnackBar={this.closeSnackBar}/> */}
            </div>
        
    )
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
})(API)
