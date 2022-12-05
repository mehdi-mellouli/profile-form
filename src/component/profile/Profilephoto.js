import React from 'react'
import mehdi from "./photo1.jpg";




const profilePhoto = () => {
  return (
    <div>
     <img  src={mehdi} className="card-img-top" alt='mehdi'  style={{ width: "150px" }} />
    </div>
  )
}

export default profilePhoto