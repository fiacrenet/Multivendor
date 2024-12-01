import React, { useState } from 'react'

function ButtonQuatity() {

    const [itemCount, setItemCount] = useState(0)

  return (
    <div className='button-quantity'>
        
        {!itemCount
            ?<div className='quatity-counter d-flex flex-start'>
             <button className='Remove btn me-2'><i class="fa-solid fa-circle-minus"></i></button>
             <p className='mt-3'> Qte : {itemCount} </p>
             <button onClick={()=>setItemCount(prev=>prev+1)} className='add btn  ms-2'><i class="fa-solid fa-circle-plus"></i></button>
             </div>
            :<div className='quatity-counter d-flex flex-start'>
                <button onClick={()=>setItemCount(prev=>prev-1)} className='Remove btn me-2'><i class="fa-solid fa-circle-minus"></i></button>
                <p className='mt-3'> Qte : {itemCount} </p>
                <button onClick={()=>setItemCount(prev=>prev+1)} className='add btn  ms-2'><i class="fa-solid fa-circle-plus"></i></button>
            </div>
          
        }
 
    </div>
  )
}

export default ButtonQuatity
