import React, { useState, useEffect} from 'react';
import { connect } from 'react-redux';


const Integration = () => {

    // immediately the page is loaded, fetch url
    useEffect(() =>{
        console.log('TOKENS')
    })

    return(
        <h1>Integration</h1>
    )

}

const mapStateToProps = (state) => {
    auth: state.auth
}

export default connect(mapStateToProps, {})(Integration)