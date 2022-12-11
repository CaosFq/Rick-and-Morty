import React from 'react'

const LocationInfo = ({location}) => {
  
    return (
   
   <article>
   
    <h2>{location?.name}</h2>
    <ul>
        <li>Type: <span></span>{location?.type}</li>
        <li>Dimension: <span></span>{location?.dimension}</li>
        <li>Population: <span></span>{location?.residents.length}</li>
    </ul>

 </article>
  )
}

export default LocationInfo