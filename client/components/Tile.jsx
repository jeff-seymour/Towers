import React, { useState } from 'react'
import { terrainData } from '../terrains'

function Tile (props) {
  const [fog, setFog]= useState('black')


  function colorChange(){
  if (props.board == false && props.tower == false ) {
    return(
        <div className='tile'style={{'backgroundColor': 'grey'}}> 
        Out of Bounds
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
      
      <div onClick ={()=>setFog('green')} 
      className='boardTile'style={
      {'backgroundColor': fog} }>
        
         <p>{terrainData[props.id].name}</p>
         <p>Roll {terrainData[props.id].value}</p>

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
