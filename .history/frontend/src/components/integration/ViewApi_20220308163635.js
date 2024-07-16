import React, { useState, useEffect } from 'react'

const ViewApi = ({ data }) => {
    const [apiKey, setApiKey] = useState('')
    const [auth, setAuth] = useState(data.Auth)

    useEffect(() =>{
        console.log(data)
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