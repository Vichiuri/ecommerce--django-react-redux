import React from 'react'

const ViewApi = ({ data }) => {
  return (
      <div>
          <h1>View API</h1>
          { data.map(data =>(
              <p>data.id</p>
          ))}
      </div>
}

export default ViewApi