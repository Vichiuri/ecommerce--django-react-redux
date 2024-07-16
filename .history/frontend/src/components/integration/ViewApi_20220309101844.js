import React, { useState, useEffect } from 'react'

const ViewApi = ({ data, distId}) => {
    const [apiKey, setApiKey] = useState('')
    const [auth, setAuth] = useState('')


    useEffect(() =>{
        console.log(data)
        setAuth(data.Auth)
        setApiKey(data.Api_Key)
    },[data])
  
  return (
      <div>
          <div>
            <p>API KEY : { apiKey }</p>
          </div>
          <div>
              <p>AUTH: { auth } </p>
          </div>
          <div>
              <p>ID: { distId}</p>
          </div>
      </div>
  )
}

export default ViewApi