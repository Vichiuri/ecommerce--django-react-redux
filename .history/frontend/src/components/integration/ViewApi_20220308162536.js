import React, { useEffect } from 'react'

const ViewApi = ({ data }) => {
    useEffect(() =>{
        console.log(data)
    })

  return (
      <div>
          <h1>View API</h1>
      </div>
  )
}

export default ViewApi