import React, { useState, useEffect } from 'react'

const ViewApi = ({ data }) => {
    const [apiKey, setApiKey] = useState('')
    const [auth, setAuth] = useState('')

    useEffect(() =>{
        console.log(data)
        setAuth(data.Auth)
    })

  return (
      <div>
          <div>
            <h2>API KEY : { apiKey }</h2>
          </div>
          <div>
              <h2>AUTH: { auth }</h2>
          </div>
      </div>
  )
}

export default ViewApi