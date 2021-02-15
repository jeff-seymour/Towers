import React from 'react'
import tiles from '../boardTiles'

function Tile (props) {
  return (
    <div className='tile'> Tile
      {props.value}
    </div>
  )
}

// const getNewStyle = () => {
//   return{
//     width: 100,
//     height: 100,
  
//   }
// }

// const boardStatus = () => {
//   if tiles.board = false 
// }

export default Tile