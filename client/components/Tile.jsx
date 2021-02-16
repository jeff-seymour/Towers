import React from 'react'
import tiles from '../boardTiles'

function Tile (props) {
  console.log(props)
  
  function colorChange(){
  if(props.board == false && props.tower == false ) {
    return(
        <div className='tile'style={{'backgroundColor': 'grey'}}> 
        Off Board
          {/* {props.Board} */}
        </div>
        
    )}
    else if(props.board == false && props.tower == true) {
      return(
          <div className='tile'style={{'backgroundColor': 'yellow'}}> towerfalse
            {/* {props.tower} */}
          </div>
      )}

  else if (props.board == true){
    return(
      <div className='tile'style={{'backgroundColor': 'green' }}>
        Game board
        {/* {props.board} */}
      </div>
    )
  }}
    
  
    // console.log(props.tower == true)
  // console.log(props)
  


  return ( 
    <>
    {colorChange()}
 
    </>
  )
}

export default Tile