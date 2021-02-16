import React from 'react'

function Tile (props) {
  
  function colorChange(){
  if (props.board == false && props.tower == false ) {
    return(
        <div className='tile'style={{'backgroundColor': 'grey'}}> 
        Empty
          {props.Board}
        </div>
        
    )}
    else  if (props.board == false && props.tower == true ) {
      return(
          <div className='tile'style={{'backgroundColor': 'yellow'}}> 
          Tower
            {props.Board}
          </div>
          
      )}

  else if (props.board == true){
    return(
      <div className='tile'style={{'backgroundColor': 'green' }}>
        Board
        {props.board}
      </div>
    )
  }}

  return ( 
    <>
    {colorChange()}
    </>
  )
}


export default Tile
