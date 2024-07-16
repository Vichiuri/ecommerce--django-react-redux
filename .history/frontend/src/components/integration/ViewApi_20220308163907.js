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
            <p>API KEY : { apiKey }</p>
          </div>
          <div>
              <p>AUTH: { auth } </p>
          </div>
      </div>
  )
}

export default ViewApi