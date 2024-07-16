import React, { useState, useEffect } from 'react'

const ViewApi = ({ data }) => {
    const [apiKey, setApiKey] = useState('')
    const [auth, setAuth] = useState('')
    const [generate, setGenerate] = useState(false)


    useEffect(() =>{
        console.log(data)
        setAuth(data.Auth)
        setApiKey(data.Api_Key)
    })

    const handleClick = () => {
        generateToken()
    }

  return (
      <div>
          <div>
            <p>API KEY : { apiKey }</p>
          </div>
          <div>
              <p>AUTH: { auth } </p>
          </div>

          <div>
              <button onClick={handleClick}>Generate Token</button>
          </div>
          {
              generate ? (
                  <div>
                      TOKEN: tokenstring
                  </div>
              ) : null
          }
      </div>
  )
}

export default ViewApi