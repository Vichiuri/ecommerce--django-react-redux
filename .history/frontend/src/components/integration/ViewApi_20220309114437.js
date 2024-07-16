import React, { useState, useEffect } from 'react'

const ViewApi = ({ data, distId, tokenGenerated}) => {
    const [apiKey, setApiKey] = useState('')
    const [auth, setAuth] = useState('')


    useEffect(() =>{
        console.log(data)
        if(tokenGenerated === true && tokenGenerated !== null){
            setApiKey(data.api_key)
            setAuth(data.token)
        } else{
            setAuth(data.Auth)
            setApiKey(data.Api_Key)
        }
    },[data])
  
  return (
      <div>
          <div>
            <p>API KEY : { apiKey }</p>
          </div>
          <div>
              <p> { tokenGenerated === true ? 'TOKEN': 'AUTH'}: { auth } </p>
          </div>
          <div>
              <p>ID: { distId}</p>
          </div>
      </div>
  )
}

export default ViewApi