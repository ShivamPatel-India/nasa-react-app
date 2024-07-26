import React from 'react'

const Main = ({data}) => {
  return (
    <div className='image-container'>
      <img src={data.hdurl} alt={data.title || 'APOD'} className="bgImage"/>
    </div>
  )
}

export default Main