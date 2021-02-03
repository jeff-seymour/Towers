import React from 'react'
import Tile from './Tile'
import boardTiles from '../boardTiles'

function Board (props) {
  return <div className='tiles'>
    {boardTiles.map(tile => {
      return <Tile
        key={tile.id}
        // info={tile.info}
        // value={tile.value}
        // isVisible={tile.isVisible} 
        />
    })}
  </div>
}

export default Board