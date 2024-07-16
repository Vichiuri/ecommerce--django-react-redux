import React, { useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { fetchApiIntegration } from '../../redux/Actions/Integration'
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";


const Integration = () => {
    const dispatch = useDispatch()
    const apiData = useSelector((state) => state.Integration)

    // immediately the page is loaded, fetch url
    useEffect(() =>{
        dispatch(fetchApiIntegration)
        console.log('TOKENS')
        console.log(apiData)
    })

    return(
        <h1>Integration</h1>
    )

}

const mapStateToProps = (state) => {
    auth: state.auth
}

export default connect(mapStateToProps, {})(Integration)