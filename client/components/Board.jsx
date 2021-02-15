import React from 'react'
import Tile from './Tile'
import boardTiles from '../boardTiles'
import tiles from '../boardTiles'

function Board (props) {
  return <div className='tiles'>
    {boardTiles.map(row => { 
      return  <div>
        { 
          row.map (tile => {
            return <Tile
              key={tile.id}
              // info={tile.info}
              // value={tile.value}
              // isVisible={tile.isVisible} 
              />
          }) 
        } </div>
    })}
  </div>
}

function boardStatus (){
}

export default Board