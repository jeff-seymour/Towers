import React from 'react'
import Tile from './Tile'
import boardTiles from '../boardTiles'

function Board (props) {
  return <div className='playspace'>
    {/* {tile.map(column => { */}
      <div className="board">
        {boardTiles.map(row => { 
          return  <div className="row">
            { 
              row.map (tile => {
                console.log(tile)
                return <Tile
                  id={tile.id}
                  board={tile.Board}
                  tower={tile.tower}
                  key={tile.id}
                  // info={tile.info}
                  // value={tile.value}
                  // isVisible={tile.isVisible} 
                  />}) 
              }
            </div>})}
      </div>

      <div className='notBoard'>
        <h2>stuff goes here</h2>
      </div>

    </div>
}


function boardStatus (){}
export default Board
