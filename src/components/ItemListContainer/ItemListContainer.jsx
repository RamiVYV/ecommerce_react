import React from 'react'

const ItemListContainer =(props)=> {
    const{gretting,user}=props
  return (
    <div className='banner'>
    <h1 className='gretting'>{gretting}</h1>
    <h2 className='user'>{user}</h2>
    </div>
  )
}

export default ItemListContainer