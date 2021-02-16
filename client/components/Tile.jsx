import React from 'react'
import tiles from '../boardTiles'

function Tile (props) {
  // console.log(props)
  
  function colorChange(){
  if(props.board == false ) {
    return(
        <div className='tile'style={{'background-color': 'grey'}}> Tile
          {props.Board}
        </div>
  
    )
  }
  }

  return ( 
    <>
    {colorChange()}
    </>
    // <div className={props.board ? 'greenTile' : 'blueTile'}'> Tile

    // <div className='tile'> Tile
    //   {props.board}

    // </div>
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